import React from 'react'
import clienteAxios from "../../service/axiosService";
import PDFViewer from "../routineComp/RoutineComp";
import { useEffect, useState } from "react";


export interface IRoutine {
    id:string,
    name:string,
    type: "cardio" | "strenght" | "flexibility" | "hiit",
    pdf_url:string 
  }



function RoutinesContainer():React.ReactNode {
     // defino los estados que se utilizaran para tener el filtro, y las rutinas generales y a renderizar 
  const [routines,setRoutines]=useState<IRoutine[] | null>()
  const [rendRoutines,setRendRoutines]=useState<IRoutine[] | null>()
  const [filter,setFilter]=useState<string | null>("cardio")
  console.log(routines)

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

  return (
    <div>
            {/* muestro el header para filtrar las rutinas  */}
        <div className="pt-4 m-4">
            <label htmlFor="typeRoutine" className='m-2 font-bold text-2xl text-slate-800'>Type of the routine: </label>
                <select onChange={handleChange} name='typeRoutine' className='relative z-20 border-stroke focus:border-primary active:border-primary bg-transparent bg-white m-2 px-6 py-2 border rounded w-1/4 transition outline-none' >
                    <option disabled >Select the type</option>
                    <option>cardio</option>
                    <option>strenght</option>
                    <option>flexibility</option>
                    <option>hiit</option>
                </select>
                <button className="bg-primary m-2 px-6 py-2 rounded-sm w-full md:w-auto text-white" onClick={handleFilter}>Filter</button>
                <button className="bg-primary m-2 px-6 py-2 rounded-sm w-full md:w-auto text-white" onClick={()=>{setRendRoutines(routines)}}>Show All</button>

        </div>

            {/* si existe el estado rendRoutines renderizo estas mismas  */}
        <div className=''>
            {rendRoutines?
            rendRoutines.map((routine)=><PDFViewer {...routine} key={routine.id}></PDFViewer>
            ):null}
        </div>
    </div>
  )
}

export default RoutinesContainer