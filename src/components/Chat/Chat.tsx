import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ChatRoomList from "./ChatRoomList";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import { ChatRoom, Message } from "./types";
import { Menu } from "lucide-react";
import { useChatStore } from "../../Store/chatStore";

const fetchChatRooms = async (): Promise<ChatRoom[]> => {
  const token = localStorage.getItem("token"); 
  
  if (!token) {
    throw new Error("No authentication token found");
  }
  const response = await fetch("http://localhost:8003/chat/chatrooms/", {
    headers: {
      Authorization: `Bearer ${token}`,  // Pass token for authenticated request
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch chat rooms");
  }
  return response.json();
};

const Chat: React.FC = () => {
  const userId = localStorage.getItem("userId"); 
  const parsedUserId = userId ? parseInt(userId, 10) : undefined;
  const {
    chatRooms,
    selectedChatRoom,
    messages,
    setChatRooms,
    setSelectedChatRoom,
    addMessage,
    clearMessages,  
  } = useChatStore();
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { data, error, isLoading } = useQuery<ChatRoom[], Error>({
    queryKey: ["chatRooms"],
    queryFn: fetchChatRooms,
  });

  useEffect(() => {
    if (data) {
      setChatRooms(data);
    }
  }, [data, setChatRooms]);

  useEffect(() => {
    if (selectedChatRoom) {
      const token = localStorage.getItem("token");  
      if (!token) {
        console.error("No token found");
        return; 
      }
      const websocket = new WebSocket(
        // `ws://localhost:8003/ws/chat/${selectedChatRoom.campaignId}/?token=${token}`
        `ws://localhost:8003/ws/chat/${selectedChatRoom.campaignId}/`
      );
      
      websocket.onopen = () => {
        console.log("WebSocket connected");
        websocket.send(JSON.stringify({type: "auth", token: token}))
        clearMessages(); 
      };
      websocket.onmessage = (event) => {
        const data: Message = JSON.parse(event.data);
        addMessage({
          ...data,
          user_name: data.user_name || `User ${data.user_id}`, 
        });
      };
      websocket.onerror = (error) => console.error("WebSocket error:", error);
      websocket.onclose = () => console.log("WebSocket closed");
      
      setWs(websocket);
      return () => websocket.close();
    }
  }, [selectedChatRoom, addMessage, clearMessages]);

  const handleSendMessage = (message: string) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ message }));
    }
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  if (isLoading) return <div className="text-gray-100">Loading chat rooms...</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="flex h-full w-full bg-gray-900 text-gray-100 relative rounded-lg overflow-hidden">
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden absolute top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-gray-200"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 fixed md:relative z-40 w-64 h-full shadow-lg bg-gray-800 md:block`}
      >
        <ChatRoomList
          chatRooms={chatRooms}
          selectedChatRoom={selectedChatRoom}
          onSelectChatRoom={(room) => {
            setSelectedChatRoom(room);
            setSidebarOpen(false);
          }}
        />
      </div>    

      {/* mobile */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col w-full md:w-auto">
        <ChatWindow
          chatRoom={selectedChatRoom}
          messages={messages}
          onMenuClick={toggleSidebar}
          userId = {parsedUserId}
        />
        {selectedChatRoom && <ChatInput onSendMessage={handleSendMessage} />}
      </div>
    </div>
  );
};

export default Chat;