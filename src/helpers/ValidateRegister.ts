import { IUserRegister } from "../interfaces/interfaces"

interface RegisterErrors{
    name:string
    email:string
    password:string
    phone_number:string
    birthdate:string
    gender:string
    height:string
    weight:string
    address:string
}

export default function ValidateRegister({name,email,password,phone_number,birthdate,gender,height,weight,address}:IUserRegister){
    const errors={
        name:"",
    email:"",
    password:"",
    phone_number:"",
    birthdate:"",
    gender:"",
    height:"",
    weight:"",
    address:""
    }
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const MinMayusPassRegEx=/^(?=.*[a-z])(?=.*[A-Z]).+$/
    const EspecialPassRegEx=/^[^!@#$%^&*]*(?:[!@#$%^&*][^!@#$%^&*]*)+$/
    const passwordRegEx= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,15}$/
    if(name.length<3 ){errors.name="El nombre es muy corto"}
    if( name.length>80){errors.name="El nombre es muy largo"}
    if(!emailRegEx.test(email)){errors.email="El correo no cumple el formato"}
    if(!MinMayusPassRegEx.test(password)){errors.password="La contraseña debe tener al menos una minuscula y una mayuscula"}
    if(!EspecialPassRegEx.test(password)){errors.password="Debe tener uno de los siguientes caracteres especiales: !@#$%^&*"
    }
    if(!passwordRegEx.test(password)){errors.password="No contiene numero"}
    //Falta verificar el resto de errores -dylan 
}