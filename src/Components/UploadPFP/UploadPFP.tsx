import axios from 'axios';
import React, { useState } from 'react'
import { FaFileUpload, FaPencilAlt } from "react-icons/fa";
import { IoIosCloseCircle } from 'react-icons/io';
import { toast } from 'react-toastify';
const UploadPFP = ():React.ReactNode => {
    // const cld = new Cloudinary({cloud: {cloudName: 'dwim6d20e'}});
    const cld_name=import.meta.env.VITE_CLD_NAME
    const preset_key=import.meta.env.VITE_CLD_PRESET
    const cldURL=import.meta.env.VITE_CLD_URL
    const [image,setImage]=useState()
    const [state,setState]=useState(false)

    function handleClick (){
      setState(!state)
      
    }


   async function handleSubmit(event:any){
        const file =event.target.files[0]
        console.log(file)
        const formPFP=new FormData();
        formPFP.append("file",file)
        formPFP.append("upload_preset",preset_key)
        await axios.post(`${cldURL}/${cld_name}/image/upload`,formPFP)
        .then(res=>{
          toast.success("Photo Updated!",{autoClose:1500})
          setTimeout(()=>{
            toast("You look nice! 😉",{autoClose:2000})
          },1000)
          setImage(res.data.secure_url)
          handleClick()
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