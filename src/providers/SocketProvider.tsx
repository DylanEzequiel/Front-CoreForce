import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useAuthStore } from "../store/auth/authStore";

interface SocketContextProps {
  socket: Socket | null;
}


export const SocketContext = createContext<SocketContextProps>({ socket: null });
export const useSocket = () => useContext(SocketContext);

const apiUrl = import.meta.env.VITE_API_URL;

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const { user } = useAuthStore((state) => ({
    user: state.userData,
  }));

  const [socket, setSocket] = useState<Socket | null>(null);

  

  useEffect(() => {

    if(user) {
      const newSocket = io(apiUrl, {
        autoConnect: false,
        auth: { name: user.name },
      });

      setSocket(newSocket);
      
      newSocket.connect();
      if (user?.role == 'user') {
        newSocket.emit('joinRoom', user.id);
      }

      return () => {
        newSocket.disconnect();
      };
    }
   
  }, [user]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};