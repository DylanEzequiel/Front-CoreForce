import { Rating } from '@smastrom/react-rating'
import { Map, Marker } from 'pigeon-maps'
import '@smastrom/react-rating/style.css'
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import clienteAxios from '../../service/axiosService';
import { useAuthStore } from '../../store/auth/authStore';

function GymRatingCard():React.ReactNode {
    const [rating, setRating] = useState(0) // Initial value
    
    const { user } = useAuthStore((state) => ({
        userId: state.userId,
        user: state.userData,
      }));

// {
//   "rate": 4,
//   "description": "Muy bueno",
//   "userId": "4ee671f5-bdd5-4060-92f7-7eca1baa5b30"
// }


    async function handleSubmit(){

        try {
            await clienteAxios.post("/rate",{
                rate:rating,
                description:"",
                userId:user?.id,
            })
            Swal.fire({
                title:"Review Send!",
                icon:"success",
                text:`Rating: ${rating}`
            })
        } catch (error:any) {
            Swal.fire({
                icon:"error",
                title:"Ups! something went wrong",
                text:`${error.message}`
            })
        }
        setRating(0)
    }
  return (
         <div className='my-4'>
            <h3 className='font-bold text-2xl text-gray-700'>Gym Core Fancy</h3>
            <b className='font-semibold text-gray-500 text-lg'>Fancy street blublu</b>
            
             
                <div className='mb-44 w-full h-96'>
                    <Map  defaultCenter={[-34.758700954993344, -58.219587057419744]} defaultZoom={15}>
                        <Marker width={50} anchor={[-34.758700954993344, -58.219587057419744]} />
                    </Map>
                    <div className='h-20'>
                        <p className="my-2 font-semibold text-gray-500 text-left text-lg"> in a scale 1 to 5 rate our service</p>
                        <Rating className='h-24' style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
                        <button className='inline-block bg-secondary focus:ring-opacity-50 shadow-sm focus:shadow-sm hover:shadow-md mt-4 py-3 rounded-sm w-full font-semibold text-center text-lg text-white transition duration-200' onClick={handleSubmit}>Send Review</button>
                    </div>
                </div>
                
           

         </div>
  )
}

export default GymRatingCard