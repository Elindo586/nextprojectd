import { ChatOpenAI } from "langchain/chat_models/openai";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";

import { TextLoader } from "langchain/document_loaders/fs/text";
import { CharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { FaissStore } from "langchain/vectorstores/faiss";

let loader;
let docs;
let splitter;
let documents;
let embeddings1;
let vectorstore;

let model1;

let embeddings;
let vectoreStore;

let chain;
let result;
let chatHistory;
let followUpRes;

const useStore4 = async (req, res) => {
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

    const CUSTOM_QUESTION_GENERATOR_CHAIN_PROMPT = `Given the following conversation and a follow up question, return the conversation history excerpt that includes any relevant context to the question if it exists and rephrase the follow up question to be a standalone question.
    Chat History:
    {chat_history}
    Follow Up Input: {question}
    Your answer should follow the following format:
    \`\`\`
    Use the following pieces of context to answer the users question.
    If you don't know the answer, just say that you don't know, don't try to make up an answer.
    ----------------
    <Relevant chat history excerpt as context here>
    Standalone question: <Rephrased question here>
    \`\`\`
    Your answer:`;

    chain = ConversationalRetrievalQAChain.fromLLM(
      model1,
      vectorstore.asRetriever(),
      {
        memory: new BufferMemory({
          memoryKey: "chat_history", // Must be set to "chat_history"
          inputKey: "question", // The key for the input to the chain
          outputKey: "text", // The key for the final conversational output of the chain
          returnMessages: true,
          questionGeneratorChainOptions: {
            template: CUSTOM_QUESTION_GENERATOR_CHAIN_PROMPT,
          },
        }),
      }
    );
    chatHistory = "";

    result = await chain.call({
      question: message,
      chat_history: chatHistory,
    });
    chatHistory = [
      { role: "system", content: "you are a helpful assistant." },
      { role: "user", content: `${message}` },
      { role: "assistant", content: `${result.text}` },
    ];

    followUpRes = await chain.call({
      question: message,
      chat_history: chatHistory,
    });
    const stringResult = JSON.stringify(result.text);

    console.log(result);
    console.log(followUpRes);

    return res.status(200).json(stringResult);
  } else {
    res.status(405).json({ say: "Only POST is allowed" });
  }
};
export default useStore4;
