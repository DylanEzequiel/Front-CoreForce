
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Users } from "../../interfaces/users/interfaces";
import { formatDate } from "../../helpers/date/formatDate";
import { Link } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import clienteAxios from "../../service/axiosService";
import { useAuthStore } from "../../store/auth/authStore";

export const ListUsers = () => {
  const [users, setusers] = useState<Users[]>([]);
  const [filters, setFilters] = useState({
    userType: "user",
    membership: "all",
    gender: "all",
  });
 
  const { token } = useAuthStore((state) => ({
    token: state.token,
  }));

  const getAllUsers = async (): Promise<void> => {
    const { data } = await clienteAxios.get("/users?page=1&limit=5", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    setusers(data);
    console.log(data)
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  //Cambiar filtros
  const handleFilterChange = (filterName: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const getUsersByFilters = async () => {
    const url = `/users?page=1&limit=5`;

    // Filtrar solo los filtros seleccionados
    const filteredParams = Object.entries(filters)
      .filter(([value]) => value !== "")
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const urlWithParams = filteredParams ? `${url}&${filteredParams}` : url;
    try {
      const { data } = await clienteAxios.get(`${urlWithParams}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setusers(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  //Eliminar usuario
  const handleDesactive = async (id: string) => {
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
        clienteAxios
          .put(
            `/users/logicaldelete/${id}`,
            {},
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((result) => {
            Swal.fire({
              title: "Deleted!",
              text: `${result.data}`,
              icon: "success",
            });
            getAllUsers();
          });
      }
    });
  };

  return (
    <div className="border-comp bg-white shadow-default px-5 sm:px-7 pt-6 pb-3 xl:pb-1 border rounded-md">
      <div className="flex flex-1 justify-between items-center gap-2">
        <h1 className="py-5 font-semibold text-2xl">Users</h1>

        <div className="flex flex-1 gap-3">
          <select
            value={filters.userType}
            onChange={(e) => handleFilterChange("userType", e.target.value)}
            className={`relative z-20 w-full rounded border border-stroke bg-transparent py-2 px-6 outline-none transition focus:border-primary active:border-primary`}
          >
            <option value="" disabled className="text-gray-500">
              Select type user
            </option>
            <option value="user" className="text-gray-500">
              users
            </option>
            <option value="trainer" className="text-gray-500">
              Trainer
            </option>
            <option value="admin" className="text-gray-500">
              Admin
            </option>
            <option value="all" className="text-gray-500">
              EveryOne
            </option>
          </select>

          <select
            value={filters.membership}
            onChange={(e) => handleFilterChange("membership", e.target.value)}
            className={`relative z-20 w-full rounded border border-stroke bg-transparent py-2 px-6 outline-none transition focus:border-primary active:border-primary`}
          >
            <option value="" disabled className="text-gray-500">
              Select Membership
            </option>
            <option value="all">All Memberships</option>
            <option value="Free">Free</option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
            <option value="Platinum">Platinum</option>
          </select>

          <select
            value={filters.gender}
            onChange={(e) => handleFilterChange("gender", e.target.value)}
            className={`relative z-20 w-full rounded border border-stroke bg-transparent py-2 px-6 outline-none transition focus:border-primary active:border-primary`}
          >
            <option value="" disabled className="text-gray-500">
              Select gender
            </option>
            <option value="all">All genders</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Othes</option>
          </select>

          <button
            onClick={getUsersByFilters}
            className="bg-primary px-4 text-white"
          >
            Filter
          </button>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-4 xl:pl-11 min-w-[220px] font-medium text-black">
                Image
              </th>
              <th className="px-4 py-4 min-w-[150px] font-medium text-black">
                Name
              </th>
              <th className="px-4 py-4 min-w-[150px] font-medium text-black">
                Email
              </th>
              <th className="px-4 py-4 min-w-[150px] font-medium text-black">
                Adress
              </th>
              <th className="px-4 py-4 min-w-[150px] font-medium text-black">
                Phone
              </th>
              <th className="px-4 py-4 min-w-[150px] font-medium text-black">
                Birthday
              </th>
              <th className="px-4 py-4 min-w-[150px] font-medium text-black">
                Gender
              </th>
              <th className="px-4 py-4 min-w-[150px] font-medium text-black">
                Height
              </th>
              <th className="px-4 py-4 min-w-[150px] font-medium text-black">
                Weight
              </th>
              <th className="px-4 py-4 min-w-[150px] font-medium text-black">
                Role
              </th>
              <th className="px-4 py-4 min-w-[120px] font-medium text-black">
                Status
              </th>
              <th className="px-4 py-4 font-medium text-black">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border-[#eee] px-4 py-5 pl-9 xl:pl-11 border-b">
                  <img
                    src={user.profile_image!}
                    className="rounded-full w-10 h-10"
                  />
                </td>
                <td className="border-[#eee] px-4 py-5 border-b">
                  <h5 className="font-medium text-black">{user.name}</h5>
                </td>

                <td className="border-[#eee] px-4 py-5 border-b">
                  <p className="text-black">{user.email}</p>
                </td>

                <td className="border-[#eee] px-4 py-5 border-b">
                  <p className="text-black">{user.address}</p>
                </td>

                <td className="border-[#eee] px-4 py-5 border-b">
                  <p className="text-black">{user.phoneNumber}</p>
                </td>

                <td className="border-[#eee] px-4 py-5 border-b">
                  <p className="text-black">{formatDate(user.birthdate)}</p>
                </td>

                <td className="border-[#eee] px-4 py-5 border-b">
                  <p className="text-black">{user.gender}</p>
                </td>

                <td className="border-[#eee] dark:border-strokedark px-4 py-5 border-b">
                  <p className="text-black">
                    {user.height ? user.height : "0 cm"}
                  </p>
                </td>

                <td className="border-[#eee] dark:border-strokedark px-4 py-5 border-b">
                  <p className="text-black">
                    {user.weight ? user.weight : "0 kg"}
                  </p>
                </td>

                <td className="border-[#eee] dark:border-strokedark px-4 py-5 border-b">
                  <p className="text-black">{user.role}</p>
                </td>

                <td className="border-[#eee] dark:border-strokedark px-4 py-5 border-b">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      user.isActive
                        ? "bg-green-400 text-green-400"
                        : "text-red-500 bg-red-500"
                    }`}
                  >
                    {user.isActive ? "Active" : "Desactive"}
                  </p>
                </td>

                <td className="border-[#eee] dark:border-strokedark px-4 py-5 border-b">
                  <div className="flex items-center space-x-3.5">
                    <Link
                      className="hover:text-primary"
                      to={`/dashboard/admin/${user.id}`}
                    >
                      <FaRegEdit
                        size={20}
                        className="text-comp hover:text-primary transition-all duration-200"
                      />
                    </Link>
                    {/* <button className="hover:text-primary">desactivar</button> */}
                    <button
                      className="hover:text-primary"
                      onClick={() => handleDesactive(user.id)}
                    >
                      <FaRegTrashCan
                        size={20}
                        className="text-comp hover:text-red-500 transition-all duration-300"
                      />
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
