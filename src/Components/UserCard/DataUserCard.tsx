import React from 'react'
import { IUser } from '../../interfaces/interfaces'
import MembershipUCard from './MembershipUCard';


function DataUserCard(props:IUser):React.ReactNode {
    const {address,weight,height,birthdate,gender,user_membership}=props
    const fecha = new Date(birthdate);
    const fechaFormateada = fecha.toISOString().split('T')[0];


  return (
    <div>
        <div>
            <MembershipUCard name={user_membership[1 ].membership.name}/>
        </div>
        <div className='hover:outline hover:outline-gray-800 bg-white shadow-black shadow-md m-4 p- rounded-lg md:w-72 min-w-60 h-max transition-all duration-100'>
            <h3 className='mx-4 my-2 font-semibold text-gray-800 text-lg'>My Info</h3>
            <hr />
            <p className='m-4 text-md'><b className='mr-4'>Birthdate: </b>{fechaFormateada}</p>
            <p className='m-4 text-md'><b className='mr-4'>Gender: </b>{gender}</p>
            <p className='m-4 text-md'><b className='mr-4'>Address: </b>{address}</p>
            <p className='m-4 text-md'><b className='mr-4'>Weight: </b>{weight}-Kg</p>
            <p className='m-4 text-md'><b className='mr-4'>Height: </b>{height}-Cm</p>
        </div>
    </div>
  )
}

export default DataUserCard