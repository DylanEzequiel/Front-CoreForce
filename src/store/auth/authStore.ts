import { create } from "zustand";
import clienteAxios from "../../service/axiosService";

export interface UserStore {
  id: string;
  name: string;
  email: string;
  profile_image: string;
  phoneNumber: string;
  birthdate: Date;
  signup_date: string;
  gender: string;
  address: string;
  height: string;
  weight: string;
  role: string;
  user_membership: UserMembership[];
}

export interface UserMembership {
  id: string;
  start_date: Date;
  end_date: Date;
}

interface authState {
  token: string | null;
  userId: string | null;
  userData?: UserStore;
}

interface AuthStoreActions extends authState {
  setTokenAndUserId: (token: string, userId: string) => void;
  fetchUserData: () => Promise<void>;
  setUserData: (userData: UserStore) => void;
  logout: () => void;
}

export const useAuthStore = create<authState & AuthStoreActions>((set) => {
  const token = sessionStorage.getItem('token');
  const userId = sessionStorage.getItem('userId');
  const userData = JSON.parse(sessionStorage.getItem('userData') || 'null');
  return {
    token,
    userId,
    userData,
    setTokenAndUserId: (token, userId) => {
      set({ token, userId });
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('userId', userId);
    },
    fetchUserData: async () => {
      const { userId } = useAuthStore.getState();
      const { token } = useAuthStore.getState();
      try {
        const response = await clienteAxios.get(`/users/${userId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        useAuthStore.getState().setUserData(response.data);
      } catch (error) {
        console.error("Error al obtener la información del usuario:", error);
      }
    },
    setUserData: (userData) => {
      set({ userData });
      sessionStorage.setItem('userData', JSON.stringify(userData));
    },
    logout: () => {
      set({ token: null, userId: null, userData: undefined });
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('userData');
    },
  };
});
