import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "../../interfaces/users/interfaces";
import { EditErros} from "../../helpers/ValidateRegister";
import Swal from "sweetalert2";
import {  fornatDateEdit } from '../../helpers/date/formatDate';
import clienteAxios from "../../service/axiosService";
import { useAuthStore } from "../../store/auth/authStore";



export const UpdateUsers = () => {
  const { id } = useParams();
  
  const navigate = useNavigate();
  const { token } = useAuthStore((state) => ({
    token: state.token,
  }));
  const [user, setUser] = useState<User>({
    id: '',
    name: '',
    email: '',
    profile_image: undefined,
    phoneNumber: '',
    birthdate: new Date(),
    signup_date: '',
    gender: '',
    address: '',
    height: '',
    weight: '',
    role: '',
    user_membership: [],
    user_routines: []
  });

  

  const errors:EditErros={}
 

  useEffect(() => {
    const getUserById = async () => {
      const { data } = await clienteAxios.get(`/users/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      
      setUser(data);
     
    };

    getUserById();
  }, [id, token]);

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {user_membership, user_routines, ...resto} = user
    console.log(user_membership)
  
    
    try {
      await clienteAxios.put(`/users/${id}`, resto,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "User update successfully!",
        showConfirmButton: false,
        timer: 1500
      });
      
      setTimeout(() => {
        navigate('/dashboard/users')
      }, 1600);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="mx-auto min-h-screen container">
      <h1 className="py-5 font-semibold text-2xl text-center text-primary">Edit User</h1>

      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        <div className="relative w-full">
          <input
            id="name"
            type="text"
            name="name"
            placeholder=" "
            className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
              errors.name ? "border-red-500" : "border-neutral-500"
            }`}
            onChange={e => setUser({
              ...user,
              name: e.target.value
            })}
            value={user.name}
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
          <label
            htmlFor="name"
            className="top-5 left-4 z-10 absolute text-md transform origin-[0] -translate-y-3 peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 duration-150 peer-placeholder-shown:scale-100 peer-focus:scale-75"
          >
            Name
          </label>
        </div>

        <div className="relative w-full">
          <input
            id="email"
            type="email"
            name="email"
            placeholder=" "
            className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
              errors.email ? "border-red-500" : "border-neutral-500"
            }`}
            value={user.email}
            onChange={e => setUser({
              ...user,
              email: e.target.value
            })}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
          <label
            htmlFor="email"
            className="top-5 left-4 z-10 absolute text-md transform origin-[0] -translate-y-3 peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 duration-150 peer-placeholder-shown:scale-100 peer-focus:scale-75"
          >
            Email
          </label>
        </div>

        <div className="relative w-full">
          <input
            id="address"
            type="text"
            name="address"
            placeholder=" "
            className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
              errors.address ? "border-red-500" : "border-neutral-500"
            }`}
            onChange={e => setUser({
              ...user,
              address: e.target.value
            })}
            value={user.address}
          />
          {errors.address && (
            <span className="text-red-500">{errors.address}</span>
          )}
          <label
            htmlFor="address"
            className="top-5 left-4 z-10 absolute text-md transform origin-[0] -translate-y-3 peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 duration-150 peer-placeholder-shown:scale-100 peer-focus:scale-75"
          >
            Address
          </label>
        </div>

        <div className="relative w-full">
          <input
            id="phoneNumber"
            type="number"
            name="phoneNumber"
            placeholder=" "
            className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
              errors.phoneNumber ? "border-red-500" : "border-neutral-500"
            }`}
            onChange={e => setUser({
              ...user,
              phoneNumber: e.target.value
            })}
            value={user.phoneNumber}
          />
          {errors.phoneNumber && (
            <span className="text-red-500">{errors.phoneNumber}</span>
          )}
          <label
            htmlFor="phoneNumber"
            className="top-5 left-4 z-10 absolute text-md transform origin-[0] -translate-y-3 peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 duration-150 peer-placeholder-shown:scale-100 peer-focus:scale-75"
          >
            Phone
          </label>
        </div>

        <div className="relative w-full">
          <input
            id="birthdate"
            type="date"
            name="birthdate"
            placeholder=" "
            className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
              errors.birthdate ? "border-red-500" : "border-neutral-500"
            }`}
            onChange={e => setUser({
              ...user,
              birthdate: new Date(e.target.value)
            })}
            value={fornatDateEdit(user.birthdate)}
          />
          {errors.birthdate && (
            <span className="text-red-500">{errors.birthdate}</span>
          )}
          <label
            htmlFor="birthdate"
            className="top-5 left-4 z-10 absolute text-md transform origin-[0] -translate-y-3 peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 duration-150 peer-placeholder-shown:scale-100 peer-focus:scale-75"
          >
            Birthdate
          </label>
        </div>

        <select
          id="role"
          name="role"
          className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4 ${
            errors.role ? "border-red-500" : "border-neutral-500"
          }`}
          onChange={e => setUser({
            ...user,
            role: e.target.value
          })}
          value={user.role}
        >
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="trainer">Trainer</option>
          <option value="admin">Admin</option>
        </select>
        {errors.gender && <span className="text-red-500">{errors.gender}</span>}
        <label
          htmlFor="role"
          className="top-5 left-4 z-10 absolute text-md transform origin-[0] -translate-y-3 peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 duration-150 peer-placeholder-shown:scale-100 peer-focus:scale-75"
        >
          Role
        </label>

        <select
          id="gender"
          name="gender"
          className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4 ${
            errors.gender ? "border-red-500" : "border-neutral-500"
          }`}
          onChange={e => setUser({
            ...user,
            gender: e.target.value
          })}
          value={user.gender}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <span className="text-red-500">{errors.gender}</span>}
        <label
          htmlFor="gender"
          className="top-5 left-4 z-10 absolute text-md transform origin-[0] -translate-y-3 peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 duration-150 peer-placeholder-shown:scale-100 peer-focus:scale-75"
        >
          Gender
        </label>

        <div className="relative w-full">
          <input
            id="height"
            type="text"
            name="height"
            placeholder=" "
            className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
              errors.email ? "border-red-500" : "border-neutral-500"
            }`}
            value={user.height}
            onChange={e => setUser({
              ...user,
              height: e.target.value
            })}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
          <label
            htmlFor="height"
            className="top-5 left-4 z-10 absolute text-md transform origin-[0] -translate-y-3 peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 duration-150 peer-placeholder-shown:scale-100 peer-focus:scale-75"
          >
            Height
          </label>
        </div>

        <div className="relative w-full">
          <input
            id="weight"
            type="text"
            name="weight"
            placeholder=" "
            className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
              errors.email ? "border-red-500" : "border-neutral-500"
            }`}
            value={user.weight}
            onChange={e => setUser({
              ...user,
              weight: e.target.value
            })}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
          <label
            htmlFor="weight"
            className="top-5 left-4 z-10 absolute text-md transform origin-[0] -translate-y-3 peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 duration-150 peer-placeholder-shown:scale-100 peer-focus:scale-75"
          >
            Weight
          </label>
        </div>

       

        <button
          type="submit"
          className="inline-block bg-secondary hover:bg-orange-600 focus:ring-opacity-50 shadow-sm focus:shadow-sm hover:shadow-md py-3 rounded-sm w-full font-semibold text-center text-lg text-white transition duration-200"
        >
          Update
        </button>

      </form>
    </section>
  );
};
