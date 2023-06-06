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

export default function About({ tweets }) {
  const theText = tweets
    .filter((item) => item.id === "1")
    .map((item) => {
      return <TweetText key={item.ref} tweet={item.tweet} />;
    });

  const tweet1 = async () => {
    try {
      await twitterClient.v2.tweet(`${theText}`);
    } catch (e) {
      console.log(e);
    }
  };
  //   const cronTweet1 = new cron("0 0 8 * * MON", async () => {
  tweet1();
  //   });

  //   cronTweet1.start();

  return (
    <div className="main-about">
      <Container>
        <div>Test</div>
      </Container>
    </div>
  );
}
