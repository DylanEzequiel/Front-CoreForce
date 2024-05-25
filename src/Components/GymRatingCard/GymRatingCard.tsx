import { Rating } from '@smastrom/react-rating'
import { Map, Marker } from 'pigeon-maps'
import '@smastrom/react-rating/style.css'
import React, {  useState } from 'react'
import Swal from 'sweetalert2';
import clienteAxios from '../../service/axiosService';
import { useAuthStore } from '../../store/auth/authStore';

function GymRatingCard():React.ReactNode {
    const [rating, setRating] = useState(0) // Initial value
    const [review,setReview]=useState("")

    function handleChange(event:React.ChangeEvent<HTMLTextAreaElement>){
        setReview(event.target.value)
    }
    const { user } = useAuthStore((state) => ({
        userId: state.userId,
        user: state.userData,
      }));

    async function handleSubmit(){

        try {
            await clienteAxios.post("/rate",{
                rate:rating,
                description:review,
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
        setReview("")
    }
  return (
         <div className='m-auto my-4 w-3/4'>
          
            
             
                <div className='mb-44 w-full h-96'>
                    <Map  defaultCenter={[-34.758700954993344, -58.219587057419744]} defaultZoom={18}>
                        <Marker width={50} anchor={[-34.758700954993344, -58.219587057419744]} /> 
                        <Marker width={50} anchor={[-33.01932085726831, -71.54914252398466]} /> 
                        <Marker width={50} anchor={[-31.53565196885325, -68.52740774678087]} /> 
                        <Marker width={50} anchor={[-29.980549216054243, -58.30099683853361]} /> 
                        
                    </Map>
                    <div className='h-20'>
                        <p className="my-2 font-semibold text-gray-500 text-left text-lg"> in a scale 1 to 5 rate our service</p>
                        <Rating className='h-24' style={{ maxWidth: 250 }} value={rating} onChange={setRating} />

                        <textarea
                            id="review"
                            name="review"
                            rows={5}
                            onChange={handleChange}
                            className="border-2 border-gray-300 p-4 rounded-md w-full focus:outline-none resize-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Put your review "
                        ></textarea>

                        <button
                        disabled={rating===0 && review.length===0} 
                        className='inline-block bg-secondary focus:ring-opacity-50 shadow-sm focus:shadow-sm hover:shadow-md mt-4 py-3 rounded-sm w-full font-semibold text-center text-lg text-white transition duration-200' onClick={handleSubmit}>Send Review</button>
                    </div>
                </div>
         </div>
  )
}

export default GymRatingCard