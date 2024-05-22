import { useEffect, useState } from "react";
import clienteAxios from "../../service/axiosService";
import { useAuthStore } from "../../store/auth/authStore";


export const StudentList = () => {
  const { userId } = useAuthStore((state) => ({
    userId: state.userId,
  }));

  const [students, setstudents] = useState([
    {
      id: '1',
      name: 'pepita1',
      weight: 70,
      height: 175,
      profilePicture: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      name: 'pepita2',
      weight: 60,
      height: 165,
      profilePicture: 'https://via.placeholder.com/150',
    },
    // Añade más estudiantes según sea necesario
  ])

  useEffect(() => {
    const getAllStudents = async() => {
      try {
        const {data} = await clienteAxios(`/trainers/students/${userId}`)
        setstudents(data)
      } catch (error) {
        console.log(error)
      }
    }

    getAllStudents()
  } , [])

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">My Students</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {students.length === 0 ? (
          <p className="text-gray-500">No students found.</p>
        ) : (
          students.map((student) => (
            <div key={student.id} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={student.profilePicture}
                alt={`${student.name}'s profile`}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4 text-center">{student.name}</h3>
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
