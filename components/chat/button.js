import React from "react";

import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import {
  // addMessage,
  // addBotMessage,
  // addChatHistory,
  // setConversationHistory,
  // setConversations,
  deleteConversations,
  setSelectedConversationId,
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
    <div id="chat-button-id" className=" container chat-button">
      <div className="row">
        <div>
          <button onClick={handleChooseNewChat} className="inside-chat-button">
            Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button;
