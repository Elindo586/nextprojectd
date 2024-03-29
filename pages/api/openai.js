import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAI } from "openai";

let pinecone;
let openai;
let embeddingResult;
let vector;
let index;
let pineconeResult;

const Data = async (req, res) => {
  const message = req.body.newText;
  const firstOne = req.body.firstMsg;
  const chatHistory = req.body.chatToServer;

  console.log(message);
  console.log(chatHistory);

  if (firstOne) {
    pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY,
      environment: process.env.PINECONE_ENVIRONMENT,
    });
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  embeddingResult = await openai.embeddings.create({
    input: message,
    model: "text-embedding-ada-002",
  });
  // console.log(message);

  vector = embeddingResult.data[0].embedding;
  // console.log(vector);

  index = pinecone.index("test1");

  pineconeResult = await index.query({
    vector: vector,
    topK: 5,
    includeMetadata: true,
    includeValues: false,
  });
  // console.log(pineconeResult);

  const metadata = pineconeResult.matches.map(
    (element) => element.metadata.text
  );
  const metadataString = JSON.stringify(metadata);
  // console.log(metadataString);

  const instructions = `You are an assistant for a company that sells industrial products for manufacturing automation. Chit chat with a customer who is interested in buying a product, however, your primary purpose is to answer using supplied information relevant to user's questions about our business.`;

  const result = await openai.chat.completions.create({
    messages: [
      ...chatHistory,
      { role: "system", content: instructions },
      { role: "assistant", content: metadataString },
      { role: "user", content: message },
    ],
    model: "gpt-3.5-turbo",
    max_tokens: 150,
    temperature: 0.3,
  });

  // console.log(result.choices[0].message.content);

  return res.status(200).json({ output: result.choices[0].message.content });
};

export default Data;
