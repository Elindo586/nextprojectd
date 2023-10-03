import { TextLoader } from "langchain/document_loaders/fs/text";
import { CharacterTextSplitter } from "langchain/dist/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { FaissStore } from "langchain/vectorstores/faiss";

let loader;
let docs;
let splitter;
let documents;
let embeddings;
let vectorStore;

loader = new TextLoader("../utils/restaurant.txt");
docs = await loader.load();
splitter = new CharacterTextSplitter({
  chunkSize: 200,
  chunkOverlap: 50,
});
documents = await splitter.splitDocuments(docs);
console.log(documents);

embeddings = new OpenAIEmbeddings();
vectorStore = await FaissStore.fromDocuments(documents, embeddings);
await vectorStore.save("./");
