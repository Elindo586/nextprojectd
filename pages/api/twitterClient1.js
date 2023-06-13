import db from "../../utils/text.json";

const { TwitterApi } = require("twitter-api-v2");

const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
});

const bearer = new TwitterApi(process.env.BEARER_TOKEN);
const twitterClient = client.readWrite;
const twitterBearer = bearer.readOnly;

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const getText1 = () => {
  const target = db.find((item) => item.id === "1");
  if (!target) return "";
  return JSON.stringify(target.text);
};

// module.exports = { twitterClient, twitterBearer };

const workWithTheTwitterClient = async (req, res) => {
  // here you receive data from your client for example:

  const message = getText1(); // or maybe, if not message, do not send anything at all
  await twitterClient.v2.tweet(message);

  return res.status(200).json({ ok: "ok" });
};

export default workWithTheTwitterClient;
