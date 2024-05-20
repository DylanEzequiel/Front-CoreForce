import React from 'react'
import GymRatingCard from '../../Components/GymRatingCard/GymRatingCard'

function RatePage():React.ReactElement {
    

  return (
    <div className='mx-10 my-16 pt-20 pb-28 lg:pb-36 min-h-full'>
        <h2 className="font-semibold text-5xl text-center text-slate-700">
        Rate our service
      </h2>
      <p className="my-2 font-semibold text-center text-gray-500 text-lg">
        We improve our service, based in the rating of our clients! 
      </p>
        {/* Aca voy a hacer el rate page para que se organice segun sucursal (y de paso poner la ubicación con google maps) tambien una función para que valide al usuario con una ventana pop up con un login o con ingresar el nombre del usuario*/}
        
        <div className=''>
           {/* mapa 1 */}
           <GymRatingCard />
          
        </div>
    </div>
  )
}

export default RatePage