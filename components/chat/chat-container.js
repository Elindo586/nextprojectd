import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import MessageInput from "./message-input";
import MessageDisplay from "./message-display";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// const ChatLogo = () => {
//   return (
//     <div className="chat-container">
//       <p className="chat_gpt_logo">ChatGPT</p>
//     </div>
//   );
// };

const ChatContainer = () => {
  const selectedConversationId = useSelector(
    (state) => state.dashboard.selectedConversationId
  );

  return (
    <Container id="chat-container-id" className="chat-container">
      <Row>
        <MessageDisplay />
      </Row>
      <Row>
        <MessageInput />
      </Row>
    </Container>
  );
};

export default ChatContainer;
