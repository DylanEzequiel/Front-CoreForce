/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  RegisterErrors,
  validateRegister,
} from "../../helpers/ValidateRegister";
import { useForm } from "../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const RegisterForm = ():React.ReactElement => {
  const apiUrl=import.meta.env.VITE_API_URL
  const navigate=useNavigate()
  const {
    onInputChange,
    formState,
    email,
    password,
    name,
    address,
    phoneNumber,
    confirmPassword,
    birthdate,
    gender,
    touched,
  } = useForm({
    name: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
    confirmPassword: "",
    birthdate: "",
    gender: "",
  });

  const [errors, setErrors] = useState<RegisterErrors>({});
  const validationErrors = validateRegister(formState);

  useEffect(() => {
    // Validar solo cuando el campo ha sido tocado
    if (Object.keys(touched).length > 0) {
      setErrors(validationErrors);
    }
  }, [formState, touched]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const {data} = await axios.post(`${apiUrl}/auth/signup`,{name, email, address, password, confirmPassword, gender, birthdate, phoneNumber,membershipName:"Free"})
      toast.success("Register Succes! Log in please")
      await navigate("/auth/login")
      console.log(data)
      
    } catch (error:any) {
      toast.error(error.response.data.message)
    }
  };

  return (
    <div className="dark:border-gray-700 bg-white dark:bg-gray-800 shadow md:mt-0 xl:p-0 dark:border rounded-lg w-full sm:max-w-2xl">
      
      <div className="space-y-4 md:space-y-6 p-6 sm:p-8">
        <h1 className="font-bold text-gray-900 text-xl md:text-2xl dark:text-white leading-tight tracking-tight">
          Sign up to your account
        </h1>
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
              onChange={onInputChange}
              value={name}
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
              value={email}
              onChange={onInputChange}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
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
              onChange={onInputChange}
              value={address}
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
              onChange={onInputChange}
              value={phoneNumber}
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
              onChange={onInputChange}
              value={birthdate}
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
            id="gender"
            name="gender"
            className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4 ${
              errors.gender ? "border-red-500" : "border-neutral-500"
            }`}
            onChange={onInputChange}
            value={gender}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <span className="text-red-500">{errors.gender}</span>
          )}
          <label
            htmlFor="gender"
            className="top-5 left-4 z-10 absolute text-md transform origin-[0] -translate-y-3 peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 duration-150 peer-placeholder-shown:scale-100 peer-focus:scale-75"
          >
            Gender
          </label>

          <div className="relative w-full">
            <input
              id="password"
              type="password"
              name="password"
              placeholder=" "
              className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
                errors.password ? "border-red-500" : "border-neutral-500"
              }`}
              onChange={onInputChange}
              value={password}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password}</span>
            )}
            <label
              htmlFor="password"
              className="top-5 left-4 z-10 absolute text-md transform origin-[0] -translate-y-3 peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 duration-150 peer-placeholder-shown:scale-100 peer-focus:scale-75"
            >
              Password
            </label>
          </div>

          <div className="relative w-full">
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder=" "
              className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
                errors.confirmPassword ? "border-red-500" : "border-neutral-500"
              }`}
              onChange={onInputChange}
              value={confirmPassword}
            />
            {errors.confirmPassword && (
              <span className="text-red-500">{errors.confirmPassword}</span>
            )}
            <label
              htmlFor="confirmPassword"
              className="top-5 left-4 z-10 absolute text-md transform origin-[0] -translate-y-3 peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 duration-150 peer-placeholder-shown:scale-100 peer-focus:scale-75"
            >
              Repeat password
            </label>
          </div>

          <button
            type="submit"
            className="inline-block bg-secondary focus:ring-opacity-50 shadow-sm focus:shadow-sm hover:shadow-md py-3 rounded-sm w-full font-semibold text-center text-lg text-white transition duration-200"
          >
            Register
          </button>

          <div className="mt-4 font-light text-center text-neutral-500">
            <div className="flex flex-row justify-center items-center gap-2">
              <p>Already have an account?</p>
              <Link
                to={"/auth/login"}
                className="text-neutral-100 hover:underline cursor-pointer"
              >
                Log in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
