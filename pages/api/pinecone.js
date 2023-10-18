import { OpenAI } from "openai";
import { Pinecone } from "@pinecone-database/pinecone";

const useStore4 = async (req, res) => {
  const message = req.body.newText;
  const firstOne = req.body.firstMsg;

  console.log(message);

  const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
    environment: process.env.PINECONE_ENVIRONMENT,
  });

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const result = await openai.chat.completions.create({
    messages: [
      { role: "user", content: message },
      { role: "system", content: prompt },
    ],
    model: "gpt-3.5-turbo",
  });
  console.log(result.choices[0].message.content);

  return res.status(200).json({ output: result.choices[0].message.content });
};
export default useStore4;
