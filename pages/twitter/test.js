import React from "react";
import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { CronJob } from "cron";

import db from "../../utils/text.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

export default function TweetTest({ db }) {
  const [current1, setCurrent1] = useState(null);

  // useEffect(() => {
  //   console.log(current1);
  // }, [current1]);

  useEffect(() => {
    console.log({ current1 });
    if (current1 === null) return;

    const getText1 = () => {
      const target = db.find((item) => item.id === "1");
      if (!target) return "";
      return target.text;
    };
    const controller = new AbortController();

    const cronJob1 = new CronJob("50 8 * * * ", async () => {
      try {
        await fetch("/api/twitterClient", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ message: getText1() }),
          signal: controller.signal,
        });
      } catch (e) {
        if (controller.signal.aborted) return; // do nothing
        console.log(e); // fetch doesn't really throw on 4xx range
      }
    });
    cronJob1.start();
    return () => {
      cronJob1.stop();
      controller.abort();
    };
  }, [current1, db]);

  // useEffect(() => {
  //   if (current1 === null) return;

  //   const getText2 = () => {
  //     const target2 = db.find((item) => item.id === "2");
  //     if (!target2) return "";
  //     return target2.text;
  //   };
  //   const controller2 = new AbortController();

  //   const cronJob2 = new CronJob("30 13 * * * ", async () => {
  //     try {
  //       await fetch("/api/twitterClient", {
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify({ message: getText2() }),
  //         signal: controller2.signal,
  //       });
  //     } catch (e) {
  //       if (controller2.signal.aborted) return; // do nothing
  //       console.log(e); // fetch doesn't really throw on 4xx range
  //     }
  //   });
  //   cronJob2.start();
  //   return () => {
  //     cronJob2.stop();
  //     controller2.abort();
  //   };
  // }, [current1, db]);

  return (
    <div className="main-about">
      <Container>
        <div> {} </div> <br />
        <div>
          {/* Hello there {current1} */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setCurrent1(1)}
          >
            Click
          </button>
        </div>
      </Container>
    </div>
  );
}
