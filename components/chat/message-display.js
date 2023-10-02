import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedConversationId } from "./dashboard-slice";
import { GrUser } from "react-icons/gr";
import { FaRobot } from "react-icons/fa6";
import Image from "next/image";
import Message from "./message";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MessageDisplay = () => {
  // const dispatch = useDispatch();
  // const conversations = useSelector((state) => state.dashboard.conversations);

  const { selectedConversationId, conversations } = useSelector(
    (state) => state.dashboard
  );

  const conversation = conversations.find(
    (c) => c.id === selectedConversationId
  );

  return (
    <Container>
      <Row className="chat-display-header">
        <Col className="col-10"> I am on vacations for now. </Col>
        <Col className="col-2">
          <FaRobot />
        </Col>
      </Row>
      <Row className="chat-display">
        {conversation?.messages.map((m, index) => (
          <Message
            key={m.id}
            text={m.text}
            aiMessage={m.aiMessage}
            animate={index === conversation.messages.length - 1 && m.aiMessage}
          />
        ))}
      </Row>
    </Container>
  );
};

export default MessageDisplay;
