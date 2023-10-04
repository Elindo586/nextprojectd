import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { FaissStore } from "langchain/vectorstores/faiss";
import { openAI } from "langchain/llms/openai";
import { RetrievalQAChain, loadQAStuffChain } from "langchain/chains";

let model;
let embeddings;
let vectoreStore;
let chain;

const useStore = async (req, res) => {
  if (req.method === "POST") {
    const message = req.body.newText;
    const firstOne = req.body.firstMsg;
    console.log(message);
    if (firstOne) {
      model = new openAI({
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

    const result = await chain.call({
      query: message,
    });

    console.log(result.text);

    return res.status(200).json({ output: result });
  } else {
    res.status(405).json({ say: "Only POST is allowed" });
  }
};
export default useStore;
