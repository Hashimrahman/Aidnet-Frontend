// // ChatInput.tsx
// import React, { useState } from "react";
// import { Send, ImagePlus } from "lucide-react";

// interface ChatInputProps {
//   onSendMessage: (message: string) => void;
// }

// const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
//   const [input, setInput] = useState("");

//   const handleSend = () => {
//     if (input.trim()) {
//       onSendMessage(input);
//       setInput("");
//     }
//   };

//   return (
//     <div className="p-3 md:p-4 border-t border-gray-700 bg-gray-800 shadow-md">
//       <div className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg">
//         <button className="text-gray-400 hover:text-[#31B18D] p-2 rounded-full">
//           <ImagePlus size={20} />
//         </button>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && handleSend()}
//           placeholder="Type a message..."
//           className="flex-1 bg-transparent p-2 focus:outline-none text-gray-100 placeholder-gray-400"
//         />
//         <button
//           onClick={handleSend}
//           className={`${
//             input.trim() ? 'bg-[#31B18D]' : 'bg-gray-600 text-gray-400'
//           } p-2 rounded-full transition-colors duration-200`}
//           disabled={!input.trim()}
//         >
//           <Send size={20} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatInput;


import React, { useState } from "react";
import { Send, ImagePlus } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="p-3 md:p-4 border-t border-gray-700 bg-gray-800 shadow-md">
      <div className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg">
        <button className="text-gray-400 hover:text-[#31B18D] p-2 rounded-full">
          <ImagePlus size={20} />
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
          className="flex-1 bg-transparent p-2 focus:outline-none text-gray-100 placeholder-gray-400"
        />
        <button
          onClick={handleSend}
          className={`${
            input.trim() ? 'bg-[#31B18D]' : 'bg-gray-600 text-gray-400'
          } p-2 rounded-full transition-colors duration-200`}
          disabled={!input.trim()}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;