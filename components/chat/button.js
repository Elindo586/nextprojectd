import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import {
  addMessage,
  addBotMessage,
  setSelectedConversationId,
  addChatHistory,
  setConversationHistory,
  setConversations,
  deleteConversations,
} from "./dashboard-slice";
const Button = () => {
  const dispatch = useDispatch();

  const handleSetSelectedChat = (id) => {
    dispatch(deleteConversations());
    dispatch(setSelectedConversationId(id));
  };
  const handleChooseNewChat = () => {
    handleSetSelectedChat(uuid());
    document.getElementById("chat-container-id").style.display = "block";
    document.getElementById("chat-button-id").style.display = "none";
  };

  return (
    <Container id="chat-button-id" className="chat-button">
      <Row>
        <div>
          <button onClick={handleChooseNewChat} className="inside-chat-button">
            Chat
          </button>
        </div>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default Button;
