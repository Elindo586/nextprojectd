import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "../components/form-contact";

const Contact = () => {
  return (
    <div className="main-form-div">
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
