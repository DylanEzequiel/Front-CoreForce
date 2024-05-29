/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import ValidateLogin, { IErrorsLogin } from "../../helpers/ValidateLogin";
import { toast } from "react-toastify";
import { useAuthStore } from "../../store/auth/authStore";
import clienteAxios from "../../service/axiosService";
import { AuthGoogle } from "../Google/AuthGoogle";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import LoadingIcons from "react-loading-icons";

function LoginForm(): React.ReactElement {
  const navigate = useNavigate();
  const { fetchUserData, setTokenAndUserId } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  

  const [loading,setLoading]=useState(false)
  //obtengo funcionalidades del custom hook de juampi (que buen hook loco)
  const { onInputChange, formState, touched, email, password } = useForm({
    email: "",
    password: "",
    confirmPassword: "",
  });

  //Manejo de Errores del Form -dylan
  const [errorsLog, setErrorsLog] = useState<IErrorsLogin>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const ErrorValidate = ValidateLogin(formState);

  useEffect(() => {
    if (Object.keys(touched).length > 0) {
      setErrorsLog(ErrorValidate);
      return;
    }
  }, [formState, touched]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    
    await clienteAxios
      .post(`/auth/login`, {
        email: formState.email,
        password: formState.password,
      })
      .then((data) => {
        console.log(data.data);
        toast.success("Login success! Welcome back");
        return data.data;
      })
      .then((user) => {
        sessionStorage.setItem("UserToken", user.token);
        sessionStorage.setItem("UserId", user.userId);
        setTokenAndUserId(user.token, user.userId);
        fetchUserData();
        setLoading(false)
        navigate("/");
      })
      .catch((error) => {
        setLoading(false)
        toast.error(error.response.data.message);
      });
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="p-4 sm:p-12 xl:p-16 w-full">
      <div className="space-y-4 md:space-y-6 p-6 sm:p-8">
        <div className="flex justify-between items-center">
          <span className="block mb-1.5 font-medium text-gray-400">
            Start for free
          </span>
          <Link to={'/'}>
            <IoHome  size={20} className="block xl:hidden text-primary"/>
          </Link>
        </div>
        <h2 className="mb-9 font-bold text-2xl text-black sm:text-2xl">
          Sign In to CoreForce
        </h2>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div className="relative w-full">
            <div className="relative mt-4 w-full">
              <input
                id="email"
                type="email"
                name="email"
                placeholder=" "
                className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
                  errorsLog.email ? "border-orange-500" : "border-neutral-200"
                }`}
                value={email}
                onChange={onInputChange}
              />
              {errorsLog.email && (
                <span className="text-orange-500">{errorsLog.email}</span>
              )}
              <label
                htmlFor="email"
                className="top-5 left-4 z-10 absolute text-md transform origin-[0] -translate-y-3 peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 duration-150 peer-placeholder-shown:scale-100 peer-focus:scale-75"
              >
                Email
              </label>
            </div>
            <div className="relative mt-4 w-full">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder=" "
                className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
                  errorsLog.password
                    ? "border-orange-500"
                    : "border-neutral-200"
                }`}
                onChange={onInputChange}
                value={password}
              />
              {errorsLog.password && (
                <span className="text-orange-500">{errorsLog.password}</span>
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

            <button
              type="submit"
              disabled={loading}
              className={`inline-block bg-secondary focus:ring-opacity-50 shadow-sm focus:shadow-sm hover:shadow-md mt-4 py-3 rounded-sm w-full font-semibold text-center text-lg text-white transition duration-200 ${loading? "bg-orange-700":null}`}
            >
               {loading? <LoadingIcons.ThreeDots  className='m-auto'/> :"Login"}
            </button>
          </div>
        </form>
        <AuthGoogle />
        <div className="mt-4 font-light text-center text-neutral-500">
          <div className="flex flex-row justify-center items-center gap-2">
            <p>Dont have an account?</p>
            <Link
              to={"/auth/signup"}
              className="text-primary hover:underline cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
