import React, { useEffect, useState } from 'react'
import { Profile } from '../../Components/profile/Profile'
import { IUser } from '../../interfaces/interfaces'

const userBase:IUser={
    name: "Jhon Doe",
    email: "JhonDoe@gmail.com",
    profile_image:"url",
    phone_number:"xxxxxxxx",
    birthdate: "dd/mm/yyyy",
    gender: "other",
    height: "unknown",
    //agregar en el form que sea ingreso numerico y que se le agregue un Cm al final-dylan
    weight:"unknown" ,
    //Lo mismo de arriba pero con Kg- dylan
    address: "unknown"
}

function DasboardUser():React.ReactElement {
    const [user,setUser]=useState(userBase)
    useEffect(()=>{ },[])
  return (
    <div className='mt-20'>
        <h1 className='m-20 text-2xl'>{user.name}</h1>
        <h1 className='m-20 text-2xl'>{user.email}</h1>
        <h1 className='m-20 text-2xl'>{user.phone_number}</h1>
        <h1 className='m-20 text-2xl'>{user.birthdate}</h1>
        <h1 className='m-20 text-2xl'>{user.gender}</h1>
        <h1 className='m-20 text-2xl'>{user.height}</h1>
    </div>
  )
}

export default DasboardUser