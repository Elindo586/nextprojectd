"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { v4 as uuid } from "uuid";
import {
  addMessage,
  addBotMessage,
  setSelectedConversationId,
  addChatHistory,
  setConversationHistory,
  setConversations,
  deleteConversations,
} from "./dashboard-slice";

export default function MessageInput() {
  const [text, setText] = useState("");
  const [ui, setUi] = useState(false);
  const [firstMsg, setFirstMsg] = useState(true);
  const [tab, setTab] = useState(true);

  // get session history

  // const sessionId = localStorage.getItem("sessionId");

  // socket.on("session-details", (data) => {
  //   const { sessionId, conversations } = data;

  // (data) => {
  //   const { sessionId, conversations } = data;
  //   localStorage.setItem("sessionId", sessionId);
  //   store.dispatch(setConversations(conversations));
  // };

  const dispatch = useDispatch();

  const selectedConversationId = useSelector(
    (state) => state.dashboard.selectedConversationId
  );
  // console.log(selectedConversationId);

  const chatHistory = useSelector((state) => state.dashboard.chatHistory);
  // console.log(chatHistory);

  const conversationId =
    selectedConversationId === null ? uuid() : selectedConversationId;

  useEffect(() => {
    sessionStorage.setItem("sessionId", conversationId);
  }, [conversationId]);

  let chatToServer;

  const history = chatHistory.find((c) => c.id === conversationId);
  if (history) {
    chatToServer = history.messages;
  } else {
    chatToServer = [];
  }

  let chatToEmailServer = useMemo(() => {
    return chatToServer;
  }, [chatToServer]);

  console.log(typeof chatToServer);
  console.log(chatToServer);

  const emailChatHistory = useCallback(async () => {
    await fetch("/api/chat-email", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chatToEmailServer),
      keepalive: true,
    }).then((res) => {
      console.log("response received");
      if (res.status === 200) {
        console.log("response succeeded");
      }
    });
  }, [chatToEmailServer]);

  useEffect(() => {
    if (ui) {
      if (chatToEmailServer.length > 0) {
        emailChatHistory();
        setFirstMsg(true);
      }

      dispatch(deleteConversations());
      document.getElementById("chat-container-id").style.display = "none";
      document.getElementById("chat-button-id").style.display = "block";

      setUi(false);
    }
  }, [ui, dispatch, chatToEmailServer, firstMsg, emailChatHistory]);

  // useEffect(() => {
  //   document.addEventListener("visibilitychange", () => {
  //     if (document.visibilityState === "hidden") {
  //       if (chatToEmailServer.chatToServer.length) {
  //         emailChatHistory();
  //         setFirstMsg(true);
  //       }
  //     }
  //   });
  // });

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      if (chatToEmailServer.chatToServer.length > 0) {
        emailChatHistory();
        setFirstMsg(true);
      }
    });
  }, [chatToEmailServer, firstMsg, emailChatHistory]);

  const proceedMessage = async () => {
    const message = {
      aiMessage: false,
      text,
      id: uuid(),
      animate: false,
    };
    // console.log(message);
    const newText = JSON.stringify(message.text);
    console.log(newText);

    // const conversationId =
    //   selectedConversationId === null ? uuid() : selectedConversationId;

    dispatch(
      addMessage({
        conversationId,
        message,
      })
    );
    dispatch(setSelectedConversationId(conversationId));

    // const history = chatHistory.find((c) => c.id === conversationId);
    // if (history) {
    //   chatToServer = history.messages;
    // } else {
    //   chatToServer = [{ role: "assistant", content: "hi" }];
    // }

    // console.log(chatToServer);

    let data = {
      newText,
      firstMsg,
      chatToServer,
    };

    // console.log(data);

    const response = await fetch("/api/openai", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // reset value of input
    setText("");
    setFirstMsg(false);

    let searchRes;

    try {
      searchRes = await response.json();
      // console.log(searchRes.output.choices);
    } catch (err) {
      console.log("Error parsing", err);
    }

    const botText = searchRes.output;

    const botMessage = {
      aiMessage: true,
      text: botText,
      id: uuid(),
      animate: true,
    };

    dispatch(
      addBotMessage({
        conversationId,
        botMessage,
      })
    );

    const userHistory = { role: "user", content: newText };
    const botHistory = { role: "assistant", content: botText };

    dispatch(addChatHistory({ userHistory, botHistory, conversationId }));

    dispatch(setSelectedConversationId(conversationId));

    setText("");
  };

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

  // useEffect(() => {
  //   if (tab) {
  //     const sessionId = localStorage.getItem("sessionId");
  //     const intervals = setInterval(() => {
  //       if (sessionId === null) {
  //         if (chatToServer.length > 0) {
  //           emailChatHistory();
  //           setTab(false);
  //         }
  //       }
  //       if (tab === false) {
  //         clearInterval(intervals);
  //         setTab(true);
  //       }
  //     }, 1000);
  //   }
  // });

  // if (tab) {
  //   if (typeof window !== "undefined") {
  //     const sessionId = sessionStorage.getItem("sessionId");
  //     const intervals = setInterval(() => {
  //       if (sessionId === null) {
  //         if (chatToServer.length > 0) {
  //           window.onbeforeunload = function () {
  //             emailChatHistory();
  //             setTab(false);
  //           };
  //         }
  //         if (tab === false) {
  //           clearInterval(intervals);
  //           setTab(true);
  //         }
  //       }
  //     }, 1000);
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener("visibilitychange", () => {
  //     if (document.visibilityState === "hidden") {
  //       if (chatToServer.length > 0) {
  //         emailChatHistory();
  //       }
  //     }
  //   });
  // });

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
}
