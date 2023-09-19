import { React, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import MessageInput from "./message-input";
import MessageDisplay from "./message-display";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ChatContainer = () => {
  return (
    <Container id="chat-container-id" className="chat-container">
      <Row>
        <MessageDisplay />
      </Row>
      <Row>
        <MessageInput />
      </Row>{" "}
    </Container>
  );
};

export default ChatContainer;
