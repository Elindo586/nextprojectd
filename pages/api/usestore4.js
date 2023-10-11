import { OpenAI } from "langchain/llms/openai";

import { TextLoader } from "langchain/document_loaders/fs/text";
import { CharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RetrievalQAChain, loadQAStuffChain } from "langchain/chains";
import { FaissStore } from "langchain/vectorstores/faiss";

let loader;
let docs;
let splitter;
let documents;
let embeddings1;
let vectorstore;

let model;

let embeddings;
let vectoreStore;

let chain;
let result;

const useStore4 = async (req, res) => {
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
    model = new OpenAI({
      modelName: "gpt-4",
      openAIApiKey: process.env.OPENAI_API_KEY,
      temperature: 0,
    });

    embeddings = new OpenAIEmbeddings();
    vectoreStore = await FaissStore.load("./", embeddings);

    chain = new RetrievalQAChain({
      combineDocumentsChain: loadQAStuffChain(model),
      retriever: vectoreStore.asRetriever(),
      returnSourceDocuments: true,
    });
  }

  result = await chain.call({
    query: message,
  });

  console.log(result);

  return res.status(200).json(result);
};
export default useStore4;
