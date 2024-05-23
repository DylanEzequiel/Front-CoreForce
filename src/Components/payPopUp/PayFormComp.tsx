
// import axios from 'axios'
import React, { useState } from 'react'
import { SiMercadopago } from "react-icons/si";
import { GrStripe } from "react-icons/gr";
import clienteAxios from '../../service/axiosService';
import { useNavigate } from 'react-router';





function PayPopUp():React.ReactElement {
    const [display,setDisplay]=useState(true)
    const navigate = useNavigate()
    const membershipId=localStorage.getItem("MembershipId")
    


    async function handleClickMp(){
      const res:{data:string} =await clienteAxios.get(`/payments/${membershipId}`)
      console.log(res)
      window.location.href = res.data
    }



    function handleClickSt(){
      setDisplay(!display)
      navigate("/user/payment")
    }
  return (
    <div className='z-30 fixed inset-0 m-auto w-1/2 min-w-80 h-max md:h-2/6 lg:h-1/2' >
      
        <div className="z-50 border-gray-700 bg-gray-800 shadow m-auto md:mt-0 p-4 xl:p-0 border rounded-lg w-full sm:max-w-2xl h-max">
          <h3 className="font-semibold text-2xl text-center text-slate-200">With wich pay method do you wanna continue?</h3>

          <div className='flex flex-row flex-wrap justify-around mt-4'>
            <button
            onClick={handleClickMp}
            className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:ring-opacity-75 shadow-md hover:shadow-lg m-4 px-6 py-3 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-400 h-auto transition duration-150">
            <SiMercadopago className='px-1 text-5xl' style={{"strokeWidth":0.5}} />Use MercadoPago</button>
          
            <button
            onClick={handleClickSt}
            className="flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 focus:ring-opacity-75 shadow-md hover:shadow-lg m-4 px-6 py-3 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-150">
            <GrStripe className='px-1 text-5xl' style={{"strokeWidth":0.5}}/> 
                Pay With Stripe
            </button>
          </div>
      
        </div>
      
          
    
    </div>
  )
}

export default PayPopUp