import Image from "next/image";
import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MetaEnglish from "../../components/meta-english";
import db from "../../utils/meta-tags/meta-tags.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

export default function Home({ db }) {
  const [color, setColor] = useState("red");
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
        <Row className="row-1-index">
          <Col md={12}>
            <Col sm={5} xs={5}>
              <div className="wrap-index">
                <Image
                  src="/images/edgar.png"
                  id="edgar"
                  alt="edgar lindo"
                  title="In my house."
                  width={250}
                  height={250}
                />{" "}
              </div>
            </Col>

            <Col className="first-text-index">
              Hello there!, I am Edgar Lindo. This space is created to let
              people know a bit more about myself, my interests, and my work.{" "}
              <br /> <br />
              Through the years I have met thousands of people working in the
              industrial machinery business, and always I seem to find people
              asking questions such as, where are you from? how do you speak
              Spanish? how did you learn English? How is it that you know this
              product? Where do you live now?... and so on..
              <br /> <br />
              Rather then explain myself every time I enter a conversation about
              my background, my interests, or my current project, maybe is
              better to write things in a public space and have fun with it.
              <br /> <br />
              Welcome to my cloud house! <br />
            </Col>
          </Col>
        </Row>
        <Row className="row-2-index align-items-end">
          <Col className="test">
            <h2 className="second-text-index">
              {" "}
              Who is Edgar Lindo in short?{" "}
            </h2>{" "}
            <p className="third-text-index">
              I am an industrial automation sales guy with experience in
              hydraulics, pneumatics, electrical, and mechanical industrial
              products. I have experience in industrial markets from north,
              central, and south America working in wide range of industrial
              machinery applications with End Users, distributors, and machine
              builders (OEMs). <br /> <br />I am by need/fun a programmer, a
              website builder. Learning to code later in life was a surprise
              that I enjoy, and I keep on learning and developing for work
              reasons, and likely for fun as well. <br /> <br />I am a family
              guy, even when I am always busy is important to have time with
              your family specially for the lady and growing kids.
              <br />
              <br />
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <>
            <h1>My favorite color is {color}!</h1>
            <button type="button" onClick={() => setColor("blue")}>
              Blue
            </button>
          </>
        </Row>
      </Container>
    </div>
  );
}
