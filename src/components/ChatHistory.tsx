import React from 'react';

interface ChatMessage {
  sender: string;
  text: string;
}

interface ChatHistoryProps {
  chatHistory: ChatMessage[] | any;
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ chatHistory }) => {
  const messageGroupHistory = chatHistory[0]?.map((message:any) => message)
  // const messageGroup = messageGroupHistory.map((messageList:any) => messageList )
  console.log('messageGroupHistory',messageGroupHistory);


  return (
    <div>
      {/* {messageGroupHistory.map((message:any, index:any) => (
        <div key={index} className="mb-4">
          <p className="text-gray-700"><strong>{message.role}</strong> {message.content}</p>
        </div>
      ))} */}


{    messageGroupHistory.map((messageContent:any, index:any) => {
    // console.log('jsx messageContent',messageContent.role);
        
        // const isLastMessage = index === history.length - 1;
        // console.log('isLastMessage',isLastMessage);
        <div>
            <h1>{messageContent.role}</h1>
        </div>
        switch (messageContent.role) {
          case "assistant":
            return (
              <div
                // ref={isLastMessage ? lastMessageRef : null}
                key={index}
                className="flex gap-1"
              >
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
                // ref={isLastMessage ? lastMessageRef : null}
              >
                <p className="text-sm font-medium text-violet-500 mb-2">
                  You
                </p>
                {messageContent.content}
              </div>
            );
        }

    })}


      
    </div>
  );
};

export default ChatHistory;
