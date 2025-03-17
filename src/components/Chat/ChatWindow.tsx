// import React, { useEffect, useRef } from "react";
// import { ChatRoom, Message } from "./types";
// import { MoreHorizontal, MessageSquare, Menu } from "lucide-react";

// interface ChatWindowProps {
//   chatRoom: ChatRoom | null;
//   messages: Message[];
//   onMenuClick?: () => void;
// }

// const ChatWindow: React.FC<ChatWindowProps> = ({ chatRoom, messages, onMenuClick }) => {
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   // Scroll to bottom when new messages arrive
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   if (!chatRoom) {
//     return (
//       <div className="flex-1 flex flex-col items-center justify-center bg-gray-900 p-8 text-center ">
//         <div className="w-24 h-24 mb-6 rounded-full bg-gray-800 flex items-center justify-center">
//           <MessageSquare className="w-12 h-12 text-[#31B18D]" />
//         </div>
//         <h3 className="text-xl font-semibold text-gray-100 mb-2">Your messages</h3>
//         <p className="text-gray-400 max-w-sm">Select a chat room to start messaging.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex-1 flex flex-col bg-gray-900 max-h-[calc(100%-64px)]">
//       <div className="p-4 border-b border-gray-700 flex items-center shadow-sm">
//         {/* <button 
//           onClick={onMenuClick} 
//           className="md:hidden mr-2 text-gray-400 hover:text-[#31B18D]"
//         >
//           <Menu size={24} />
//         </button> */}
//         <div className="w-8 h-8 rounded-full bg-[#31B18D] bg-opacity-20 flex items-center justify-center text-[#31B18D] font-medium mr-3">
//           {chatRoom.name.substring(0, 2).toUpperCase()}
//         </div>
//         <div>
//           <h2 className="text-lg font-semibold text-gray-100">{chatRoom.name}</h2>
//           <p className="text-xs text-gray-400">Campaign ID: {chatRoom.campaignId}</p>
//         </div>
//         {/* <div className="ml-auto flex items-center space-x-2">
//           <button className="p-2 rounded-full hover:bg-gray-800 text-gray-400 transition-colors">
//             <MoreHorizontal size={20} />
//           </button>
//         </div> */}
//       </div>

//       <div className="flex-1 p-4 md:p-6 overflow-y-auto bg-gray-900 overflow-auto">
//         {messages.length === 0 ? (
//           <div className="flex flex-col items-center justify-center h-full text-center p-4">
//             <div className="w-16 h-16 mb-4 rounded-full bg-gray-800 flex items-center justify-center">
//               <MessageSquare className="w-8 h-8 text-gray-400" />
//             </div>
//             <p className="text-gray-400">No messages yet. Start the conversation!</p>
//           </div>
//         ) : (
//           <div className="space-y-4 overflow-auto">
//             {messages.map((msg, idx) => (
//               <div key={idx} className="flex items-start">
//                 <div className="w-8 h-8 rounded-full bg-[#31B18D] bg-opacity-20 flex-shrink-0 flex items-center justify-center text-[#31B18D] font-medium mr-3">
//                   {msg.user_name?.substring(0, 2).toUpperCase() || `U${msg.user_id.toString().substring(0, 1)}`}
//                 </div>
//                 <div className="flex flex-col">
//                   <div className="flex items-baseline">
//                     <span className="text-sm font-medium text-gray-300">
//                       {msg.user_name || `User ${msg.user_id}`}
//                     </span>
//                     {/* <span className="ml-2 text-xs text-gray-500">
//                       {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                     </span> */}
//                   </div>
//                   <div className="mt-1 p-3 bg-gray-800 rounded-lg max-w-md text-gray-100">
//                     {msg.message}
//                   </div>
//                 </div>
//               </div>
//             ))}
//             <div ref={messagesEndRef} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChatWindow;

import React, { useEffect, useRef } from "react";
import { ChatRoom, Message } from "./types";
import { MessageSquare } from "lucide-react";

interface ChatWindowProps {
  chatRoom: ChatRoom | null;
  messages: Message[];
  onMenuClick?: () => void;
  userId?: number; // Assuming currentUser has a user_id
}

const ChatWindow: React.FC<ChatWindowProps> = ({ chatRoom, messages, onMenuClick, userId }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!chatRoom) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-900 p-8 text-center">
        <div className="w-24 h-24 mb-6 rounded-full bg-gray-800 flex items-center justify-center">
          <MessageSquare className="w-12 h-12 text-[#31B18D]" />
        </div>
        <h3 className="text-xl font-semibold text-gray-100 mb-2">Your messages</h3>
        <p className="text-gray-400 max-w-sm">Select a chat room to start messaging.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-900 max-h-[calc(100%-64px)]">
      <div className="p-4 border-b border-gray-700 flex items-center shadow-sm">
        <div className="w-8 h-8 rounded-full bg-[#31B18D] bg-opacity-20 flex items-center justify-center text-[#31B18D] font-medium mr-3">
          {chatRoom.name.substring(0, 2).toUpperCase()}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-100">{chatRoom.name}</h2>
          <p className="text-xs text-gray-400">Campaign ID: {chatRoom.campaignId}</p>
        </div>
      </div>

      <div className="flex-1 p-4 md:p-6 overflow-y-auto bg-gray-900 overflow-auto">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-4">
            <div className="w-16 h-16 mb-4 rounded-full bg-gray-800 flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-400">No messages yet. Start the conversation!</p>
          </div>
        ) : (
          <div className="space-y-4 overflow-auto">
            {messages.map((msg, idx) => (
              // <div
              //   key={idx}
              //   className={`flex flex-row-reverse items-start ${msg.user_id == userId ? 'justify-end' : 'justify-start'}`}
              // >
              //   <div
              //     className={`w-7 h-7 rounded-full bg-[#31B18D] bg-opacity-20 flex items-center justify-center text-[black] text-xs font-light ${msg.user_id === userId ? 'ml-3' : 'mr-3'
              //       }`}
              //   >
              //     {msg.user_name?.substring(0, 2).toUpperCase() || `U${msg.user_id.toString().substring(0, 1)}`}
              //   </div>
              //   <div className="flex flex-col">
              //     <div className="flex items-baseline">
              //       <span className="text-sm font-medium text-gray-300  ">
              //         {msg.user_name || `User ${msg.user_id}`}
              //       </span>
              //     </div>
              //     <div
              //       className={`mt-1 p-3 rounded-lg max-w-md text-gray-100 ${msg.user_id === userId ? 'bg-[#31B18D] bg-opacity-20' : 'bg-gray-800'
              //         }`}
              //     >
              //       {msg.message}
              //     </div>
              //   </div>
              // </div>
              <div
                key={idx}
                className={`flex ${msg.user_id === userId ? 'flex-row-reverse' : 'flex-row'} items-start`}
              >
                <div
                  className={`w-7 h-7 rounded-full bg-[#31B18D] bg-opacity-20 flex items-center justify-center text-[black] text-xs font-light ${msg.user_id === userId ? 'ml-3 hidden' : 'mr-3'}`}
                >
                  {msg.user_name?.substring(0, 2).toUpperCase() || `U${msg.user_id.toString().substring(0, 1)}`}
                </div>

                <div className="flex flex-col">

                  <div
                    className={`mt-1 px-3 pb-3 pt-1 rounded-lg max-w-md text-gray-100 ${msg.user_id === userId ? 'bg-[#31B18D] bg-opacity-20' : 'bg-gray-800'}`}
                  >
                    <div className="flex">
                      {/* Username */}
                      <span className={`text-xs font-light text-gray-300 ${msg.user_id === userId ? 'hidden' : 'text-left w-full'}`}>
                        {msg.user_name || `User ${msg.user_id}`}
                      </span>
                    </div>  
                    {msg.message}
                  </div>
                </div>
              </div>

            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
