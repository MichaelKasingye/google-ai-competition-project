import React from "react";

interface ChatMessage {
  sender: string;
  text: string;
}


interface ChatHistoryProps {
  chatHistory: ChatMessage[] | any;
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ chatHistory }) => {
  const messageGroupHistory = chatHistory[0]?.map((message: any) => message);

  return (
    <div>
      {messageGroupHistory.map((messageContent: any, index: any) => {
        <div>
          <h1>{messageContent.role}</h1>
        </div>;
        switch (messageContent.role) {
          case "assistant":
            return (
              <div key={index} className="flex gap-1">
                <img
                  src="images/assistant-avatar.png"
                  className="h-12 w-12 rounded-full"
                />
                <div className="w-auto max-w-xl break-words bg-white rounded-b-xl rounded-tr-xl text-black p-6 shadow-[0_ 10px_40px_0px_rgba(0,0,0,0.15)]">
                  <p className="text-sm font-medium text-violet-500 mb-2">
                    AI assistant
                  </p>
                  {messageContent.content}
                </div>
              </div>
            );
          case "user":
            return (
              <div
                className="w-auto max-w-xl break-words bg-white rounded-b-xl rounded-tl-xl text-black p-6 m-5 self-end shadow-[0_10px_40px_0px_rgba(0,0,0,0.15)]"
                key={index}
              >
                <p className="text-sm font-medium text-violet-500 mb-2">You</p>
                {messageContent.content}
              </div>
            );
        }
      })}
    </div>
  );
};

export default ChatHistory;
