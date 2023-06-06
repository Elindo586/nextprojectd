import React from "react";
import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import twitterClient from "../api/twitterClient";
import { cron } from "cron";

import TweetText from "../../components/tweetText";
import tweets from "../../utils/daily-tweets.json";

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

  const [currentTweet, setCurrentTweet] = useState("");

  useEffect(() => {
    async () => {
      try {
        await twitterClient.tweets.createTweet({
          text: `${currentTweet}`,
        });
        console.dir(postTweet, {
          depth: null,
        });
      } catch (e) {
        console.log(e);
      }
    };
  }, [currentTweet]);
  //   const cronTweet1 = new cron("0 0 8 * * MON", async () => {
  // tweet1();
  //   });

  //   cronTweet1.start();

  return (
    <div className="main-about">
      <Container>
        <div>
          <button
            type="button"
            name="submit"
            className="btn btn-primary"
            onClick={() => {
              setCurrentTweet("my tweet is awesome1");
            }}
          >
            Click
          </button>
        </div>
      </Container>
    </div>
  );
}
