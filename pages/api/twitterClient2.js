// //Import package for the Basic paid
// import { Client, auth } from "twitter-api-sdk";

// // Import package for the free npm
// // const { TwitterApi } = require("twitter-api-v2");

// // Initialize auth client first for the basic paid package
// const authClient = new auth.OAuth2User({
//   client_id: process.env.CLIENT_ID,
//   client_secret: process.env.CLIENT_SECRET,
//   callback: "We are ON",
//   scopes: ["tweet.read", "users.read", "offline.access"],
// });

// // Pass auth credentials to the library client for the basic paid
// const twitterClient = new Client(authClient);

// // All next is for the free npm until module.export twitterClient for FREE version.
// // const client = new TwitterApi({
// //   appKey: process.env.API_KEY,
// //   appSecret: process.env.API_SECRET,
// //   accessToken: process.env.ACCESS_TOKEN,
// //   accessSecret: process.env.ACCESS_SECRET,
// // });

// // const bearer = new TwitterApi(process.env.BEARER_TOKEN);
// // const twitterClientF = client.readWrite;
// // const twitterBearer = bearer.readOnly;

// module.exports = { twitterClient };
