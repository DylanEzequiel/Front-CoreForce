import { createContext, ReactNode, useContext, useEffect } from "react";
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

  const socket = io(apiUrl, {
    autoConnect: true,
    auth: { name: user?.name },
  });

  useEffect(() => {
    if (user?.role == 'user') {
      socket.auth = { name: user.name };
      socket.connect();
      socket.emit('joinRoom', user.id);
    }

    return () => {
      socket.disconnect();
    };
  }, [user, socket]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};