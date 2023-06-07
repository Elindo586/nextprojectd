import { useEffect, useState } from "react";
import Image from "next/image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MetaEnglish from "../components/meta-english";
import db from "../utils/text.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

export default function Home({ db }) {
  const [current1, setCurrent1] = useState("current1");
  const [current2, setCurrent2] = useState("");

  const testing1 = { text: "testing  1" };
  const testing2 = { text: "testing 2" };

  useEffect(() => {
    console.log({ current1 });
  }, [current1]);

  console.log({ current2 });

  return (
    <div className="main-index">
      <div>
        {db
          .filter((item) => item.id === "index")
          .map((item) => {
            return (
              <MetaEnglish
                key={item.id}
                metaTitle={item.metaTitle}
                metaDescription={item.metaDescription}
                metaKeywords={item.metaKeywords}
                ogTitle={item.ogTitle}
                ogDescription={item.ogDescription}
                ogURL={item.ogURL}
                ogImage={item.ogImage}
                twitterTitle={item.twitterTitle}
                twitterDescription={item.twitterDescription}
                twitterImage={item.twitterImage}
              />
            );
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
            onClick={() => setCurrent1(testing1.text)}
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
              console.log(testing2.text);
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
