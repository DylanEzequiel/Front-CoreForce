import React, { useEffect, useState } from 'react'
import clienteAxios from '../../service/axiosService'
import { IRoutine } from '../../Components/RoutinesContainer/RoutinesContainer'
import { useAuthStore } from '../../store/auth/authStore'
import Swal from 'sweetalert2'

function AddStudentRoutine({id}:any):React.ReactElement {
  const {userToken}=useAuthStore((state)=>({
      userToken:state.token
  }))
  // Logica de renderizado y filtros
    const [routines,setRoutines]=useState<IRoutine[] | null>()
    const [rendRoutines,setRendRoutines]=useState<IRoutine[] | null>()
    const [filter,setFilter]=useState<string>("cardio")

    //utilizo un use effect para obtener todas las rutinas
    useEffect(()=>{
      async function getRoutines() {
        try {
          const res=await clienteAxios.get("/files/routines")
          setRoutines(res.data)
          setRendRoutines(res.data)
        } catch (error) {
          console.log(error)
        }
      }
      getRoutines()
    },[])
  
    //defino los handles para los cambios (poner el filtro y aplicarlo en las rend cards)
    function handleChange (e:any){
      setFilter(e.target.value)
    }
  
    function handleFilter(){
      const filt=routines?.filter(rutine=>rutine.type==filter)
      setRendRoutines(filt)
    }

    async function handleSubmit(idRoutine:string){
      const body={
        userId:id
      }
      // params id rutina, body id usuario headers Authorizarion woken
      try {
        const res=await clienteAxios.post(`/trainers/students/routine/${idRoutine}`,body,{headers:{"Authorization":`Bearer ${userToken}`}})
        console.log(res)
        Swal.fire({
          title:"Success!",
          icon:"success",
          text:"Routine added correctly"
        })
      } catch (error:any) {
        Swal.fire({
          "title":"Error",
          "icon":"error",
          text:`${error.message}`
        })
      }
    }
  
  return (
    <div>
        <div className="">
            <label htmlFor="typeRoutine" className='m-2 font-bold text-2xl text-slate-800'>Type of the routine: </label>
                <select onChange={handleChange} name='typeRoutine' className='relative z-20 border-stroke focus:border-primary active:border-primary bg-transparent bg-white m-2 px-6 py-2 border rounded w-1/4 transition outline-none' >
                    <option disabled >Select the type</option>
                    <option>cardio</option>
                    <option>strength</option>
                    <option>flexibility</option>
                    <option>hiit</option>
                </select>
                <button className="bg-primary m-2 px-6 py-2 rounded-sm w-full md:w-auto text-white" onClick={handleFilter}>Filter</button>
                <button className="bg-primary m-2 px-6 py-2 rounded-sm w-full md:w-auto text-white" onClick={()=>{setRendRoutines(routines)}}>Show All</button>

        </div>
         <div className='flex flex-row flex-wrap justify-evenly'>
            {rendRoutines?
            rendRoutines.map((routine)=>
                <div key={routine.id} className='bg-slate-200 m-2 p-6 rounded-sm min-w-16 h-2/5'>
                    <h4 className='font-semibold text-3xl text-gray-800'>{routine.name}</h4>
                    <p className='font-bold text-lg text-secondary tracking-wider'>{routine.type}</p>
                    <button onClick={()=>handleSubmit(routine.id)} className='block bg-green-700 active:bg-green-900 px-6 py-3 rounded-md w-full font-bold text-center text-white text-xl'>Add Routine</button>
                </div>
            ):null}
        </div>
    </div>
  )
}

export default AddStudentRoutine