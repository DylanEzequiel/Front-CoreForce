import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
import { FaCcStripe } from 'react-icons/fa'
import clienteAxios from '../../../service/axiosService'
import LoadingIcons from 'react-loading-icons'
import { useAuthStore } from '../../../store/auth/authStore'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'

function STPayForm():React.ReactNode {
  // defino estados y funciones  
  const [loading, setLoading]=useState(false)
    const { userId } = useAuthStore((state) => ({
        userId: state.userId,
        user: state.userData,
      }));
  //defino hooks
    const navigate = useNavigate()
    const stripe = useStripe()
    const elements = useElements()

    const { fetchUserData  } = useAuthStore();
    const membershipName=localStorage.getItem("MembershipName")

    //defino  handle submit
    async function handleSubmit(e:any){
        e.preventDefault()
         
        const {error, paymentMethod }=await stripe!.createPaymentMethod({
            type:"card",
            card: elements!.getElement(CardElement)!
        })
        setLoading(true)
        if(!error){
            console.log(paymentMethod)
            try {
                await clienteAxios.post("stripe/checkout",{
                    stripe:{
                        id:paymentMethod.id,
                        amount:2000,
                    },
                    userData:{
                        userId,
                        membershipName
                    }})
                    fetchUserData();
                    Swal.fire({
                      icon: "success",
                      title: "Suscription complete!",
                      text: "Redirecting",
                    });
                    setLoading(false)
                    elements?.getElement(CardElement)?.clear()
                    navigate("/user/profile")
            } 
            catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
              console.log(error);
              setLoading(false)
}
        }
        setLoading(false)
    }


  return (
    <div className="border-gray-700 bg-gray-800 shadow m-auto md:mt-0 xl:p-0 border rounded-lg w-full sm:max-w-2xl h-full">
        
        <FaCcStripe className='m-auto px-1 text-7xl text-white' style={{"strokeWidth":0.5}} />
        <form onSubmit={handleSubmit} >
            <div className='p-4'>
                <label className='font-bold text-lg text-white' >Name:</label>
                <input type="text" placeholder='Name' className='block bg-white w-full h-8'/>
            </div>
            <div className='p-4'>
                <label className='font-bold text-lg text-white' >ID:</label>
                <input type="text" placeholder='ID number' className='block bg-white w-full h-8'/>
            </div>
            <label className='m-4 font-bold text-lg text-white' >Credit or debit card:</label>
            <CardElement className='block bg-white m-4 h-8'/>
            <button
            type="submit"
            disabled={loading}
            className="inline-block bg-secondary focus:ring-opacity-50 shadow-sm focus:shadow-sm hover:shadow-md mt-8 py-3 rounded-sm w-full font-semibold text-center text-lg text-white transition duration-200">
                {loading? <LoadingIcons.ThreeDots  className='m-auto'/> :"Pay"} 
          </button>
        </form>
    </div>
  )
}

export default STPayForm