import { useEffect, useRef, useState } from "react";
// import { io } from "socket.io-client";
import { useAuthStore } from "../../store/auth/authStore";

import { useTrainerStore } from "../../store/trainer/trainerStore";
import { useChatStore } from "../../store/chat/chatStore";
import { useSocket } from "../../providers/SocketProvider";

// const apiUrl = import.meta.env.VITE_API_URL;

// const socket = io(apiUrl, {
//   autoConnect: true,
// });

interface User {
  id: string;
  name: string;
}


export const TrainerChat = () => {

  const [message, setMessage] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [room, setRoom] = useState<string>('');
  // const [isConnected, setIsConnected] = useState<boolean>(socket.connected)
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { user, userId, token } = useAuthStore((state) => ({
    userId: state.userId,
    user: state.userData,
    token: state.token,
  }));

  const { students, fetchStudents } = useTrainerStore((state) => ({
    students: state.students,
    fetchStudents: state.fetchStudents,
  }));

  const { messages, loadMessages } = useChatStore((state) => ({
    messages: state.chats,
    loadMessages: state.loadMessages,
  }));

  const { socket } = useSocket();


  useEffect(()=> {
  
    if (user && socket) {
      fetchStudents(userId!, token!)
      socket.auth = { name: user.name, room: room };
      socket.connect();
    }


    socket?.on("message", (data) => {
      console.log(data);
      loadMessages(room)

    });

    return () => {
      socket?.off("message");
    };

  }, [ user,  fetchStudents, userId, token, loadMessages, room, socket]);

  useEffect(() => {
    if (room && socket) {
      socket.emit("joinRoom", room);
      loadMessages(room)
    }
  }, [room, loadMessages, socket]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    setRoom(user.id);
    loadMessages(room)
  };

  const handleSend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (room && selectedUser) {
      const newMessage = {
        body: message,
        from: user?.name,
        room,
      };
      socket?.emit('message', {body: newMessage.body, room: newMessage.room});
     
      setMessage('');

    } else {
      alert('Please select a user to chat with.');
    }
  };
  const currentMessages = selectedUser ? messages[room]?.messages || [] : [];

  return (
    <div className="flex bg-white shadow-lg mx-auto p-4 rounded-lg w-full md:max-w-[80rem]">
      <div className="border-gray-300 pr-4 border-r w-1/3">
        <h2 className="mb-4 font-semibold text-2xl text-slate-700">My Students</h2>
        <ul>
          {students.map(user => (
            <li
              key={user.id}
              className={`flex gap-2 items-center cursor-pointer p-2 rounded-lg mb-2 font-semibold text-gray-400 ${selectedUser?.id === user.id ? 'bg-slate-800 text-white' : 'bg-gray-100'}`}
              onClick={() => handleUserSelect(user)}
            >
              <img src={user.profile_image} alt="" className="rounded-full w-7 h-7"/>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="pl-4 w-3/4">
        <h2 className="mb-4 font-semibold text-2xl text-slate-700">Your Chats</h2>
        {selectedUser ? (
         <form onSubmit={handleSend}>
         <div className="flex flex-col border-gray-200 mb-4 p-4 border rounded-lg h-64 overflow-y-auto">
           {currentMessages?.map((message, index) => (
             <div
               key={index}
               className={`mb-2 p-2 w-auto ${
                 message.user === user?.name
                   ? "bg-slate-300 text-slate-800 self-left rounded-t-xl rounded-br-xl"
                   : "bg-orange-500 text-gray-100 self-start rounded-t-xl rounded-bl-xl"
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
             className="flex-1 border-gray-300 p-2 border rounded-l-lg"
             placeholder="Type a message"
             onChange={(e) => setMessage(e.target.value)}
             value={message}
           />
           <button
             className="bg-slate-800 hover:bg-slate-700 p-2 rounded-r-lg text-white"
           >
             Send
           </button>
         </div>
       </form>
        ) : (
          <p className="font-semibold text-gray-400">Please select a Student to start chatting.</p>
        )}
      </div>
    </div>
  )
}
