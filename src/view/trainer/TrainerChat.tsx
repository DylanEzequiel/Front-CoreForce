import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAuthStore } from "../../store/auth/authStore";

import { useTrainerStore } from "../../store/trainer/trainerStore";

const apiUrl = import.meta.env.VITE_API_URL;

const socket = io(apiUrl, {
  autoConnect: true,
});
interface Message {
  user?: string;
  body?: string;
  room?: string
}
interface User {
  id: string;
  name: string;
}
export const TrainerChat = () => {

  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [room, setRoom] = useState<string>('');

  const { user, userId, token } = useAuthStore((state) => ({
    userId: state.userId,
    user: state.userData,
    token: state.token,
  }));

  const { students, fetchStudents } = useTrainerStore((state) => ({
    students: state.students,
    fetchStudents: state.fetchStudents,
  }));



  const saveMessagesToLocalStorage = (room: string, messages: Message[]) => {
    localStorage.setItem(`messages-${room}`, JSON.stringify(messages));
  };

  const loadMessagesFromLocalStorage = (room: string): Message[] => {
    const storedMessages = localStorage.getItem(`messages-${room}`);
    return storedMessages ? JSON.parse(storedMessages) : [];
  };

  useEffect(()=> {
  
    if (user) {
      fetchStudents(userId!, token!)
      socket.auth = { name: user.name };
      socket.connect();
    }


    socket.on("message", (data) => {
      console.log(data);
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages, data];
        saveMessagesToLocalStorage(room, newMessages);
        return newMessages;
      });

    });

    return () => {
      socket.off("message");
      socket.disconnect();
    };

  }, [ user, room, fetchStudents, userId, token]);

  useEffect(() => {
    if (room) {
      socket.emit("joinRoom", room);
      const storedMessages = loadMessagesFromLocalStorage(room);
      setMessages(storedMessages);
    }
  }, [room]);

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    setRoom(user.id);
  };

  const handleSend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (room && selectedUser) {
      const newMessage = {
        body: message,
        from: "Me",
        room,
      };
      socket.emit('message', {body: newMessage.body, room: newMessage.room});
     
      setMessage('');

    } else {
      alert('Please select a user to chat with.');
    }
  };


  return (
    <div className=" p-4 bg-white rounded-lg shadow-lg flex w-full md:max-w-[80rem] mx-auto">
      <div className="w-1/3 border-r border-gray-300 pr-4">
        <h2 className="text-2xl font-semibold mb-4 text-slate-700">My Students</h2>
        <ul>
          {students.map(user => (
            <li
              key={user.id}
              className={`flex gap-2 items-center cursor-pointer p-2 rounded-lg mb-2 font-semibold text-gray-400 ${selectedUser?.id === user.id ? 'bg-slate-800 text-white' : 'bg-gray-100'}`}
              onClick={() => handleUserSelect(user)}
            >
              <img src={user.profile_image} alt="" className="w-7 h-7 rounded-full"/>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 pl-4">
        <h2 className="text-2xl font-semibold mb-4 text-slate-700">Your Chats</h2>
        {selectedUser ? (
         <form onSubmit={handleSend}>
         <div className="mb-4 h-64 overflow-y-auto border border-gray-200 p-4 rounded-lg flex flex-col">
           {messages.map((message, index) => (
             <div
               key={index}
               className={`mb-2 p-2 w-auto ${
                 message.user === user?.name
                   ? "bg-slate-300 text-slate-800 self-end rounded-t-md rounded-br-md"
                   : "bg-orange-500 text-gray-100 self-start rounded-t-md rounded-bl-md"
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
           <button
             className="p-2 bg-slate-800 text-white rounded-r-lg hover:bg-slate-700"
           >
             Send
           </button>
         </div>
       </form>
        ) : (
          <p className="text-gray-400 font-semibold">Please select a Student to start chatting.</p>
        )}
      </div>
    </div>
  )
}
