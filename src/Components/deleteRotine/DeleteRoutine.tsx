import React from 'react'
import { useAuthStore } from '../../store/auth/authStore'
import { FaTrashCan } from 'react-icons/fa6'
import { IRoutine } from '../RoutinesContainer/RoutinesContainer'
import clienteAxios from '../../service/axiosService'
import Swal from 'sweetalert2'
import { useRoutineStore } from '../../store/routines/RoutineStore'

function DeleteRoutine(routine:IRoutine):React.ReactElement {
    const {user,userToken}=useAuthStore((state)=>({
        user:state.userData,
        userToken:state.token
    }))

    const { fetchRoutines } = useRoutineStore();

    function handleClick (){
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
              if (result.isConfirmed) {
                clienteAxios.delete(`/trainers/routine/${routine.id}`,{headers:{"Authorization":`Bearer ${userToken}`}})
                
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              fetchRoutines();
    }})
    }

    return (
    <div>

        {user?.role==="trainer" ? 
        <div onClick={handleClick} className='float-right flex hover:bg-orange-500 rounded-md w-10 h-10'>
            <FaTrashCan className='m-auto' size={30} /> 
        </div>

        :null }
    </div>
  )
}

export default DeleteRoutine