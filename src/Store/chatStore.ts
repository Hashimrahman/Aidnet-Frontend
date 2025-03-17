// src/store/chatStore.ts
import { create } from "zustand";
import { ChatRoom, Message } from "../components/Chat/types";

interface ChatState {
  chatRooms: ChatRoom[];
  selectedChatRoom: ChatRoom | null;
  messages: Message[];
  setChatRooms: (chatRooms: ChatRoom[]) => void;
  setSelectedChatRoom: (chatRoom: ChatRoom | null) => void;
  addMessage: (message: Message) => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  chatRooms: [],
  selectedChatRoom: null,
  messages: [],
  setChatRooms: (chatRooms) => set({ chatRooms }),
  setSelectedChatRoom: (chatRoom) => set({ selectedChatRoom: chatRoom, messages: [] }), // Clear messages when switching rooms
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  clearMessages: () => set({ messages: [] }),
}));