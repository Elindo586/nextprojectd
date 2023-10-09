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
      model1 = new OpenAI({
        openAIApiKey: process.env.OPENAI_API_KEY,
        temperature: 0,
      });

      embeddings = new OpenAIEmbeddings();
      vectoreStore = await FaissStore.load("./", embeddings);
      vectorStoreRetriever = vectoreStore.asRetriever();

      vectorChain = RetrievalQAChain.fromLLM(model1, vectorStoreRetriever);
    }

    const result = await vectorChain.call({
      query: message,
    });

    console.log(result);

    return res.status(200).json({ output: result });
  } else {
    res.status(405).json({ say: "Only POST is allowed" });
  }
};
export default useStore;
