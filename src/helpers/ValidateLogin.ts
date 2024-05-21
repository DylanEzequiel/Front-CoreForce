// import { ILoginValidate } from "../interfaces/interfaces";

export interface IErrorsLogin{
    email?:string;
    password?:string,
    confirmPassword?:string;
}


export default function ValidateLogin({email,password,confirmPassword}:any):IErrorsLogin{
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegEx= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/
    const errors:IErrorsLogin={
        email:"",
        password:"",
        confirmPassword:""
    }
    if(!emailRegEx.test(email)){errors.email="Please enter a valid Gmail"}
    if(!passwordRegEx.test(password)){errors.password="Please enter a valid password"}
    if(!passwordRegEx.test(confirmPassword)){errors.confirmPassword="Please enter a valid password"}
    if(password!=confirmPassword){errors.confirmPassword="The passwords doesnt match"}
    return errors
}