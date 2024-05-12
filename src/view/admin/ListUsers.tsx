import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Users } from "../../interfaces/users/interfaces";
import { formatDate } from "../../helpers/date/formatDate";
import { Link } from "react-router-dom";


const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhNGMyMjNiNC1mMGFlLTQ1ZGItOTc4My1hMTYyYmJiZjBlZWIiLCJ1c2VySWQiOiJhNGMyMjNiNC1mMGFlLTQ1ZGItOTc4My1hMTYyYmJiZjBlZWIiLCJuYW1lIjoibHVjYXMiLCJlbWFpbCI6Imx1Y2FzQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxNTQ3MzQ0MCwiZXhwIjoxNzE1NDc3MDQwfQ.RHv2XC6XLLSJS_7yJLx6UFBAGSRwRD80FbdfATfmJWM";
  
export const ListUsers = () => {

  const [users, setusers] = useState<Users[]>([]);

 
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
      console.log(data)
      setusers(data);
      
    };

    getAllUsers();
  }, []);


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

  return (
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
                    <p>{user.role}</p>
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
  )
}
