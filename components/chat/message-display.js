import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRobot } from "react-icons/fa6";
import Message from "./message";

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
    <div className="container">
      <div className=" row chat-display-header">
        <div className="col-10 ai-col">
          <p> Talk to me.</p>{" "}
        </div>
        <div className=" col col-2">
          <FaRobot />
        </div>
      </div>
      <div className="row chat-display">
        {conversation?.messages.map((m, index) => (
          <Message
            key={m.id}
            text={m.text}
            aiMessage={m.aiMessage}
            animate={index === conversation.messages.length - 1 && m.aiMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default MessageDisplay;
