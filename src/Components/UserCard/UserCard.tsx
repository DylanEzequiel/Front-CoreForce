import React from 'react'

interface IUserCard{
    name: string,
    email: string,
    profile_image:string,
    phone_number:string,
}


function UserCard(props:IUserCard):React.ReactNode {
    const {name,email,profile_image,phone_number} =props
  return (
    <div className='hover:outline hover:outline-gray-800 bg-white shadow-black shadow-md m-4 rounded-lg w-3/12 min-w-max h-max transition-all duration-100'>
        <div className='p-2'>
            <img src={profile_image} alt={name} className='m-auto h-40'></img>
        </div>
        <h2 className='mx-4 my-6 font-semibold text-gray-800 text-lg'>My Profile</h2>
        <p className='m-4 text-md'><b className='mr-4'>Name:</b>{name}</p>
        <hr />
        <p className='m-4 text-md'><b className='mr-4'>Email:</b>{email}</p>
        <hr />
        <p className='m-4 text-md'><b className='mr-4'>Phone:</b>{phone_number}</p>
        <hr />
        <button className='m-4 font-bold text-md text-red-600'>Log Out</button>
    </div>
  )
}

export default UserCard