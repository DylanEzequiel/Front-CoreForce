import React, { useEffect, useState } from 'react'
import { IUser } from '../../interfaces/interfaces'
import UserCard from '../../Components/UserCard/UserCard'
import DataUserCard from '../../Components/UserCard/DataUserCard'
import axios from 'axios'

const userBase:IUser={
    name: "Loading..",
    email: "Loading...",
    profile_image:"https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg",
    phoneNumber:"Loading...",
    birthdate: "1990-02-13T03:00:00.000Z",
    gender: "other",
    height: "",
    //agregar en el form que sea ingreso numerico y que se le agregue un Cm al final-dylan
    weight:"" ,
    user_membership:[{membership:{name:"Free"}}],
    //Lo mismo de arriba pero con Kg- dylan
    address: "Loading..."
}

function DasboardUser():React.ReactElement {
    // Esto va a ser usado cuando con la BBDD recuperemos la info del user al montar la pag
    const apiUrl=import.meta.env.VITE_API_URL
    const [userD,setUserD]=useState(userBase)
    useEffect(()=>{
      const sessionUser= sessionStorage.getItem("UserId")
      const sessionToken= sessionStorage.getItem("UserToken")
      axios.get(`${apiUrl}/users/${sessionUser}`,{headers:{"Authorization":`Bearer ${sessionToken}`}})
      .then(res=>setUserD(res.data))
      .catch(error=>console.error(error))
},[])



  return (
    <div className='flex flex-row flex-wrap justify-center my-24 h-screen'>
        <UserCard {...userD}></UserCard>
        <DataUserCard {...userD}></DataUserCard>
    </div>
  )
}

export default DasboardUser