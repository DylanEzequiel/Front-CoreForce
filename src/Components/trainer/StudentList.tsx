import { useEffect, useState } from "react";
import clienteAxios from "../../service/axiosService";
import { useAuthStore } from "../../store/auth/authStore";
import { RiUserAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IUserComplete } from "../../interfaces/interfaces";
import { NotStudent } from "./NotStudent";
import { Spinner } from "../spinner/Spinner";

export const StudentList = () => {
  const { userId, userToken } = useAuthStore((state) => ({
    userId: state.userId,
    userToken: state.token,
  }));
  const [students, setstudents] = useState<IUserComplete[]>([
    // Añade más estudiantes según sea necesario
  ]);
  const [isLoaded, setIsLoaded] = useState(false)

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
        <div className="max-w-6xl">
          <h2 className="text-3xl font-light text-primary/80 mb-6">My Students</h2>

          <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Link
              to="/user/trainer/add-student"
              className="group bg-primary/90 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-green-600/80 hover:smooth-hover"
            >
              <div className="bg-gray-800 text-white/50 group-hover:text-white group-hover:smooth-hover  flex w-20 h-20 rounded-full items-center justify-center">
                <RiUserAddFill size={30}/>
              </div>
              <h3 className="text-white/50 group-hover:text-white group-hover:smooth-hover text-center">
                Add a student
              </h3>
            </Link>
            {students.length === 0
              ? null
              : students.map((student) => (
                  <div
                    key={student.id}
                    className="relative group bg-primary py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center rounded-md hover:bg-primary/95 hover:smooth-hover"
                  >
                    <img
                      src={student.profile_image}
                      alt={`${student.name}'s profile`}
                      className="w-20 h-20 object-cover object-center rounded-full"
                    />
                    <h3 className="text-white text-2xl font-bold capitalize text-center">
                      {student.name}
                    </h3>
                    <div className="mt-2 text-center">
                      <p className="text-white/50 py-2">{student.email}</p>
                      <p className="text-white/50">
                        Weight: {student.weight} kg
                      </p>
                      <p className="text-white/50">
                        Height: {student.height} cm
                      </p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      )}
    </div>
  );
};
