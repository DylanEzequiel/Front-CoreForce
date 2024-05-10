import axios from "axios";
import { useEffect, useState } from "react";
import { Users } from "../../interfaces/users/interfaces";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { formatDate } from "../../helpers/date/formatDate";



const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4YzAwNzc4YS1mYzU5LTQwMGUtYmJlMy00OWI5MGZhMGRmYmYiLCJ1c2VySWQiOiI4YzAwNzc4YS1mYzU5LTQwMGUtYmJlMy00OWI5MGZhMGRmYmYiLCJuYW1lIjoiSnVhbkNydXoxIiwiZW1haWwiOiJqdWFuY3J1ekBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTUzNTAwNzksImV4cCI6MTcxNTM1MzY3OX0.8Ndi5AC7eBi4uW54rQuIJLVlhGv0djKpm6HFELWYeKg";



export const DashboardAdmin: React.FC = () => {
  const [users, setusers] = useState<Users[]>([]);
  const [userRole, setUserRole] = useState<string>('');
 
  useEffect(() => {
    const getAllUsers = async (): Promise<void> => {
      const { data } = await axios.get(
        "http://localhost:3000/users?page=1&limit=5",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setusers(data);
      setUserRole(data.role)
    };

    getAllUsers();
  }, [userRole]);


  const handleDelete = async (id: string) => {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/users/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        }).then((result) => {

          Swal.fire({
            title: "Deleted!",
            text: `${result.data}`,
            icon: "success"
          });
        })
      }
    });
    
  }

  // const handleChangeRole = async(event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const newRole = event.target.value;
  //   setUserRole(newRole);
    
  //   try {
  //     await axios.put(`http://localhost:3000/users/${user}`, newRole,{
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }




  return (
    <div className="py-20 container mx-auto min-h-screen" id="admin">
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex">
          <h1 className="text-3xl">Users</h1>
        </div>
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Image</th>
                <th className="text-left p-3 px-5">Name</th>
                <th className="text-left p-3 px-5">Email</th>
                <th className="text-left p-3 px-5">Adress</th>
                <th className="text-left p-3 px-5">Phone</th>
                <th className="text-left p-3 px-5">Birthday</th>
                <th className="text-left p-3 px-5">Gender</th>
                <th className="text-left p-3 px-5">Height</th>
                <th className="text-left p-3 px-5">Weight</th>
                <th className="text-left p-3 px-5">Role</th>
                <th className="text-left p-3 px-5">actions</th>
                <th></th>
              </tr>
              {users.map((user) => (
                <tr className="border-b hover:bg-orange-100 bg-gray-100"
                key={user.id}
                >
                  <td className="p-3 px-5">
                    <p>image</p>
                  </td>
                  <td className="p-3 px-5">
                    <p>{user.name}</p>
                  </td>

                  <td className="p-3 px-5">
                    <p>{user.email}</p>
                  </td>

                  <td className="p-3 px-5">
                    <p>{user.address}</p>
                  </td>

                  <td className="p-3 px-5">
                    <p>{user.phoneNumber}</p>
                  </td>

                  <td className="p-3 px-5">
                    <p>{formatDate(user.birthdate)}</p>
                  </td>

                  <td className="p-3 px-5">
                    <p>{user.gender}</p>
                  </td>

                  <td className="p-3 px-5">
                    <p>{user.height}</p>
                  </td>

                  <td className="p-3 px-5">
                    <p>{user.weight}</p>
                  </td>

                  <td className="p-3 px-5">
                    <select value={user.role} className="bg-transparent">
                      <option value="user">user</option>
                      <option value="trainer">trainer</option>
                      <option value="admin">admin</option>
                    </select>
                  </td>

                  <td className="p-3 px-5 flex justify-end">
                    <Link
                      to={`/dashboard/admin/${user.id}`}
                      type="button"
                      className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Update
                    </Link>
                    <button
                      type="button"
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
