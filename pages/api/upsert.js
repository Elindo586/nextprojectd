import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAI } from "openai";
import bot from "../../utils/bot.json";

// const { OpenAI } = require("openai");
// const Bot = require("../../utils/bot.json");

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

  const jsonData = JSON.stringify(bot);
  const batchSize = 20;
  const splitData = [];
  for (let i = 0; i < jsonData.length; i += batchSize) {
    splitData.push(jsonData.slice(i, i + batchSize));
  }
  // console.log(splitData);

  let embeddingResult = await openai.embeddings.create({
    input: splitData,
    model: "text-embedding-ada-002",
  });
  // console.log(embeddingResult);

  let embeddings = [];
  embeddings = embeddings.concat(
    embeddingResult.data.map((entry) => entry.embedding)
  );

  // console.log(embeddings);

  let vector = embeddingResult.data.map((entry, i) => {
    return {
      id: "a",
      metadata: {
        information: "company",
      },
      values: embeddings[i],
    };
  });
  // console.log(vector);

  let insertBatches = [];
  while (vector.length) {
    let batch = vector.splice(0, 250);

    let index = pinecone.index("test1");
    let indexResults = await index.upsert(batch);
    insertBatches.push(indexResults);
  }
  // console.log(insertBatches);

  const embeddingResult2 = await openai.embeddings.create({
    input: message,
    model: "text-embedding-ada-002",
  });

  const vector2 = embeddingResult2.data[0].embedding;
  console.log(vector2);

  let index2 = pinecone.index("test1");

  const pineconeResult2 = await index2.query({
    vector: vector2,
    topK: 5,
    includeValues: true,
  });

  const matches = pineconeResult2.matches; // array of matches

  // console.log(matches);

  const result = await openai.chat.completions.create({
    messages: [
      { role: "user", content: message },
      { role: "system", content: matches },
    ],
    model: "gpt-3.5-turbo",
  });
  // console.log(result.choices[0].message.content);

  return res.status(200).json({ output: result.choices[0].message.content });
};

export default Data;
