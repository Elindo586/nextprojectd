import React from "react";
import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import twitterClient from "../api/twitterClient";
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
            name="submit"
            className="btn btn-primary"
            onClick={async () => {
              try {
                await twitterClient.v2.tweet("hello 1, what is going on no?");
              } catch (e) {
                console.log(e);
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
