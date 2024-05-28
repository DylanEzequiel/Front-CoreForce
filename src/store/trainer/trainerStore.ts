import {create} from 'zustand';
import clienteAxios from '../../service/axiosService';
import { IUserComplete } from '../../interfaces/interfaces';
// Asegúrate de que esta sea la ruta correcta


interface TrainerState {
  students: IUserComplete[];
  fetchStudents: (userId: string, userToken: string) => Promise<void>;
}

export const useTrainerStore = create<TrainerState>((set) => ({
  students: [],
  fetchStudents: async (userId, userToken) => {
    try {
      const { data } = await clienteAxios.get(`/trainers/students/${userId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      set({ students: data });
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  },
}));