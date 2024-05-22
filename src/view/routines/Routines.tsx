import React from 'react'
import clienteAxios from '../../service/axiosService';

function Routines():React.ReactElement {
  function handleSubmit(event:any){
    console.log(event.target.files)
    const file =event.target.files[0]
      const formPFP=new FormData();
      formPFP.append("file",file)
      try {
        clienteAxios.post("/files/uploadPdf",{
            typeRoutine: "strength",
            routineName: "Full Body Strength Routine",
            file:formPFP
        })
      } catch (error) {
        console.log(error)
      }
  }

    return (
    <div className='m-96'>
        <input type="file" onChange={handleSubmit} />
        <button > enviar pdf</button>
    </div>
  )
}

export default Routines