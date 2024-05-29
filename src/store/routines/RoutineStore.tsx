import { create } from "zustand";
import clienteAxios from "../../service/axiosService";

export interface IRoutine {
  id:string,
  name:string,
  type: "cardio" | "strenght" | "flexibility" | "hiit",
  pdf_url:string 
}

interface RoutineState {
  routines: IRoutine[] | null;
  fetchRoutines: () => Promise<void>;
}


export const useRoutineStore = create<RoutineState>((set) => ({
  routines: null,
  fetchRoutines: async () => {
    console.log('probando')
    try {
      const res = await clienteAxios.get("/files/routines");
      set({ routines: res.data });
    } catch (error) {
      console.log(error);
    }
  },
}));