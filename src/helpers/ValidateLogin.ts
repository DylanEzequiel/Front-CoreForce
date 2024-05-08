import { ILoginValidate } from "../interfaces/interfaces";

interface IErrorsLogin{
    email:string;
    password:string,
    confirmPassword:string;
}


export default function ValidateLogin({email,password,confirmPassword}:ILoginValidate):IErrorsLogin{
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegEx= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,15}$/
    const errors:IErrorsLogin={
        email:"",
        password:"",
        confirmPassword:""
    }
    if(!emailRegEx.test(email)){errors.email="El email no coincide con el formato"}
    if(!passwordRegEx.test(password)){errors.password="La contraseña no tiene el formato"}
    if(!passwordRegEx.test(confirmPassword)){errors.confirmPassword="La contraseña no tiene el formato"}
    if(password!=confirmPassword){errors.password="las contraseñas no coinciden"}
    return errors
}