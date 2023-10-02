import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

const workWithLangchain = async (req, res) => {
  const model = new OpenAI({
    temperature: 0,
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const message = req.body.newText;

  console.log(message);

  const template = "Be very funny when answering questions {question}";

  const prompt = new PromptTemplate({ template, inputVariables: ["question"] });

  const chain = new LLMChain({ llm: model, prompt });

  const result = await chain.call({
    question: message,
  });
  console.log(result.text);
  res.status(200).json({ output: result });
};

export default workWithLangchain;
