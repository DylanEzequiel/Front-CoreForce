// const apiUrl = import.meta.env.VITE_API_URL;

import { useEffect, useRef, useState } from "react";
// import { io } from "socket.io-client";
import { useAuthStore } from "../../store/auth/authStore";
import { useChatStore } from "../../store/chat/chatStore";
import { useSocket } from "../../providers/SocketProvider";

// const socket = io(apiUrl, {
//   autoConnect: false,
// });
interface Message {
  user: string;
  body: string;
  room: string
}

export const ChatUser: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  

  const { user, userId } = useAuthStore((state) => ({
    userId: state.userId,
    user: state.userData,
    token: state.token,
  }));

  const { messages, loadMessages } = useChatStore((state) => ({
    messages: state.chats,
    loadMessages: state.loadMessages,
  }));

  const { socket } = useSocket();

 
  useEffect(() => {
    if (!userId || !user || !socket) return;

    
    loadMessages(userId!);
    socket.emit('joinRoom', user.id);
    
    const handleNewMessage = (data: Message) => {
        console.log(data) 
        loadMessages(userId);
    };

    socket.on("message", handleNewMessage);
    
    return () => {
      socket.off("message", handleNewMessage);
    };
  }, [userId, user, loadMessages, socket]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(socket) {
      const newMessage = {
        body: message,
        user: user?.name,
        room: userId!,
      };
      socket.emit("message", { body: newMessage.body, room: newMessage.room });
      setMessage("");
    }
  };

  const currentMessages =  messages[userId!]?.messages || [] 

  return (
    <>
      <div className="py-10">
        <h2 className="font-semibold text-5xl text-center text-slate-700">
          Chat with your trainer
        </h2>

        <p className="font-semibold text-center text-gray-600 text-xl">
          Our training chats are designed with clarity and value in mind.
        </p>
      </div>

      <div className="  grid grid-cols-1 xl:grid-cols-2 max-w-screen-xl mx-auto">
        <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Chat</h2>
          </div>
          <form onSubmit={handleSend}>
            <div className="mb-4 h-64 overflow-y-auto border border-gray-200 p-4 rounded-lg flex flex-col">
              {currentMessages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 w-auto ${
                    message.user === user?.name
                      ? "bg-slate-300 text-slate-800 self-start rounded-t-xl rounded-bl-xl"
                      : "bg-orange-500 text-gray-100 self-left rounded-t-xl rounded-br-xl"
                  }`}
                  style={{
                    alignSelf:
                      message.user === user?.name ? "flex-end" : "flex-start",
                    maxWidth: "70%",
                  }}
                  ref={messagesEndRef}
                >
                  <b>{message.user}</b>: {message.body}
                </div>
              ))}
            </div>
            <div className="flex">
              <input
                type="text"
                className="flex-1 p-2 border border-gray-300 rounded-l-lg"
                placeholder="Type a message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <button className="p-2 bg-slate-800 text-white rounded-r-lg hover:bg-slate-700">
                Send
              </button>
            </div>
          </form>
        </div>

        <img src="/img/chat-bg.svg" alt="" className="w-auto h-96 hidden xl:block"/>
      </div>
    </>
  );
};
