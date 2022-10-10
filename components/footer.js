import React from "react";
import Link from "next/link";
import Image from "next/image";
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
          <Col>
            <p className="copyright">
              Copyright © {fullYear()} Edgar Lindo - All rights Reserved.
            </p>
          </Col>
          <Col className="dev-by">
            <Row>
              <Col>
                <span className="dev-by2">Developed by:</span>{" "}
                <span className="edgar">Edgar Lindo</span>
              </Col>
              <Row>
                <Col className="social-icon-col">
                  <a
                    className="footer-icon"
                    href="https://www.youtube.com/c/EdgarLindo/videos"
                    target="blank"
                  >
                    <Image
                      src="/images/footer-images/footer-youtube.png"
                      id="youtube-spanish"
                      alt="youtube spanish logo"
                      width={25}
                      height={25}
                      className="footer-icon"
                      title="YouTube Spanish"
                    />
                  </a>

                  <a
                    className="footer-icon"
                    href="https://www.youtube.com/c/EdgarLindo/videos"
                    target="blank"
                  >
                    <Image
                      src="/images/footer-images/footer-youtube.png"
                      id="youtube-spanish"
                      alt="youtube spanish logo"
                      width={25}
                      height={25}
                      title="YouTube English"
                    />
                  </a>
                  <a
                    className="footer-icon"
                    href="https://www.youtube.com/c/EdgarLindo/videos"
                    target="blank"
                  >
                    <Image
                      src="/images/footer-images/footer-linkedin.png"
                      id="youtube-spanish"
                      alt="youtube spanish logo"
                      width={25}
                      height={25}
                      title="LinkedIn"
                    />
                  </a>
                  <a
                    className="footer-icon"
                    href="https://www.youtube.com/c/EdgarLindo/videos"
                    target="blank"
                  >
                    <Image
                      src="/images/footer-images/footer-twitter.png"
                      id="youtube-spanish"
                      alt="youtube spanish logo"
                      width={25}
                      height={25}
                      title="Twitter"
                    />
                  </a>
                  <a
                    className="footer-icon"
                    href="https://www.youtube.com/c/EdgarLindo/videos"
                    target="blank"
                  >
                    <Image
                      src="/images/footer-images/footer-facebook.png"
                      id="youtube-spanish"
                      alt="youtube spanish logo"
                      width={25}
                      height={25}
                      title="Facebook"
                    />
                  </a>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
