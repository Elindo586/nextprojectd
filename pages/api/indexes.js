const { OpenAIEmbeddings } = require("langchain/embeddings/openai");
const { FaissStore } = require("langchain/vectorstores/faiss");
const { CharacterTextSplitter } = require("langchain/text_splitter");
const { TextLoader } = require("langchain/document_loaders/fs/text");

// import { TextLoader } from "langchain/document_loaders/fs/text";
// import { CharacterTextSplitter } from "langchain/text_splitter";
// import { OpenAIEmbeddings } from "langchain/embeddings/openai";
// import { FaissStore } from "langchain/vectorstores/faiss";

const indexes = async (req, res) => {
  const loader = new TextLoader("../../pages/api/restaurant.txt");
  console.log(loader);
  const docs = await loader.load();
  const splitter = new CharacterTextSplitter({
    chunkSize: 200,
    chunkOverlap: 50,
  });
  const documents = await splitter.splitDocuments(docs);
  console.log(documents);

  const embeddings = new OpenAIEmbeddings();
  const vectorStore = await FaissStore.fromDocuments(documents, embeddings);
  await vectorStore.save("../../pages/api/");

  res.status(200).json({ ok: ok });
};

module.exports = { indexes };
// export default indexes;
