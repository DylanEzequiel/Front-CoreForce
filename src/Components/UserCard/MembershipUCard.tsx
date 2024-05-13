
import React from 'react'
import { MembershipsStyles } from '../../helpers/MembershipsStyles/MembershipsStyles'


function MembershipUCard(props:{name:string}):React.ReactNode {

  //obtengo el nombre de la membresia desde FatherComp
    const memberName=props.name
   //!Mostrar historial de pagos

    const getStyles= (name:string)=>{
      return MembershipsStyles.find(element=>element.name===name)
    }

    const style= getStyles(memberName)
  return (
    <div className={`m-4 bg-white rounded-lg md:w-72 min-w-60 h-44 transition-all duration-100 ${style?.styles}`}>
        <h1 className='p-3 h-7 font-semibold text-xl'> {style?.name}</h1>
        <p className='p-3'><b>{style?.description}</b></p>
    </div>
  )
}

export default MembershipUCard