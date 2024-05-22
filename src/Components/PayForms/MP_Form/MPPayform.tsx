import React, { useState } from 'react'
import {
    initMercadoPago,
    createCardToken,
    CardNumber,
    SecurityCode,
    ExpirationDate,
  } from "@mercadopago/sdk-react";
  import { FaCcMastercard } from "react-icons/fa";
  import Swal from 'sweetalert2';
import { useAuthStore } from '../../../store/auth/authStore';
import clienteAxios from '../../../service/axiosService';
import { SiMercadopago } from 'react-icons/si';
import LoadingIcons from 'react-loading-icons';
import { useNavigate } from 'react-router';

//! NOT USED (only for reference)


initMercadoPago("mercado api");

function MPPayform():React.ReactElement {
  const [loading, setLoading]=useState(false)
    const { userId } = useAuthStore((state) => ({
        userId: state.userId,
        user: state.userData,
      }));
    const membershipId=localStorage.getItem("MembershipId")
    const navigate = useNavigate()
    const { fetchUserData  } = useAuthStore();
    
    
     const handleSubmit=async(e:any)=>{
      e.preventDefault()
      const cardToken = async () => {
        const response = await createCardToken({
          cardholderName: "APRO",
          identificationType: "DNI",
          identificationNumber: "12345678",
        });
        console.log(response?.id)
        setLoading(!loading)
        if (response?.id) {
          clienteAxios
            .post("/payments/subscription", {
              userId,
              membershipId: membershipId,
              card_token_id: response?.id,
            })
            .then((res) => {
              Swal.fire({
                icon: "success",
                title: "Suscription complete!",
                text: "Redirecting",
              });
              setLoading(!loading)
              fetchUserData();
              navigate("/profile")
              console.log(res);
            })
            .catch((err) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
              console.log(err);
              setLoading(!loading)
            });
        }

          // 5031 7557 3453 0604
          // 11/25
    
      };
      cardToken()
     }
  return (
    <div className="border-gray-700 bg-gray-800 shadow m-auto md:mt-0 xl:p-0 border rounded-lg w-full sm:max-w-2xl">
         <SiMercadopago className='m-auto px-1 text-7xl text-white' style={{"strokeWidth":0.5}} />
        <form onSubmit={handleSubmit} className='m-auto'>

            <div className='p-4'>
                <label className='font-bold text-lg text-white' >Name:</label>
                <input type="text" placeholder='Name' className='block bg-white w-full h-8'/>
            </div>
            <div className='p-4'>
                <label className='font-bold text-lg text-white' >ID:</label>
                <input type="text" placeholder='ID number' className='block bg-white w-full h-8'/>
            </div>
            {/* input 1  */}
           <div>
            <label className='mx-4 font-bold text-lg text-white'><FaCcMastercard className='inline' size={40}/> Card Number:</label>
              <div className='bg-white mx-4 h-10'>
                <CardNumber   placeholder="Card Number" style={{"height":"40px" , "margin":"2px"}} />
              </div>
           </div>
            {/* input 2 */}

            <div className='flex justify-between'>
              <div className='m-4 w-2/5 h-10'>
                <label htmlFor="" className='font-bold text-lg text-white'>Security Code:</label>
                <div className='bg-white h-10'>
                  <SecurityCode  placeholder="Security Code" style={{"height":"40px" , "margin":"2px"}}/>
                </div>
              </div>

              {/* input 3 */}
              <div className='m-4 w-2/5 h-10'>
                <label htmlFor="" className='font-bold text-lg text-white'>Expiration Date:</label>
                <div className='bg-white h-10'>
                  <ExpirationDate placeholder="Expiration Date" mode="short" style={{"height":"40px" , "margin":"2px"}} />
                </div>
              </div>

            </div>
            <button
            type="submit"
            disabled={loading}
            className="inline-block bg-secondary focus:ring-opacity-50 shadow-sm focus:shadow-sm hover:shadow-md mt-8 py-3 rounded-sm w-full font-semibold text-center text-lg text-white transition duration-200">
            {loading?<LoadingIcons.ThreeDots  className='m-auto'/>:"Pay"} 
          </button>

        </form>
      </div>
  )
}

export default MPPayform