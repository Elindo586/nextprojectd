import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "../components/form-contact";

import MetaEnglish from "../components/meta-english";
import db from "../utils/meta-tags/meta-tags.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const Contact = () => {
  return (
    <div className="main-form-div">
      <div>
        {db
          .filter((item) => item.id === "contact")
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
        <Row>
          <Col>
            <ContactForm />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Contact;
