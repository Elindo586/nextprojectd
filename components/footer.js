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
      <p className="copyright">
        Copyright © {fullYear()} Edgar Lindo
        <br />
      </p>
    </footer>
  );
};

export default Footer;
