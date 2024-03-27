import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sessionEstablished: false,
  conversations: [],
  chatHistory: [
    {
      id: null,
      messages: [],
    },
  ],
  selectedConversationId: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setSelectedConversationId: (state, action) => {
      state.selectedConversationId = action.payload;
    },
    addMessage: (state, action) => {
      const { message, conversationId } = action.payload;
      const conversation = state.conversations.find(
        (c) => c.id === conversationId
      );
      if (conversation) {
        conversation.messages.push(message);
      } else {
        state.conversations.push({
          id: conversationId,
          messages: [message],
        });
      }
    },

    addBotMessage: (state, action) => {
      const { botMessage, conversationId } = action.payload;
      const conversation = state.conversations.find(
        (c) => c.id === conversationId
      );
      if (conversation) {
        conversation.messages.push(botMessage);
      } else {
        state.conversations.push({
          id: conversationId,
          messages: [botMessage],
        });
      }
    },

    addChatHistory: (state, action) => {
      const { userHistory, botHistory, conversationId } = action.payload;
      const conversation = state.chatHistory.find(
        (c) => c.id === conversationId
      );

      if (conversation) {
        conversation.messages.push(userHistory);
        conversation.messages.push(botHistory);
      } else {
        state.chatHistory.push({
          id: conversationId,
          messages: [userHistory, botHistory],
        });
      }
    },

    setConversations: (state, action) => {
      state.conversations = action.payload;
      state.sessionEstablished = true;
    },
    setConversationHistory: (state, action) => {
      const { id, messages } = action.payload;

      const conversation = state.conversations.find((c) => c.id === id);

      if (conversation) {
        conversation.messages = messages;
      } else {
        state.conversations.push({
          id,
          messages,
        });
      }
    },
    deleteConversations: (state) => {
      state.conversations = [];
      state.selectedConversationId = null;
    },
  },
});

export const {
  setSelectedConversationId,
  addMessage,
  addBotMessage,
  addChatHistory,
  setConversations,
  setConversationHistory,
  deleteConversations,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
