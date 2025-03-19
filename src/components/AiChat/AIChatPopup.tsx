// src/components/AIChatPopup.tsx
import { MessageCircle, Send } from "lucide-react";
import React, { useState, useEffect } from "react";

interface AIMessage {
    message: string;
    sender: "user" | "bot";
}

const AIChatPopup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<AIMessage[]>([]);
    const [input, setInput] = useState("");
    const [ws, setWs] = useState<WebSocket | null>(null);

    // Connect to WebSocket when popup opens
      useEffect(() => {
        if (isOpen && !ws) {
          const websocket = new WebSocket("ws://localhost:8004/ws/ai/chat/");
          setWs(websocket);

          websocket.onopen = () => console.log("AI Chat WebSocket connected");
          websocket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages((prev) => [...prev, { message: data.message, sender: data.sender }]);
          };
          websocket.onerror = (error) => console.error("AI Chat WebSocket error:", error);
          websocket.onclose = () => {
            console.log("AI Chat WebSocket closed");
            setWs(null);  
          };

          return () => websocket.close();
        }
      }, [isOpen]);


    const handleSend = () => {
        if (ws && input.trim()) {
            ws.send(JSON.stringify({ message: input }));
            setMessages((prev) => [...prev, { message: input, sender: "user" }]);
            setInput("");
        }
    };

    const handleClose = () => {
        setIsOpen(false);
        // setMessages([]);  
        if (ws) ws.close();
    };

    return (
        <div className="fixed bottom-10 right-4 z-50">
            {!isOpen && (
                <div onClick={() => setIsOpen(true)} className="flex justify-between gap-3 bg-[#31B18D] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#188e6c] transition duration-200">
                    <MessageCircle />
                    <button

                        className=" "
                    >
                        AI Chat
                    </button>
                </div>
            )}

            {isOpen && (
                <div className="bg-gray-800 w-80 h-96 rounded-lg shadow-xl flex flex-col">
                    <div className="bg-[#31B18D] text-white p-2 rounded-t-lg flex justify-between items-center">
                        <span className="font-semibold">AI Chatbot</span>
                        <button
                            onClick={handleClose}
                            className="text-white hover:text-gray-200 transition duration-200"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="flex-1 p-3 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}
                            >
                                <span
                                    className={`inline-block p-2 rounded-lg max-w-[90%] ${msg.sender === "user"
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-700 text-gray-100"
                                        }`}
                                >
                                    {msg.message}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* <div className="p-2 border-t border-gray-700">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSend()}
                            className="w-full p-2 bg-gray-900 text-white rounded border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type a message..."
                        />
                        <button>send</button>
                    </div> */}
                    <div className="p-2 border-t border-gray-700 flex items-center space-x-2">
    <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSend()}
        className="w-full p-2 bg-gray-900 text-white rounded border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type a message..."
    />
    <button
        onClick={handleSend}
        className="p-2 bg-blue-500 text-white rounded-full focus:outline-none hover:bg-blue-600 transition-colors flex justify-center items-center"
    >
        <Send />
    </button>
</div>

                </div>
            )}
        </div>
    );
};

export default AIChatPopup;
