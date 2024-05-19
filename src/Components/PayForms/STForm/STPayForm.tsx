import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
import { FaCcStripe } from 'react-icons/fa'
import clienteAxios from '../../../service/axiosService'
import LoadingIcons from 'react-loading-icons'
import { useAuthStore } from '../../../store/auth/authStore'

function STPayForm():React.ReactNode {
    const [loading, setLoading]=useState(false)
    const { userId } = useAuthStore((state) => ({
        userId: state.userId,
        user: state.userData,
      }));
      const membershipName=localStorage.getItem("MembershipName")
    const stripe = useStripe()
    const elements = useElements()
    async function handleSubmit(e:any){
        e.preventDefault()
         
        const {error, paymentMethod }=await stripe?.createPaymentMethod({
            type:"card",
            card: elements?.getElement(CardElement)
        })
        setLoading(!loading)
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
                    }
                })
                elements?.getElement(CardElement)?.clear()
                
            } catch (error) {
                console.log(error)    
            }
        }
        setLoading(!loading)
    }
  return (
    <div className="border-gray-700 bg-gray-800 shadow m-auto md:mt-0 xl:p-0 border rounded-lg w-full sm:max-w-2xl h-max">
        
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
            className="inline-block bg-secondary focus:ring-opacity-50 shadow-sm focus:shadow-sm hover:shadow-md mt-8 py-3 rounded-sm w-full font-semibold text-center text-lg text-white transition duration-200">
                {loading?<LoadingIcons.ThreeDots  className='m-auto'/>:"Pay"} 
          </button>
        </form>
    </div>
  )
}

export default STPayForm