import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MessageInput = () => {
  const closeForm = () => {
    document.getElementById("chat-container-id").style.display = "none";
    document.getElementById("chat-button-id").style.display = "block";
  };
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();

    console.log("Sending");

    let data = {
      text,
    };

    fetch("/api/ai", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");

      if (res.status === 200) {
        console.log("Response succeeded!");
        setText("");
      }
    });
  };
  const handleSendMessage = () => {
    if (text.length > 0) {
      handleSubmit();
    }
  };
  const handleKeyPressed = (event) => {
    if (event.code === "Enter" && text.length > 0) {
      handleSubmit();
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
          <button onClick={closeForm} className="btn-close2">
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
