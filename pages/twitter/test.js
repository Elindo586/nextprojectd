import React from "react";
import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { cron } from "cron";

import TweetText from "../../components/text";
import tweets from "../../utils/text.json";

export async function getStaticProps() {
  return {
    props: { tweets },
  };
}

export default function TweetTest({ tweets }) {
  //   const theText = tweets
  //     .filter((item) => item.id === "1")
  //     .map((item) => {
  //       return <TweetText key={item.ref} tweet={item.tweet} />;
  //     });

  const [currentTweet, setCurrentTweet] = useState("hi");

  useEffect(() => {
    console.log({ currentTweet });
  }, [currentTweet]);

  // const tweet1 = async () => {
  //   try {
  //     await twitterClient.v2.tweet(testing1.text);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  const testing1 = { text: "testing  1" };

  // useEffect(() => {
  //   async () => {
  //     try {
  //       console.log({ currentTweet });
  //       // await twitterClient.v2.tweet({
  //       //   text: `${currentTweet}`,
  //       // });
  //       // console.dir(postTweet, {
  //       //   depth: null,
  //       // });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  // });
  //   const cronTweet1 = new cron("0 0 8 * * MON", async () => {
  // tweet1();
  //   });

  //   cronTweet1.start();

  return (
    <div className="main-about">
      <Container>
        <div> {} </div> <br />
        <div>
          Hello there {currentTweet}
          <button
            type="button"
            className="btn btn-primary"
            onClick={async () => {
              try {
                await fetch("/api/twitterClient", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({
                    message: "It's a good day, for sure.",
                  }),
                });
              } catch (e) {
                console.log(e); // fetch doesn't really throw on 4xx range
              }
            }}
          >
            Click
          </button>
        </div>
      </Container>
    </div>
  );
}
