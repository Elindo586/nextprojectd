import { React, useEffect, useState } from "react";
// import { useSelector } from "react-redux";

import MessageInput from "./message-input";
import MessageDisplay from "./message-display";

// const ChatLogo = () => {
//   return (
//     <div className="chat-container">
//       <p className="chat_gpt_logo">ChatGPT</p>
//     </div>
//   );
// };

const ChatContainer = () => {
  // const selectedConversationId = useSelector(
  //   (state) => state.dashboard.selectedConversationId
  // );

  return (
    <div id="chat-container-id" className=" container chat-container">
      <div className="row">
        <MessageDisplay />
      </div>
      <div className="row">
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatContainer;
