import { useEffect, useState } from "react";
import Image from "next/image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Text from "../components/text";
import db from "../utils/text.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

export default function Home({ db }) {
  const [current1, setCurrent1] = useState("current1");
  const [current2, setCurrent2] = useState("");

  useEffect(() => {
    console.log({ current1 });
  }, [current1]);

  console.log({ current2 });

  const getText = (e) => {
    db.filter((item) => item.id === "1").map((item) => {
      return <Text key={item.id} text={item.text} />;
    });
  };

  const testing1 = { text: "testing  1" };
  const testing2 = { text: "testing 2" };

  return (
    <div className="main-index">
      <div>
        {db
          .filter((item) => item.id === "1")
          .map((item) => {
            return <Text key={item.id} text={item.text} />;
          })}
      </div>

      <Container>
        <div>
          {" "}
          Hello there {current1}
          <button
            type="button"
            name="submit"
            className="btn btn-primary"
            onClick={() => {
              setCurrent1({ getText });
            }}
          >
            Click
          </button>
        </div>{" "}
        <br />
        <div>
          Hello there {current2}
          <button
            type="button"
            name="submit"
            className="btn btn-primary"
            onClick={() => {
              setCurrent2(testing2.text);
              console.log("hello");
            }}
          >
            Click
          </button>
        </div>{" "}
        <br />
      </Container>
    </div>
  );
}
