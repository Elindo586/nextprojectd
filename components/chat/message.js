import React, { useRef, useEffect, useState } from "react";
import { GrUser } from "react-icons/gr";
import { FaRobot } from "react-icons/fa6";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SlowText = (props) => {
  const { speed, textOut } = props;
  const [placeholder, setPlaceholder] = useState(textOut[0]);
  const index = useRef(0);

  useEffect(() => {
    function tick() {
      index.current++;
      setPlaceholder((prev) => prev + textOut[index.current]);
    }
    if (index.current < textOut.length - 1) {
      let addChar = setInterval(tick, speed);
      return () => clearInterval(addChar);
    }
  }, [placeholder, speed, textOut]);
  return <span>{placeholder}</span>;
};

const Message = ({ text, aiMessage, animate }) => {
  return (
    <Container
      className="message_container"
      style={{ background: aiMessage ? "rgb(247, 247, 248)" : "white" }}
    >
      <Row>
        <Col className="col-2">{aiMessage ? <FaRobot /> : <GrUser />}</Col>
        <Col className="col-10">
          <p className="message_text">
            {animate ? <SlowText speed={80} textOut={text} /> : text}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Message;
