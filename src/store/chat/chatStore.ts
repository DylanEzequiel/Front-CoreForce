import {create} from 'zustand';

interface Message {
  user: string;
  body: string;
  room: string;
}

interface ChatState {
  messages: { [key: string]: Message[] };
  addMessage: (room: string, message: Message) => void;
  loadMessages: (room: string) => Message[];
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: {},
  addMessage: (room, message) => {
    const newMessages = [...(get().messages[room] || []), message];
    localStorage.setItem(`messages-${room}`, JSON.stringify(newMessages));
    set(state => ({
      messages: {
        ...state.messages,
        [room]: newMessages
      }
    }));
  },
  loadMessages: (room) => {
    const storedMessages = localStorage.getItem(`messages-${room}`);
    return storedMessages ? JSON.parse(storedMessages) : [];
  }
}));