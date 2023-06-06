// import React from "react";
// import { useEffect } from "react";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// import { twitterClient1, twitterBearer } from "../api/twitterClient1";

// export default function Test2() {
//   const [currentTweet, setCurrentTweet] = UseState("");

//   useEffect(() => {
//     const tweet1 = async () => {
//       try {
//         await twitterClient1.v2.tweet(`${currentTweet}`);
//       } catch (e) {
//         console.log(e);
//       }
//     };
//   }, [currentTweet]);

//   return (
//     <button
//       type="submit"
//       name="submit"
//       value="submit"
//       className="btn btn-primary form-button"
//       onClick={() => {
//         setCurrentTweet("my tweet is awesome");
//       }}
//     />
//   );
// }
(async () => {
  try {
    const postTweet = await twitterClient.tweets.createTweet({
      // The text of the Tweet
      text: "Are you excited for the weekend?",

      // Options for a Tweet with a poll
      poll: {
        options: ["Yes", "Maybe", "No"],
        duration_minutes: 120,
      },
    });
    console.dir(postTweet, {
      depth: null,
    });
  } catch (error) {
    console.log(error);
  }
})();
