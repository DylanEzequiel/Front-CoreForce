import React from 'react'
import PDFViewer from "../routineComp/RoutineComp";
import { useEffect, useState } from "react";
import { useRoutineStore } from '../../store/routines/RoutineStore';


export interface IRoutine {
    id:string,
    name:string,
    type: "cardio" | "strenght" | "flexibility" | "hiit",
    pdf_url:string 
  }



function RoutinesContainer():React.ReactNode {
     // defino los estados que se utilizaran para tener el filtro, y las rutinas generales y a renderizar 
  // const [routines,setRoutines]=useState<IRoutine[] | null>()
  const [rendRoutines,setRendRoutines]=useState<IRoutine[] | null>()
  const [filter,setFilter]=useState<string | null>(null)
  
  const { routines, fetchRoutines } = useRoutineStore();
  console.log(routines)

  //utilizo un use effect para obtener todas las rutinas
  useEffect(()=>{
   fetchRoutines()
},[fetchRoutines])

  useEffect(() => {
    applyFilter();
  }, [routines, filter]);

  function applyFilter() {
    if (routines) {
      if (filter) {
        setRendRoutines(routines.filter(routine => routine.type === filter));
      } else {
        setRendRoutines(routines);
      }
    }
  }

  //defino los handles para los cambios (poner el filtro y aplicarlo en las rend cards)
  function handleChange (e:React.ChangeEvent<HTMLSelectElement>){
    setFilter(e.target.value)
  }

  function handleShowAll() {
    setRendRoutines(routines);
    setFilter(null);
  }

  return (
    <div>
            {/* muestro el header para filtrar las rutinas  */}
        <div className="pt-4 m-4 ">
            <label htmlFor="typeRoutine" className='m-2 font-bold text-2xl text-slate-800'>Routine type: </label>
                <select onChange={handleChange} name='typeRoutine' className='relative z-20 border-stroke focus:border-primary active:border-primary bg-transparent bg-white m-2 px-6 py-2 border rounded w-1/4 transition outline-none' >
                    <option disabled >Select the type</option>
                    <option>cardio</option>
                    <option>strength</option>
                    <option>flexibility</option>
                    <option>hiit</option>
                </select>
                <button className="bg-primary m-2 px-6 py-2 rounded-sm w-full md:w-auto text-white" onClick={handleShowAll}>Show All</button>

        </div>

            {/* si existe el estado rendRoutines renderizo estas mismas  */}
        <div className=''>
            {rendRoutines?
            rendRoutines.map((routine)=><PDFViewer {...routine} key={routine.id}></PDFViewer>
            ):(null )}
        </div>
    </div>
  )
}

export default RoutinesContainer