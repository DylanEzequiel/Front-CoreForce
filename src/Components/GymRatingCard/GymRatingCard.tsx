import { Rating } from '@smastrom/react-rating'
import { Map, Marker } from 'pigeon-maps'
import '@smastrom/react-rating/style.css'
import React, { useState } from 'react'
import Swal from 'sweetalert2';

function GymRatingCard():React.ReactNode {
    const [rating, setRating] = useState(0) // Initial value
    function handleSubmit(){

        Swal.fire({
            title: "Submit your Github username",
            input: "text",
            inputAttributes: {
              autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Send",
            showLoaderOnConfirm: true
        })
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
                        <p className="my-2 font-semibold text-gray-500 text-left text-lg"> in a scale 1 to 5 rate our service in this gym</p>
                        <Rating className='h-24' style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
                        <button className='inline-block bg-secondary focus:ring-opacity-50 shadow-sm focus:shadow-sm hover:shadow-md mt-4 py-3 rounded-sm w-full font-semibold text-center text-lg text-white transition duration-200' onClick={handleSubmit}>Send Review</button>
                    </div>
                </div>
                {/* Galery of photos */}
            {/* <div className="flex flex-wrap -m-1 md:-m-2">
                
                <div className="flex flex-wrap w-full">

                    <div className="p-1 md:p-2 w-1/3">
                        <img
                        alt="gallery"
                        className="block rounded-lg w-full h-full object-center object-cover"
                        src="/img/workout1.jpg" />
                    </div>
                    
                    <div className="p-1 md:p-2 w-1/3">
                        <img
                        alt="gallery"
                        className="block rounded-lg w-full h-full object-center object-cover"
                        src="/img/workout2.jpg" />
                    </div>
                    
                    <div className="p-1 md:p-2 w-2/3">
                        <img
                        alt="gallery"
                        className="block rounded-lg w-full h-full object-center object-cover"
                        src="/img/workout3.jpg" />
                    </div>
                </div>
                    
            </div> */}
           

         </div>
  )
}

export default GymRatingCard