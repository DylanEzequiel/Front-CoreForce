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
    <div className="mx-auto py-20 min-h-screen container" id="admin">
      <div className="bg-gray-200 text-gray-900">
        <div className="flex p-4">
          <h1 className="text-3xl">Users</h1>
        </div>
        <div className="flex justify-center px-3 py-4">
          <table className="bg-white shadow-md mb-4 rounded w-full text-md">
            <tbody>
              <tr className="border-b">
                <th className="px-5 p-3 text-left">Image</th>
                <th className="px-5 p-3 text-left">Name</th>
                <th className="px-5 p-3 text-left">Email</th>
                <th className="px-5 p-3 text-left">Adress</th>
                <th className="px-5 p-3 text-left">Phone</th>
                <th className="px-5 p-3 text-left">Birthday</th>
                <th className="px-5 p-3 text-left">Gender</th>
                <th className="px-5 p-3 text-left">Height</th>
                <th className="px-5 p-3 text-left">Weight</th>
                <th className="px-5 p-3 text-left">Role</th>
                <th className="px-5 p-3 text-left">actions</th>
                <th></th>
              </tr>
              {users.map((user) => (
                <tr className="bg-gray-100 hover:bg-orange-100 border-b"
                key={user.id}
                >
                  <td className="px-5 p-3">
                    <p>image</p>
                  </td>
                  <td className="px-5 p-3">
                    <p>{user.name}</p>
                  </td>

                  <td className="px-5 p-3">
                    <p>{user.email}</p>
                  </td>

                  <td className="px-5 p-3">
                    <p>{user.address}</p>
                  </td>

                  <td className="px-5 p-3">
                    <p>{user.phoneNumber}</p>
                  </td>

                  <td className="px-5 p-3">
                    <p>{formatDate(user.birthdate)}</p>
                  </td>

                  <td className="px-5 p-3">
                    <p>{user.gender}</p>
                  </td>

                  <td className="px-5 p-3">
                    <p>{user.height}</p>
                  </td>

                  <td className="px-5 p-3">
                    <p>{user.weight}</p>
                  </td>

                  <td className="px-5 p-3">
                    <select value={user.role} className="bg-transparent">
                      <option value="user">user</option>
                      <option value="trainer">trainer</option>
                      <option value="admin">admin</option>
                    </select>
                  </td>

                  <td className="flex justify-end px-5 p-3">
                    <Link
                      to={`/dashboard/admin/${user.id}`}
                      type="button"
                      className="bg-blue-500 hover:bg-blue-700 focus:shadow-outline mr-3 px-2 py-1 rounded text-sm text-white focus:outline-none"
                    >
                      Update
                    </Link>
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-700 focus:shadow-outline px-2 py-1 rounded text-sm text-white focus:outline-none"
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
