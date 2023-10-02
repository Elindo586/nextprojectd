import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedConversationId } from "./dashboard-slice";
import Link from "next/link";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Button = () => {
  const dispatch = useDispatch();

  const handleSetSelectedChat = (id) => {
    dispatch(setSelectedConversationId(id));
  };
  const handleChooseNewChat = () => {
    handleSetSelectedChat("new");
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
