import React from 'react'
import { toast } from 'react-toastify';
import clienteAxios from '../../service/axiosService';
import { useAuthStore } from '../../store/auth/authStore';



const UploadPFP = ():React.ReactNode => {
  const { user } = useAuthStore((state) => ({
    user: state.userData,
  }));
  const { fetchUserData } = useAuthStore();
  const formPFP=new FormData()

    const sessionUser= sessionStorage.getItem("UserId")


    function handleChange(event:any){
      const file =event.target.files[0]
      formPFP.append("file",file)
    }

    async function handleSubmit(event:any) {
      event.preventDefault()
      await clienteAxios.post(`/files/uploadImage/${sessionUser}`,formPFP)
      .then(res=>{
        console.log(res.data)
        toast.success("Photo Updated!",{autoClose:1500})
        setTimeout(()=>{
          toast("You look nice! 😉",{autoClose:2000})
        },1000)
        fetchUserData();
      })
      
        .catch(err=>{
          toast.error("Ups! something went wrong")
        console.error(err)})
    }

  return (
    <div className='inline hover:bg-slate-400 m-4'>
      
          
{/*            
           <div className='m-4'>
              <label htmlFor="image" >
                 <h4 className='m-2'>Select your profile Picture</h4>
                 <FaFileUpload className='justify-center bg-orange-400 m-auto rounded-sm w-12 h-6' />
                <input className='hidden' type='file' id='image' name='image' onChange={handleSubmit}/>
              </label>
           </div> */}
        
        <div className="p-7">
              <form action="#" onSubmit={handleSubmit}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full w-14 h-14">
                    <img src={user!.profile_image} alt="User" />
                  </div>
                  <div>
                    <span className="mb-1.5 text-black">Edit your photo</span>
                  </div>
                </div>

                <div
                  id="FileUpload"
                  className="block relative border-primary bg-gray mb-5 px-4 py-4 sm:py-7 border border-dashed rounded w-full cursor-pointer appearance-none"
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className="z-50 absolute inset-0 opacity-0 m-0 p-0 w-full h-full cursor-pointer outline-none"
                  />
                  <div className="flex flex-col justify-center items-center space-y-3">
                    <span className="flex justify-center items-center border-stroke dark:border-strokedark bg-white dark:bg-boxdark border rounded-full w-10 h-10">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
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
                    <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                    <p>(max, 800 X 800px)</p>
                  </div>
                </div>

                <div className="flex justify-end mt-10">
                  <button 
                  type='submit'
                  className="bg-primary px-6 py-2 rounded-sm w-full md:w-auto text-white">
                    Save
                  </button>
                </div>
              </form>
            </div>

    </div>
  );
};


export default UploadPFP