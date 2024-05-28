import {create} from 'zustand';
import { getMessageByRoom } from './chat-service';


interface Message {
  user: string;
  body: string;
  room: string;
}

interface Chat {
  id: string;
  userId: string;
  idTrainer: string | null;
  room: string;
  messages: Message[];
  createdAt: string;
}

interface ChatState {
  chats: { [key: string]: Chat };
  
  loadMessages: (room: string) => Promise<void>;
}

export const useChatStore = create<ChatState>((set) => ({
  chats: {},
  loadMessages: async(room) => {
    try {
      const  data  = await getMessageByRoom(room);
      console.log(data)
      const chat = data[0];
      set((state) => ({
        chats: {
          ...state.chats,
          [room]: chat,
        },
      }));
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  },
}));