import React, { useEffect, useState } from 'react'
import clienteAxios from '../../service/axiosService'
import { useAuthStore } from '../../store/auth/authStore';
import { IUserComplete } from '../../interfaces/interfaces';
import { formatDate } from '../../helpers/date/formatDate';
import { RiUserAddFill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

function AddStudent():React.ReactElement {
    
    
    
    const { userId,userToken } = useAuthStore((state) => ({
        userId: state.userId,
        userToken: state.token
    }));
    const navigate=useNavigate()
    console.log(`trainer token: ${userId}`)
    const [student,setStudent]=useState<string>()
    const [studentsList,setStudentsList]=useState<IUserComplete[]|null>(null)


    useEffect(()=>{
        //funcion para ver a los usuarios
        async function get(){
            const res=await clienteAxios.get("/trainers/students",{headers:{"Authorization":`Bearer ${userToken}`}})
            console.log(res.data)
            setStudentsList(res.data)}
        get()
    },[])
    async function handleSubmit(){

        try {
            const body={userId:student}
            
            console.log(body)
            const data=await clienteAxios.post(`/trainers/students/${userId}`,body,{headers:{"Authorization":`Bearer ${userToken}`}})
            console.log(data)
            navigate("/user/trainer/student-list")
        } catch (error) {
            console.log(error)
        }
        
    }
    function handleStudent(studentId:string){
        setStudent(studentId)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#85f702",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add student"
          }).then((result) => {
            if (result.isConfirmed) {
                handleSubmit()
                Swal.fire({
                    title: "Success!",
                    text: "Student added",
                    icon: "success"
                });
            }
        });
    }
  return (
    <div>
        <div className='max-w-full overflow-x-auto'>
            <table>
                    <thead>
                    <tr className="bg-gray-200 text-left">
                    <th className="px-4 py-4 xl:pl-11 min-w-[220px] font-medium text-black">
                        Image
                    </th>
                    <th className="px-4 py-4 min-w-[150px] font-medium text-black">
                        Name
                    </th>
                    <th className="px-4 py-4 min-w-[150px] font-medium text-black">
                        Email
                    </th>
                    <th className="px-4 py-4 min-w-[150px] font-medium text-black">
                        Adress
                    </th>
                    <th className="px-4 py-4 min-w-[150px] font-medium text-black">
                        Phone
                    </th>
                    <th className="px-4 py-4 min-w-[150px] font-medium text-black">
                        Birthday
                    </th>
                    <th className="px-4 py-4 min-w-[150px] font-medium text-black">
                        Gender
                    </th>
                    <th className="px-4 py-4 min-w-[150px] font-medium text-black">
                        Height
                    </th>
                    <th className="px-4 py-4 min-w-[150px] font-medium text-black">
                        Weight
                    </th>
                    <th className="px-4 py-4 font-medium text-black">Action</th>
                    </tr>
                    </thead>
                <tbody>
                        {studentsList?.map((user,index) =>(
                            <tr key={index}>
                                <td className="border-[#eee] px-4 pl-9 xl:pl-11 border-b">
                        <img
                            src={user.profile_image!}
                            className="rounded-full w-10 h-10"
                            />
                        </td>
                            <td className="border-[#eee] px-4 py-5 border-b">
                            <h5 className="font-medium text-black">{user.name}</h5>
                            </td>

                            <td className="border-[#eee] px-4 py-5 border-b">
                            <p className="text-black">{user.email}</p>
                            </td>

                            <td className="border-[#eee] px-4 py-5 border-b">
                            <p className="text-black">{user.address}</p>
                            </td>

                            <td className="border-[#eee] px-4 py-5 border-b">
                            <p className="text-black">{user.phoneNumber}</p>
                            </td>

                            <td className="border-[#eee] px-4 py-5 border-b">
                            <p className="text-black">{formatDate(user.birthdate)}</p>
                            </td>

                            <td className="border-[#eee] px-4 py-5 border-b">
                            <p className="text-black">{user.gender}</p>
                            </td>

                            <td className="border-[#eee] dark:border-strokedark px-4 py-5 border-b">
                            <p className="text-black">
                                {user.height ? user.height+" cm" : "0 cm"}
                            </p>
                            </td>

                            <td className="border-[#eee] dark:border-strokedark px-4 py-5 border-b">
                            <p className="text-black">
                                {user.weight ? user.weight+" kg" : "0 kg"}
                            </p>
                            </td>

                            <td className="border-[#eee] dark:border-strokedark px-4 py-5 border-b">
                            <div onClick={()=>{handleStudent(user.id)}} className="flex items-center space-x-3.5 hover:bg-green-500 p-2 rounded-md transition-colors duration-75 hover:cursor-pointer select-none ease-in">
                            
                                <RiUserAddFill />
                                <b>Add student</b>
                            
                            </div>
                            </td>
                        </tr>
                        ))}
                </tbody>
                        
            </table>
        </div>
    {/* <button className='bg-primary hover:bg-slate-950 m-4 px-6 py-2 rounded-sm w-full md:w-auto text-white transition-colors duration-75 ease-in' onClick={handleSubmit}>Enviar</button> */}
    </div>
  )
}

export default AddStudent