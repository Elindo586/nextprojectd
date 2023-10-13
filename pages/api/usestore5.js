import { Configuration, OpenAIApi } from "openai";

const useStore4 = async (req, res) => {
  const message = req.body.newText;
  const firstOne = req.body.firstMsg;

  const configuration = new Configuration({
    organization: "org-Si6RG5gMXD61fYGzHmT6EFYI",
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const result = await openai.listEngines();

  console.log(result);

  return res.status(200).json({ output: result });
};
export default useStore4;
