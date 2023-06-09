import React from "react";
import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { cron } from "cron";

import Text from "../../components/text";
import db from "../../utils/text.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

export default function TweetTest({ db }) {
  const [current1, setCurrent1] = useState("I am the current 1");

  useEffect(() => {
    console.log({ current1 });
  }, [current1]);

  const getText = () => {
    return db // Modified here
      .filter((item) => item.id === "1")
      .map((item) => <Text key={item.id} text={item.text} />);
  };

  const theString = getText.toString();

  return (
    <div className="main-about">
      <Container>
        <div> {} </div> <br />
        <div>
          Hello there {current1}
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
                    message: { getText },
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
