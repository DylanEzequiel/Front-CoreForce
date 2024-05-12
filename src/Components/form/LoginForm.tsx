import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { Link, useNavigate } from 'react-router-dom'
import ValidateLogin, { IErrorsLogin } from '../../helpers/ValidateLogin'
import axios from 'axios'
import { toast } from 'react-toastify'

function LoginForm():React.ReactElement {
    const apiUrl=import.meta.env.VITE_API_URL
    console.log(apiUrl)
    const navigate = useNavigate()
   
    //obtengo funcionalidades del custom hook de juampi (que buen hook loco)
    const {onInputChange,
        formState,
        touched,
        email,
        password}=
    useForm({email:"",
    password:"",
    confirmPassword:"",})


    //Manejo de Errores del Form -dylan 
    const [errorsLog,setErrorsLog]=useState<IErrorsLogin>({email:"",
        password:"",
        confirmPassword:""
    })

    const ErrorValidate=ValidateLogin(formState)

    useEffect(()=>{
        if(Object.keys(touched).length>0){
            setErrorsLog(ErrorValidate)
            return 
        }
    },[formState,touched])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`email:${formState.email},password:${formState.password}`)
        await axios.post(`${apiUrl}/auth/login`,{email:formState.email,password:formState.password})
        .then((data)=>{
          console.log(data.data)
            toast.success("Login succes! welcome back")
          return data.data})
        .then((user)=>{
          sessionStorage.setItem("UserToken",user.token)
          sessionStorage.setItem("UserId",user.userId)
          console.log(user)
          navigate("/")
        })
        .catch(error=>{
          toast.error(error.response.data.message)
        })
    }
  return (
    <div className="dark:border-gray-700 bg-white dark:bg-gray-800 shadow m-60 md:mt-0 xl:p-0 dark:border rounded-lg w-full sm:max-w-2xl">
        <div className="space-y-4 md:space-y-6 p-6 sm:p-8">
            <h1 className="font-bold text-gray-900 text-xl md:text-2xl dark:text-white leading-tight tracking-tight">
          Log in to your account
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div className="relative w-full">
            <div className="relative mt-4 w-full">
                <input
                id="email"
                type="email"
                name="email"
                placeholder=" "
                className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
                    errorsLog.email ? "border-orange-500" : "border-neutral-500"
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
              type="password"
              name="password"
              placeholder=" "
              className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
                errorsLog.password ? "border-orange-500" : "border-neutral-500"
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
          </div>


          <button
            type="submit"
            className="inline-block bg-secondary focus:ring-opacity-50 shadow-sm focus:shadow-sm hover:shadow-md mt-4 py-3 rounded-sm w-full font-semibold text-center text-lg text-white transition duration-200">
            Login 
          </button>
          </div>
          <div className="mt-4 font-light text-center text-neutral-500">
            <div className="flex flex-row justify-center items-center gap-2">
              <p>Dont have an account?</p>
              <Link
                to={"/auth/register"}
                className="text-neutral-100 hover:underline cursor-pointer"
              >
                Register
              </Link>
            </div>
          </div>
        </form>
        </div>
    </div>
  )
}

export default LoginForm