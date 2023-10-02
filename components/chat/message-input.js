import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "./store";
import Link from "next/link";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { v4 as uuid } from "uuid";
import {
  addMessage,
  addBotMessage,
  setSelectedConversationId,
  setConversationHistory,
  setConversations,
} from "./dashboard-slice";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [ui, setUi] = useState(false);

  // get session history

  // const sessionId = localStorage.getItem("sessionId");

  // socket.on("session-details", (data) => {
  //   const { sessionId, conversations } = data;

  // (data) => {
  //   const { sessionId, conversations } = data;
  //   localStorage.setItem("sessionId", sessionId);
  //   store.dispatch(setConversations(conversations));
  // };

  useEffect(() => {
    if (ui) {
      document.getElementById("chat-container-id").style.display = "none";
      document.getElementById("chat-button-id").style.display = "block";
      setUi(false);
    }
  }, [ui]);

  const dispatch = useDispatch();

  const selectedConversationId = useSelector(
    (state) => state.dashboard.selectedConversationId
  );

  const proceedMessage = async () => {
    const message = {
      aiMessage: false,
      text,
      id: uuid(),
      animate: false,
    };
    console.log(message);
    const newText = JSON.stringify(message.text);
    console.log(newText);

    const conversationId =
      selectedConversationId === null ? uuid() : selectedConversationId;

    // append to local store
    dispatch(
      addMessage({
        conversationId,
        message,
      })
    );
    dispatch(setSelectedConversationId(conversationId));

    // send to server

    let data = {
      newText,
    };
    const response = await fetch("/api/ai1", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // reset value of input
    setText("");

    const searchRes = await response.json();
    console.log(searchRes.output.text);

    const botText = searchRes.output.text;

    console.log(botText);

    setText(botText);

    console.log(text);

    const botMessage = {
      aiMessage: true,
      text,
      id: uuid(),
      animate: true,
    };

    dispatch(
      addBotMessage({
        conversationId,
        botMessage,
      })
    );
    dispatch(setSelectedConversationId(conversationId));

    setText("");
  };

  // const handleSubmit = (e) => {
  //   if (text.length > 0) {
  //     // e.preventDefault();
  //     console.log("Sending");
  //     let data = {
  //       text,
  //     };
  //   }
  // };

  const handleSendMessage = () => {
    if (text.length > 0) {
      // handleSubmit();
      proceedMessage();
    }
  };
  const handleKeyPressed = (event) => {
    if (event.key === "Enter" && text.length > 0) {
      // handleSubmit();
      proceedMessage();
    }
  };

  return (
    <Container>
      <Row>
        <input
          className="input-container"
          type="text"
          id="chat-input"
          name="chat-input"
          placeholder="Enter your message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyPressed}
        ></input>
      </Row>
      <Row className="btn-container">
        <Col>
          <button
            disabled={ui}
            onClick={() => setUi(true)}
            className="btn-close2"
          >
            Close
          </button>
        </Col>
        <Col>
          <button className="btn-send" onClick={handleSendMessage}>
            Send
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default MessageInput;
