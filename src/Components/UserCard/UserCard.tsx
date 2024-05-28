import React, { useEffect, useState } from 'react'
// import UploadPFP from '../UploadPFP/UploadPFP'
import { IUser } from '../../interfaces/interfaces'
import { useNavigate } from 'react-router'




function UserCard(props:IUser):React.ReactNode {
    const {name,email,profile_image,phoneNumber} =props
  
    const [userImage,setUserImage]=useState(profile_image)
  
    
    useEffect(()=>{
      setUserImage(profile_image)
    },[profile_image])


    const navigate =useNavigate()
    const HandleLogout=()=>{
      sessionStorage.clear()
      navigate("/")
    }

    // function handleSetUserImage(prop:string){
    //   setUserImage(prop)
    // }

  return (
    <div className='hover:outline hover:outline-gray-800 bg-white shadow-black shadow-md m-4 rounded-lg w-3/12 min-w-max h-max transition-all duration-100'>
        <div className='p-2'>
            <img src={userImage} alt={name} className='m-auto h-40'></img>
        {/* <UploadPFP setUserImage={handleSetUserImage} /> */}
        </div>
        <h2 className='mx-4 my-6 font-semibold text-gray-800 text-lg'>My Profile</h2>
        <p className='m-4 text-md'><b className='mr-4'>Name:</b>{name}</p>
        <hr />
        <p className='m-4 text-md'><b className='mr-4'>Email:</b>{email}</p>
        <hr />
        <p className='m-4 text-md'><b className='mr-4'>Phone:</b>{phoneNumber}</p>
        <hr />
        <button className='m-4 font-bold text-md text-red-600' onClick={HandleLogout}>Log Out</button>
    </div>
  )
}

export default UserCard