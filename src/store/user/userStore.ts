import { create } from "zustand";
import clienteAxios from "../../service/axiosService";

interface User {
  id: string;
  name: string;
  email: string;
  profile_image: string;
  phoneNumber: string | null;
  birthdate: string;
  signup_date: string;
  gender: string;
  address: string | null;
  height: number | null;
  weight: number | null;
  role: string;
  isActive: boolean;
}

interface UserStats {
  rolesCount: Record<string, number>;
  genderCount: Record<string, number>;
  activeCount: Record<string, number>;
}

interface UserStoreState {
  users: User[];
  stats: UserStats;
  fetchUsers: () => Promise<void>;
}

export const useUserStore = create<UserStoreState>((set) => ({
  users: [],
  stats: {
    rolesCount: {},
    genderCount: {},
    activeCount: {},
  },
  fetchUsers: async () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      console.error("No token found");
      return;
    }
    try {
      const { data } = await clienteAxios.get('/users?page=1&limit=5&userType=all&membership=all&gender=all', {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const users = data; // Asume que la respuesta contiene un array de usuarios
      
      const rolesCount = users.reduce((acc: Record<string, number>, user: User) => {
        acc[user.role] = (acc[user.role] || 0) + 1;
        return acc;
      }, {});

      const genderCount = users.reduce((acc: Record<string, number>, user: User) => {
        acc[user.gender] = (acc[user.gender] || 0) + 1;
        return acc;
      }, {});

      const activeCount = users.reduce((acc: Record<string, number>, user: User) => {
        acc[user.isActive ? 'Active' : 'Inactive'] = (acc[user.isActive ? 'Active' : 'Inactive'] || 0) + 1;
        return acc;
      }, {});

      set({
        users,
        stats: {
          rolesCount,
          genderCount,
          activeCount,
        },
      });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  },
}));