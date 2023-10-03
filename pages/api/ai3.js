import { TextLoader } from "langchain/document_loaders/fs/text";
import { CharacterTextSplitter } from "langchain/dist/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { OpenAI } from "langchain/llms/openai";
import { FaissStore } from "langchain/vectorstores/faiss";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
// import restaurants from "../../utils/restaurants.txt"

let loader;
let docs;
let splitter;
let documents;
let embeddings;
let vectorStore;

loader = new TextLoader("../../utils/restaurant.txt");
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
