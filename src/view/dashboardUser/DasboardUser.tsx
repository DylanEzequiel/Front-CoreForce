import React, { useEffect, useState } from 'react'
import { IUser } from '../../interfaces/interfaces'
import UserCard from '../../Components/UserCard/UserCard'
import DataUserCard from '../../Components/UserCard/DataUserCard'
import axios from 'axios'

const userBase:IUser={
    name: "Jhon Doe",
    email: "JhonDoe@gmail.com",
    profile_image:"https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png",
    phoneNumber:"xxxxxxxx",
    birthdate: "1990-02-13T03:00:00.000Z",
    gender: "other",
    height: "unknown",
    //agregar en el form que sea ingreso numerico y que se le agregue un Cm al final-dylan
    weight:"unknown" ,
    //Lo mismo de arriba pero con Kg- dylan
    address: "unknown"
}

function DasboardUser():React.ReactElement {
    // Esto va a ser usado cuando con la BBDD recuperemos la info del user al montar la pag
    const apiUrl=import.meta.env.VITE_API_URL

    const [user,setUser]=useState(userBase)
    useEffect(()=>{
      const sessionUser= sessionStorage.getItem("UserId")
      const sessionToken= sessionStorage.getItem("UserToken")
      axios.get(`${apiUrl}/users/${sessionUser}`,{headers:{"Authorization":`Bearer ${sessionToken}`}})
      .then(res=>setUser(res.data))
      .catch(error=>console.error(error))
},[])
  return (
    <div className='flex flex-row flex-wrap justify-center my-24 h-screen'>
        <UserCard {...user}></UserCard>
        <DataUserCard {...user}></DataUserCard>
    </div>
  )
}

export default DasboardUser