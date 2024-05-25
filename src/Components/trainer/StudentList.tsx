import { useEffect, useState } from "react";
import clienteAxios from "../../service/axiosService";
import { useAuthStore } from "../../store/auth/authStore";
import { RiUserAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IUserComplete } from "../../interfaces/interfaces";


export const StudentList = () => {
  const { userId,userToken } = useAuthStore((state) => ({
    userId: state.userId,
    userToken: state.token
  }));
  console.log(userId)
  const [students, setstudents] = useState<IUserComplete[]>([
    
    // Añade más estudiantes según sea necesario
  ])
  console.log(students)
  useEffect(() => {
    const getAllStudents = async() => {
      try {
        const {data} = await clienteAxios.get(`/trainers/students/${userId}`,{headers:{"Authorization":`Bearer ${userToken}`}})
        setstudents(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }

    getAllStudents()
  } , [])

  return (
    <div className="mx-auto p-4 container">
      <h2 className="mb-4 font-semibold text-2xl">My Students</h2>
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Link to="/user/trainer/add-student"  className="flex flex-col justify-center bg-white hover:bg-green-500 shadow-lg p-4 rounded-lg transition-all duration-75 hover:cursor-pointer ease-in">
                <div className="flex justify-center m-auto rounded-full w-28 h-28 text-center">
                  <RiUserAddFill size={90} className=""/>
                </div>
                <h3 className="font-semibold text-center text-xl">Add a student</h3>
                
        </Link>
        {students.length === 0 ? (
          null
        ) : (
          students.map((student) => (
            <div key={student.id} className="bg-white shadow-lg p-4 rounded-lg">
              <img
                src={student.profile_image}
                alt={`${student.name}'s profile`}
                className="mx-auto rounded-full w-24 h-24"
              />
              <h3 className="mt-4 font-semibold text-center text-xl">{student.name}</h3>
              <div className="mt-2 text-center">
                <p className="text-gray-600">Weight: {student.weight} kg</p>
                <p className="text-gray-600">Height: {student.height} cm</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
