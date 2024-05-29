import React, { useState } from 'react'
import clienteAxios from '../../service/axiosService';
import { FaRegFilePdf } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

function UploadRoutines():React.ReactElement {
    const navigate=useNavigate()
    const [file, setFile]=useState<File | null>(null)
    const [data,setData]=useState({
        "typeRoutine":"cardio",
        "routineName":""
    })
    console.log(data)
    console.log(file)

    function handleDataChange(event:any){
        setData({...data,
            [event.target.name]:event.target.value
    })

    }
    function handleChangeFile(event:any){
        setFile(event.target.files[0])
    }
  async function handleSubmit(event:any){
    event.preventDefault()
    if(file){
      
        const formPFP=new FormData();
        formPFP.append("file",file)
        formPFP.append("typeRoutine",data.typeRoutine)
        formPFP.append("routineName",data.routineName)

        try {
          const res=await clienteAxios.post("/files/uploadPdf",formPFP)
          console.log(res)
          Swal.fire({
            "title":"Routine Uploaded",
            "icon":"success"
          })
          navigate("/routines")
        } catch (error) {
          console.log(error)
        }
    }
  }

    return (
    <div className='flex flex-col'>
        <form onSubmit={handleSubmit} >
           <div className='flex flex-col'>
                <label htmlFor="typeRoutine" className='m-2 font-bold text-slate-800'>Type of the routine: 
                </label>
                    <select onChange={handleDataChange} name='typeRoutine' className='relative z-20 border-stroke focus:border-primary active:border-primary bg-transparent bg-white m-2 px-6 py-2 border rounded w-1/2 transition outline-none' >
                        <option disabled >Select the type</option>
                        <option>cardio</option>
                        <option>strength</option>
                        <option>flexibility</option>
                        <option>hiit</option>
                    </select>
                <label htmlFor="routineName" className='m-2 font-bold text-slate-800'>Name of the routine:</label>
                <input type="text" className='relative z-20 border-stroke focus:border-primary active:border-primary bg-transparent bg-white m-2 px-6 py-2 border rounded w-1/2 transition outline-none' placeholder='name of the routine' name='routineName' onChange={handleDataChange} />

           </div>

                <div
                  id="FileUpload"
                  className="block relative border-primary bg-gray my-4 mb-5 px-4 py-4 sm:py-7 border border-dashed rounded w-full cursor-pointer appearance-none">
                  <input
                    type="file"
                    onChange={handleChangeFile}
                    className="z-50 absolute inset-0 opacity-0 m-0 p-0 w-full h-full cursor-pointer outline-none"/>

                    {!file&&
                    <div className="flex flex-col justify-center items-center space-y-3">
                    <span className="flex justify-center items-center border-stroke dark:border-strokedark bg-white dark:bg-boxdark border rounded-full w-10 h-10">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                          fill="#3C50E0"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                          fill="#3C50E0"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                          fill="#3C50E0"
                        />
                      </svg>
                    </span>
                    <p>
                      <span className="text-primary">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="mt-1.5">PDF</p>
                    <p>(max, 800 X 800px)</p>
                    </div>
                    }
                    {file &&
                        <div className="flex flex-col justify-center items-center space-y-3">
                            <p>name: {file.name}</p>
                            <p>type: {file.type}</p>
                            <FaRegFilePdf size={60} />
                        </div>
                    }
                </div>
                
            <button type='submit' className='bg-primary px-6 py-2 rounded-sm w-full md:w-auto text-white'>Send routine</button>
        </form>
    </div>
  )
}

export default UploadRoutines