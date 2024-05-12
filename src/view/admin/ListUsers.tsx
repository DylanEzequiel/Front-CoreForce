import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Users } from "../../interfaces/users/interfaces";
import { formatDate } from "../../helpers/date/formatDate";
import { Link } from "react-router-dom";

export const ListUsers = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [users, setusers] = useState<Users[]>([]);
  const [filters, setFilters] = useState({
    userType: "all",
    membership: "all",
    gender: "all",
  });
  const sessionToken = sessionStorage.getItem("UserToken");

  useEffect(() => {
    const getAllUsers = async (): Promise<void> => {
      const { data } = await axios.get(
        "http://localhost:3000/users?page=1&limit=5",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionToken}`,
          },
        }
      );
      setusers(data);
    };
    getAllUsers();
  }, [sessionToken]);

  //Cambiar filtros
  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const getUsersByFilters = async () => {
    const url = `${apiUrl}/users?page=1&limit=5`;

    // Filtrar solo los filtros seleccionados
    const filteredParams = Object.entries(filters)
      .filter(([value]) => value !== "")
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const urlWithParams = filteredParams ? `${url}&${filteredParams}` : url;

    console.log(urlWithParams);
    try {
      const { data } = await axios.get(
        `${urlWithParams}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionToken}`,
          },
        }
      );
      setusers(data)
    } catch (error) {
      console.log(error)
    }
  };

  //Eliminar usuario
  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${apiUrl}/users/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionToken}`,
            },
          })
          .then((result) => {
            Swal.fire({
              title: "Deleted!",
              text: `${result.data}`,
              icon: "success",
            });
          });
      }
    });
  };

  return (
    <div className="rounded-md border bg-white px-5 pt-6 pb-3 shadow-default border-comp  sm:px-7 xl:pb-1">
      <div className="flex flex-1 items-center gap-2 justify-between">
        <h1 className="text-2xl py-5 font-semibold">Users</h1>

        <div>
          <select
            value={filters.userType}
            onChange={(e) => handleFilterChange("userType", e.target.value)}
          >
            <option value="all">All users</option>
            <option value="user">User</option>
            <option value="trainer">Trainer</option>
            <option value="admin">Admin</option>
          </select>

          <select
            value={filters.membership}
            onChange={(e) => handleFilterChange("membership", e.target.value)}
          >
            <option value="all">All Memberships</option>
            <option value="Free">Free</option>
            <option value="Bronze">Bronze</option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
            <option value="Platinum">Platinum</option>
          </select>

          <select
            value={filters.gender}
            onChange={(e) => handleFilterChange("gender", e.target.value)}
          >
            <option value="all">All genders</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Othes</option>
          </select>

          <button onClick={getUsersByFilters}>Filter</button>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black xl:pl-11">
                Image
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black">
                Name
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black">
                Email
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black">
                Adress
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black">
                Phone
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black">
                Birthday
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black">
                Gender
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black">
                Height
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black">
                Weight
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black">
                Role
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black">
                Status
              </th>
              <th className="py-4 px-4 font-medium text-black">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                  <img
                    src={user.profile_image!}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="border-b border-[#eee] py-5 px-4">
                  <h5 className="text-black font-medium">{user.name}</h5>
                </td>

                <td className="border-b border-[#eee] py-5 px-4">
                  <p className="text-black">{user.email}</p>
                </td>

                <td className="border-b border-[#eee] py-5 px-4">
                  <p className="text-black">{user.address}</p>
                </td>

                <td className="border-b border-[#eee] py-5 px-4">
                  <p className="text-black">{user.phoneNumber}</p>
                </td>

                <td className="border-b border-[#eee] py-5 px-4">
                  <p className="text-black">{formatDate(user.birthdate)}</p>
                </td>

                <td className="border-b border-[#eee] py-5 px-4">
                  <p className="text-black">{user.gender}</p>
                </td>

                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black">{user.height}</p>
                </td>

                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black">{user.weight}</p>
                </td>

                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black">{user.role}</p>
                </td>

                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black">status</p>
                </td>

                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <Link
                      className="hover:text-primary"
                      to={`/dashboard/admin/${user.id}`}
                    >
                      editar
                    </Link>
                    <button className="hover:text-primary">desactivar</button>
                    <button
                      className="hover:text-primary"
                      onClick={() => handleDelete(user.id)}
                    >
                      borrar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
