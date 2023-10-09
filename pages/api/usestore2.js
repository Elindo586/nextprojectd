import { ChatOpenAI } from "langchain/chat_models/openai";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";

import { TextLoader } from "langchain/document_loaders/fs/text";
import { CharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { FaissStore } from "langchain/vectorstores/faiss";

import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import {
  SimpleSequentialChain,
  LLMChain,
  RetrievalQAChain,
  loadQAStuffChain,
} from "langchain/chains";

let chain;
let result;

let loader;
let docs;
let splitter;
let documents;
let embeddings1;
let vectorstore;

let model1;

let embeddings;
let vectoreStore;
let vectorStoreRetriever;
let vectorChain;
// let overallChain;

const useStore = async (req, res) => {
  if (req.method === "POST") {
    loader = new TextLoader("./documents/restaurant.txt");
    docs = await loader.load();
    splitter = new CharacterTextSplitter({
      chunkSize: 200,
      chunkOverlap: 50,
    });
    documents = await splitter.splitDocuments(docs);
    embeddings1 = new OpenAIEmbeddings();
    vectorstore = await FaissStore.fromDocuments(documents, embeddings1);
    await vectorstore.save("./");

    const message = req.body.newText;
    const firstOne = req.body.firstMsg;

    console.log(message);
    if (firstOne) {
      model1 = new ChatOpenAI({
        modelName: "gpt-4",
        openAIApiKey: process.env.OPENAI_API_KEY,
        temperature: 0,
      });

      embeddings = new OpenAIEmbeddings();
      vectoreStore = await FaissStore.load("./", embeddings);
    }
    chain = ConversationalRetrievalQAChain.fromLLM(
      model1,
      vectoreStore.asRetriever(),
      {
        memory: new BufferMemory({
          memoryKey: "chat_history", // Must be set to "chat_history"
          inputKey: "question", // The key for the input to the chain
          outputKey: "text", // The key for the final conversational output of the chain
          returnMessages: true,
          // questionGeneratorChainOptions: {
          //   llm: fasterModel,
          // },
        }),
      }
    );
    let chatHistory = "";
    result = await chain.call({
      question: message,
      chat_history: chatHistory,
      // Add the new user message here
      // { role: 'user', content: message },
    });
    chatHistory = `${message}\n${result.text}`;

    const followUpRes = await chain.call({
      question: "Was that nice?",
      chat_history: chatHistory,
    });

    console.log(result);

    return res.status(200).json({ output: result });
  } else {
    res.status(405).json({ say: "Only POST is allowed" });
  }
};
export default useStore;
