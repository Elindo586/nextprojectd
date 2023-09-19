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
    if (text.length > 0) {
      e.preventDefault();
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
    }
  };
  // const handleSendMessage = () => {
  //   if (text.length > 0) {
  //     handleSubmit();
  //   }
  // };
  // const handleKeyPressed = (event) => {
  //   if (event.code === "Enter" && text.length > 0) {
  //     handleSubmit();
  //   }
  // };

  // const hiddenStyles = {
  //   position: "absolute",
  //   overflow: "hidden",
  //   clip: "rect(0 0 0 0)",
  //   height: 1,
  //   width: 1,
  //   margin: -1,
  //   padding: 0,
  //   border: 0,
  // };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Row>
          <input
            className="input-container"
            type="text"
            id="chat-input"
            name="chat-input"
            placeholder="Enter your message"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </Row>
        <Row className="btn-container">
          <Col>
            <button onClick={closeForm} className="btn-close2">
              Close
            </button>
          </Col>
          <Col>
            <button className="btn-send" type="submit">
              Send
            </button>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default MessageInput;
