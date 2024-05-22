import { useEffect, useState } from "react";
import clienteAxios from "../../service/axiosService";
import { useAuthStore } from "../../store/auth/authStore";
import { User } from "../../interfaces/users/interfaces";

export const SelectTrainer = () => {
  const [trainers, setTrainers] = useState<User[]>([]);
  const { token } = useAuthStore((state) => ({
    token: state.token,
  }));

  useEffect(() => {
    const getAllTrainers = async () => {
      try {
        const { data } = await clienteAxios("/trainers", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(data);
        setTrainers(data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllTrainers();
  }, [token]);

  return (
    <>
    <h2 className="text-center text-5xl text-slate-700 font-semibold">
        Select Your Trainer
      </h2>
      <p className="text-center my-2 font-semibold text-3xl text-gray-500">
        Choose a trainer to guide your fitness journey
      </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 mt-6">
      {trainers.map((trainer) => (
        <div
          className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg hover:scale-105 transition-all duration-500"
          key={trainer.id}
        >
    
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
            <img className="relative w-40" src={trainer.profile_image} alt="" />
          </div>

          <div className="relative text-white px-6 pb-6 mt-6">
            <h3 className="text-center text-xl text-white font-medium leading-8">
              {trainer.name}
            </h3>
            <div className="text-center text-slate-700 text-xs font-semibold">
              <p>{trainer.role}</p>
            </div>
          </div>

          <div className="px-6">
            <ul className="flex flex-col flex-wrap gap-2">
              <li className="flex flex-wrap gap-2 font-semibold">
                Email: <span className="font-normal text-slate-700"> {trainer.email}</span>
              </li>
              <li className="flex flex-wrap gap-2 font-semibold">
                Address: <span className="font-normal text-slate-700">{trainer.address}</span>
              </li>
              <li className="flex flex-wrap gap-2 font-semibold">
                Phone: <span className="font-normal text-slate-700">{trainer.phoneNumber}</span>
              </li>
              <li className="flex flex-wrap gap-2 font-semibold">
                Gender: <span className="font-normal text-slate-700">{trainer.gender}</span>
              </li>
            </ul>
          </div>

          <div className="p-6 pt-3">
            <button
              className="block w-full rounded-lg bg-secondary py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:bg-secondary/90 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none   cursor-pointer"
              type="button"
            >
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};
