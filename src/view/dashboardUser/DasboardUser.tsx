import React, { useEffect, useState } from 'react'
import { IUser } from '../../interfaces/interfaces'
import UserCard from '../../Components/UserCard/UserCard'
import DataUserCard from '../../Components/UserCard/DataUserCard'

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
    //Esto va a ser usado cuando con la BBDD recuperemos la info del user al montar la pag
    // const [user,setUser]=useState(userBase)
    // useEffect(()=>{ },[])

  return (
    <div className='flex flex-row flex-wrap justify-center my-24 h-screen'>
        <UserCard {...userBase}></UserCard>
        <DataUserCard {...userBase}></DataUserCard>
    </div>
  )
}

export default DasboardUser