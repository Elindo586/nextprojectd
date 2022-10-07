import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  function fullYear() {
    const yearFormat = new Date();
    return yearFormat.getFullYear();
  }
  return (
    <footer className="main-footer">
      <Container>
        <Row>
          <Col className="footer-privacy">PRIVACY POLICY</Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <p className="copyright">
              Copyright © {fullYear()} Edgar Lindo - All rights Reserved.
            </p>
          </Col>
          <Col className="dev-by">
            <span className="dev-by2">Developed by:</span>{" "}
            <span className="edgar">Edgar Lindo</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
