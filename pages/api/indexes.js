const { OpenAIEmbeddings } = require("langchain/embeddings/openai");
const { DirectoryLoader } = require("langchain/document_loaders/fs/directory");
const { FaissStore } = require("langchain/vectorstores/faiss");
const { CharacterTextSplitter } = require("langchain/text_splitter");
const { TextLoader } = require("langchain/document_loaders/fs/text");

const indexes = async (req, res) => {
  const loader = new DirectoryLoader("./documents", {
    ".txt": (path) => new TextLoader(path),
  });

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
  await vectorStore.save("./");

  res.status(200).json({ ok: ok });
};

module.exports = { indexes };
