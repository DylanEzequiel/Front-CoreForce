import { useEffect, useState } from "react";
import clienteAxios from "../../service/axiosService";
import { useAuthStore } from "../../store/auth/authStore";
import { RiUserAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IUserComplete } from "../../interfaces/interfaces";
import { NotStudent } from "./NotStudent";
import { Spinner } from "../spinner/Spinner";
import {  IoMdCloseCircle } from "react-icons/io";
import AddStudentRoutine from "../../view/AddRoutine/AddStudentRoutine";

export const StudentList = () => {
  const { userId, userToken } = useAuthStore((state) => ({
    userId: state.userId,
    userToken: state.token,
  }));
  const [students, setstudents] = useState<IUserComplete[]>([
    // Añade más estudiantes según sea necesario
  ]);
 
  const [isLoaded, setIsLoaded] = useState(false)
  const [display,setDisplay]=useState(false)

  const handleDisplay=()=>{
    setDisplay(!display)
  }

  useEffect(() => {
    const getAllStudents = async () => {
      try {
        const { data } = await clienteAxios.get(
          `/trainers/students/${userId}`,
          { headers: { Authorization: `Bearer ${userToken}` } }
        );
        setstudents(data);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
        setIsLoaded(true)
      }
    };

    getAllStudents();
  }, []);

  if(!isLoaded) {
    return (
      <Spinner />
    )
  }

  return (
    <div className="mx-auto p-4 container">
      {students.length === 0 ? (
        <NotStudent />
      ) : (
        <div className="lg:max-w-6xl">
          <h2 className="mb-6 font-light text-3xl text-primary/80">My Students</h2>

          <div className="gap-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 mb-10 sm:mb-0">
            <Link
              to="/user/trainer/add-student"
              className="flex flex-col items-center space-y-2 bg-primary/90 hover:bg-green-600/80 px-4 py-20 rounded-md hover:smooth-hover cursor-pointer group"
            >
              <div className="group-hover:smooth-hover group-hover:text-white flex justify-center items-center bg-gray-800 rounded-full w-20 h-20 text-white/50">
                <RiUserAddFill size={30}/>
              </div>
              <h3 className="group-hover:smooth-hover group-hover:text-white text-center text-white/50">
                Add a student
              </h3>
            </Link>
            {students.length === 0
              ? null
              : students.map((student) => (
                  <div
                    key={student.id}
                    className="relative flex flex-col justify-between items-center space-y-2 bg-primary hover:bg-primary/95 px-4 py-10 sm:py-20 rounded-md hover:smooth-hover group">
                    <div className="flex flex-col items-center">
                      <img
                        src={student.profile_image}
                        alt={`${student.name}'s profile`}
                        className="rounded-full w-20 h-20 object-center object-cover"
                      />
                      <h3 className="font-bold text-2xl text-center text-white capitalize">
                        {student.name}
                      </h3>
                      <div className="mt-2 text-center">
                        <p className="text-white/50">
                          Weight: {student.weight} kg
                        </p>
                        <p className="text-white/50">
                          Height: {student.height} cm
                        </p>
                      </div>
                    </div>
                    <button onClick={handleDisplay} className="block bg-secondary active:bg-orange-700 px-6 py-2 w-full font-semibold text-center text-white text-lg rounded-full">Add Routine</button>
                    {/* Renderizado condicional si hay o no rutinas */}
                    {display&&
                      <div className="z-50 fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
                        <div className="bg-white m-4 pt-4 w-3/4 h-3/4 overflow-scroll">
                        <IoMdCloseCircle onClick={handleDisplay} size={25} className="m-2 font-bold text-red-300 hover:text-red-700" />   
                          <AddStudentRoutine {...student} />
                        </div>
                      </div>}
                  </div>
                ))}
          </div>
        </div>
      )}
    </div>
  );
};
