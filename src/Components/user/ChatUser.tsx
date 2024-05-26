const apiUrl = import.meta.env.VITE_API_URL;

import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAuthStore } from "../../store/auth/authStore";

const socket = io(apiUrl, {
  autoConnect: true,
});
interface Message {
  user: string;
  body: string;
}

export const ChatUser: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const { user, userId, token } = useAuthStore((state) => ({
    userId: state.userId,
    user: state.userData,
    token: state.token,
  }));

  useEffect(() => {
    socket.emit("joinRoom", userId);

    if (user) {
      socket.auth = { name: user.name };
      socket.connect();
    }

    socket.on("message", (data) => {
      console.log(data);
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("message");
      socket.disconnect();
    };
  }, [userId, user]);

  const handleSend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newMessage = {
      body: message,
      from: "Me",
      room: userId,
    };
    setMessage("");
    socket.emit("message", { body: newMessage.body, room: newMessage.room });
  };

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

      <div className="  grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto">
        <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Chat</h2>
          </div>
          <form onSubmit={handleSend}>
            <div className="mb-4 h-64 overflow-y-auto border border-gray-200 p-4 rounded-lg flex flex-col">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 w-auto ${
                    message.user === user?.name
                      ? "bg-slate-300 text-slate-800 self-end"
                      : "bg-orange-500 text-gray-100 self-start"
                  }`}
                  style={{
                    alignSelf:
                      message.user === user?.name ? "flex-start" : "flex-end",
                    maxWidth: "70%",
                  }}
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

        <img src="/img/chat-bg.svg" alt="" className="w-auto h-96"/>
      </div>
    </>
  );
};
