/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  RegisterErrors,
  validateRegister,
} from "../../helpers/ValidateRegister";
import { useForm } from "../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import clienteAxios from "../../service/axiosService";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoadingIcons from "react-loading-icons";

export const RegisterForm = (): React.ReactElement => {
  const navigate = useNavigate();
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
  const [loading,setLoading]=useState(false)
  const [errors, setErrors] = useState<RegisterErrors>({});
  const validationErrors = validateRegister(formState);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepPassword, setShowRepPassword] = useState(false);

  useEffect(() => {
    // Validar solo cuando el campo ha sido tocado
    if (Object.keys(touched).length > 0) {
      setErrors(validationErrors);
    }
  }, [formState, touched]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      setLoading(false)
      return;
    }
    try {
      const { data } = await clienteAxios.post(`/auth/signup`, {
        name,
        email,
        address,
        password,
        confirmPassword,
        gender,
        birthdate,
        phoneNumber,
        membershipName: "Free",
      });
      setLoading(false)
      toast.success("Register Succes! Log in please");
      navigate("/auth/signin");
      console.log(data);
    } catch (error: any) {
      setLoading(false)
      toast.error(error.response.data.message);
    }
    setLoading(false)

  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleShowRepPassword = () => {
    setShowRepPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="p-4 sm:p-12 xl:p-16 w-full">
      <div className="space-y-4 md:space-y-6 p-6 sm:p-8">
        <span className="block mb-1.5 font-medium text-gray-400">
          Start for free
        </span>
        <h2 className="mb-9 font-bold text-2xl text-slate-700 sm:text-2xl">
        Sign Up to CoreForce
        </h2>

        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div className="relative w-full">
            <input
              id="name"
              type="text"
              name="name"
              placeholder=" "
              className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
                errors.name ? "border-orange-500" : "border-neutral-200"
              }`}
              onChange={onInputChange}
              value={name}
            />
            {errors.name && (
              <span className="text-orange-500">{errors.name}</span>
            )}
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
                errors.email ? "border-orange-500" : "border-neutral-200"
              }`}
              value={email}
              onChange={onInputChange}
            />
            {errors.email && (
              <span className="text-orange-500">{errors.email}</span>
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
                errors.address ? "border-orange-500" : "border-neutral-200"
              }`}
              onChange={onInputChange}
              value={address}
            />
            {errors.address && (
              <span className="text-orange-500">{errors.address}</span>
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
                errors.phoneNumber ? "border-orange-500" : "border-neutral-200"
              }`}
              onChange={onInputChange}
              value={phoneNumber}
            />
            {errors.phoneNumber && (
              <span className="text-orange-500">{errors.phoneNumber}</span>
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
                errors.birthdate ? "border-orange-500" : "border-neutral-200"
              }`}
              onChange={onInputChange}
              value={birthdate}
            />
            {errors.birthdate && (
              <span className="text-orange-500">{errors.birthdate}</span>
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
              errors.gender ? "border-orange-500" : "border-neutral-200"
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
            <span className="text-orange-500">{errors.gender}</span>
          )}
         

          <div className="relative w-full">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder=" "
              className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
                errors.password ? "border-orange-500" : "border-neutral-200"
              }`}
              onChange={onInputChange}
              value={password}
            />
            {errors.password && (
              <span className="text-orange-500">{errors.password}</span>
            )}
            <label
              htmlFor="password"
              className="top-5 left-4 z-10 absolute text-md transform origin-[0] -translate-y-3 peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 duration-150 peer-placeholder-shown:scale-100 peer-focus:scale-75"
            >
              Password
            </label>
            <div
                onClick={toggleShowPassword}
                className="top-5 right-6 absolute text-slate-800 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
          </div>

          <div className="relative w-full">
            <input
              id="confirmPassword"
              type={showRepPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder=" "
              className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
                errors.confirmPassword
                  ? "border-orange-500"
                  : "border-neutral-200"
              }`}
              onChange={onInputChange}
              value={confirmPassword}
            />
            {errors.confirmPassword && (
              <span className="text-orange-500">{errors.confirmPassword}</span>
            )}
            <label
              htmlFor="confirmPassword"
              className="top-5 left-4 z-10 absolute text-md transform origin-[0] -translate-y-3 peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 duration-150 peer-placeholder-shown:scale-100 peer-focus:scale-75"
            >
              Repeat password
            </label>
            <div
                onClick={toggleShowRepPassword}
                className="top-5 right-6 absolute text-slate-800 cursor-pointer"
              >
                {showRepPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
          </div>
{/* 
          <button
            type="submit"
            className="inline-block bg-secondary focus:ring-opacity-50 shadow-sm focus:shadow-sm hover:shadow-md py-3 rounded-sm w-full font-semibold text-center text-lg text-white transition duration-200"
          >
            Register
          </button> */}
          <button
              type="submit"
              disabled={loading}
              className={`inline-block bg-secondary focus:ring-opacity-50 shadow-sm focus:shadow-sm hover:shadow-md mt-4 py-3 rounded-sm w-full font-semibold text-center text-lg text-white transition duration-200 ${loading? "bg-orange-700":null}`}
            >
               {loading? <LoadingIcons.ThreeDots  className='m-auto'/> :"Register"}
            </button>

          <div className="mt-4 font-light text-center text-neutral-500">
            <div className="flex flex-row justify-center items-center gap-2">
              <p>Already have an account?</p>
              <Link
                to={"/auth/signin"}
                className="text-slate-800 hover:underline cursor-pointer"
              >
                Sign in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
