
// // ChatRoomList.tsx
// import React from "react";
// import { ChatRoom } from "./types";
// import { Search } from "lucide-react";

// interface ChatRoomListProps {
//   chatRooms: ChatRoom[];
//   selectedChatRoom: ChatRoom | null;
//   onSelectChatRoom: (chatRoom: ChatRoom) => void;
// }

// const ChatRoomList: React.FC<ChatRoomListProps> = ({ chatRooms, selectedChatRoom, onSelectChatRoom }) => {
//   return (
//     <div className="h-full flex flex-col">
//       <div className="p-4 border-b border-gray-700">
//         <h2 className="text-xl font-bold text-gray-100">Chats</h2>
//       </div>
      
//       <div className="p-3">
//         <div className="relative">
//           <input 
//             type="text" 
//             placeholder="Search chats..." 
//             className="w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#31B18D] text-gray-100 placeholder-gray-400 transition-all duration-200"
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
//         </div>
//       </div>
      
//       <div className="flex-1 overflow-y-auto">
//         <div className="p-2">
//           <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 py-1">Recent</h3>
//           <ul className="mt-1 space-y-1">
//             {chatRooms.map((room) => (
//               <li
//                 key={room.id}
//                 className={`flex items-center px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200
//                   ${selectedChatRoom?.id === room.id 
//                     ? "bg-gray-700 border-l-4 border-[#31B18D]" 
//                     : "hover:bg-gray-700"}`
//                 }
//                 onClick={() => onSelectChatRoom(room)}
//               >
//                 <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#31B18D] bg-opacity-20 flex items-center justify-center text-[#31B18D] font-medium">
//                   {room.name.substring(0, 2).toUpperCase()}
//                 </div>
//                 <div className="ml-3 flex-1 min-w-0">
//                   <p className="text-sm font-medium truncate">{room.name}</p>
//                   <p className="text-xs text-gray-400 truncate">Campaign: {room.campaignId.substring(0, 6)}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatRoomList;

import React from "react";
import { ChatRoom } from "./types";
import { Search } from "lucide-react";

interface ChatRoomListProps {
  chatRooms: ChatRoom[];
  selectedChatRoom: ChatRoom | null;
  onSelectChatRoom: (chatRoom: ChatRoom) => void;
}

const ChatRoomList: React.FC<ChatRoomListProps> = ({ chatRooms, selectedChatRoom, onSelectChatRoom }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold text-gray-100">Chats</h2>
      </div>
      
      <div className="p-3">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search chats..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#31B18D] text-gray-100 placeholder-gray-400 transition-all duration-200"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-2">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 py-1">Recent</h3>
          <ul className="mt-1 space-y-1">
            {chatRooms.map((room) => (
              <li
                key={room.id}
                className={`flex items-center px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200
                  ${selectedChatRoom?.id === room.id 
                    ? "bg-gray-700 border-l-4 border-[#31B18D]" 
                    : "hover:bg-gray-700"}`
                }
                onClick={() => onSelectChatRoom(room)}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#31B18D] bg-opacity-20 flex items-center justify-center text-[#31B18D] font-medium">
                  {room.name.substring(0, 2).toUpperCase()}
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{room.name}</p>
                  <p className="text-xs text-gray-400 truncate">Campaign: {room.campaignId.substring(0, 6)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomList;