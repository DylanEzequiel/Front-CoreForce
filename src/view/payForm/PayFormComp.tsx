
// import axios from 'axios'
import React, { useState } from 'react'
import MPPayform from '../../Components/PayForms/MP_Form/MPPayform'
import { SiMercadopago } from "react-icons/si";
import { IoIosCloseCircle } from 'react-icons/io';
import { GrStripe } from "react-icons/gr";
import STPayForm from '../../Components/PayForms/STForm/STPayForm';





function PayFormComp():React.ReactElement {
    const [display,setDisplay]=useState(true)
    const [Mpdisplay,setMpDisplay]=useState(false)
    const [Stdisplay,setStDisplay]=useState(false)


    function handleClose(){
      setDisplay(true)
      setMpDisplay(false)
      setStDisplay(false)
    }
    function handleClickMp(){
      setDisplay(!display)
      setMpDisplay(!Mpdisplay)
    }
    function handleClickSt(){
      setDisplay(!display)
      setStDisplay(!Stdisplay)
    }
  return (
    <div className='py-40 min-h-screen'>
      <h2 className="m-4 font-semibold text-5xl text-center text-slate-700">
        Add Your Card Information!
      </h2>

      { display&& <div className="border-gray-700 bg-gray-800 shadow m-auto md:mt-0 py-20 xl:p-0 border rounded-lg w-full sm:max-w-2xl">
        <h3 className="font-semibold text-5xl text-center text-slate-200">With wich pay method do you wanna continue?</h3>

        <div className='flex justify-around mt-4'>
          <button
          onClick={handleClickMp}
          className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:ring-opacity-75 shadow-md hover:shadow-lg m-4 px-6 py-3 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150">
          <SiMercadopago className='px-1 text-5xl' style={{"strokeWidth":0.5}} />Use MercadoPago</button>
        
          <button
          onClick={handleClickSt}
          className="flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 focus:ring-opacity-75 shadow-md hover:shadow-lg m-4 px-6 py-3 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-150">
          <GrStripe className='px-1 text-5xl' style={{"strokeWidth":0.5}}/> 
              Pay With Stripe
          </button>

        </div>
      </div>
          }
      {Mpdisplay&&
      <div className='m-auto md:mt-0 xl:p-0 w-full sm:max-w-2xl'>
        <IoIosCloseCircle className='m-2 hover:text-orange-700 select-none' onClick={handleClose}/>
        <MPPayform/>
      </div>
        }
        {Stdisplay &&
         <div className='m-auto md:mt-0 xl:p-0 w-full sm:max-w-2xl'>
           <IoIosCloseCircle className='m-2 hover:text-orange-700 select-none' onClick={handleClose}/>
  
            <STPayForm/>
          </div>
        }
    
    </div>
  )
}

export default PayFormComp