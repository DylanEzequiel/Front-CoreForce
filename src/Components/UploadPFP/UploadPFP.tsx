import axios from 'axios';
import React, { useState } from 'react'
import { FaFileUpload, FaPencilAlt } from "react-icons/fa";
import { IoIosCloseCircle } from 'react-icons/io';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
const UploadPFP = ():React.ReactNode => {
    const [state,setState]=useState(false)
    const sessionUser= sessionStorage.getItem("UserId")
    const navigate=useNavigate()
    function handleClick (){
      setState(!state)
    }


   async function handleSubmit(event:any){
        const file =event.target.files[0]
        const formPFP=new FormData();
        formPFP.append("file",file)
        console.log(formPFP)
        await axios.post(`http://localhost:3000/files/uploadImage/${sessionUser}`,formPFP)
        .then(res=>{
          toast.success("Photo Updated!",{autoClose:1500})
          setTimeout(()=>{
            toast("You look nice! 😉",{autoClose:2000})
          },1000)
          handleClick()
          navigate("/profile")
          return res.data.secure_url
        })
       
        .catch(err=>console.error(err))
    }
  return (
    <div className='inline hover:bg-slate-400 m-4'>
        <FaPencilAlt className='hover:text-black transition-colors' onClick={handleClick}/>
        {state&& 
          <div className='fixed border-2 border-slate-700 bg-white rounded-md h-max'>
            <IoIosCloseCircle className='m-2 font-bold hover:text-orange-700 select-none' onClick={handleClick}/>
           <div className='m-4'>
              <label htmlFor="image" >
                 <h4 className='m-2'>Select your profile Picture</h4>
                 <FaFileUpload className='justify-center bg-orange-400 m-auto rounded-sm w-12 h-6' />
                <input className='hidden' type='file' id='image' name='image' onChange={handleSubmit}/>
              </label>
           </div>
          </div>
        }

    </div>
  );
};


export default UploadPFP