import { React, useEffect } from "react";
import { FaRobot } from "react-icons/fa6";
import Message from "./message";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MessageDisplay = () => {
  //   const closeForm = () => {
  //     document.getElementById("chat-container-id").style.display = "none";
  //     document.getElementById("chat-button-id").style.display = "block";
  //   };

  return (
    <Container>
      <Row className="chat-display-header">
        <Col className="col-10"> I am on vacations for now. </Col>
        <Col className="col-2">
          <FaRobot />
        </Col>
      </Row>
      <Row className="chat-display">
        <Message content="hi" aiMessage={false} />
        <Message content="I'll be waking up in a week or so" aiMessage={true} />
      </Row>
    </Container>
  );
};

export default MessageDisplay;
