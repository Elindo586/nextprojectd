import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

let model;
let chain;
let prompt;
let template;

const workWithLangchain2 = async (req, res) => {
  if (req.method === "POST") {
    const message = req.body.newText;
    const firstOne = req.body.firstMsg;
    console.log(message);
    if (firstOne) {
      model = new OpenAI({
        temperature: 0,
        openAIApiKey: process.env.OPENAI_API_KEY,
      });

      template = "Be very funny when answering questions {question}";

      prompt = new PromptTemplate({
        template,
        inputVariables: ["question"],
      });

      chain = new LLMChain({ llm: model, prompt });
    }
    const result = await chain.call({
      question: message,
    });
    console.log(result.text);
    return res.status(200).json({ output: result });
  } else {
    res.status(405).json({ say: "Only POST is allowed" });
  }
};

export default workWithLangchain2;
