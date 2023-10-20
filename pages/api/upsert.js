import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAI } from "openai";
import { v4 as uuid } from "uuid";
import bot from "../../utils/bot1.json";

const Data = async (req, res) => {
  const message = req.body.newText;
  const firstOne = req.body.firstMsg;

  const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
    environment: process.env.PINECONE_ENVIRONMENT,
  });
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const embeddingResult2 = await openai.embeddings.create({
    input: message,
    model: "text-embedding-ada-002",
  });
  console.log(message);

  const vector2 = embeddingResult2.data[0].embedding;
  // console.log(vector2);

  let index2 = pinecone.index("test1");

  const pineconeResult2 = await index2.query({
    vector: vector2,
    topK: 5,
    includeMetadata: true,
    includeValues: false,
  });
  // console.log(pineconeResult2);

  const metadata = pineconeResult2.matches.map(
    (element) => element.metadata.text
  );
  const metadataString = JSON.stringify(metadata);
  console.log(metadataString);

  const template = `You are a funny assistant bot. Answer the question as truthfully and accurately as possible using the provided context.
  If the answer is not contained within the text below, say "Sorry, I don't have that information".
  Text: ${metadataString}
 `;

  const result = await openai.chat.completions.create({
    messages: [
      { role: "user", content: message },
      { role: "system", content: template },
    ],
    model: "gpt-3.5-turbo",
  });
  // console.log(result.choices[0].message.content);

  return res.status(200).json({ output: result.choices[0].message.content });
};

export default Data;
