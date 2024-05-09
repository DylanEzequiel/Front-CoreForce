import React from 'react'

function MembershipUCard():React.ReactNode {
    //hacer funcion que al obtener user obtenga las membrecias y tome la correspondiente al user 
    const free="hover:outline hover:outline-gray-800 shadow-black shadow-md"
    const gold=" bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 hover:outline hover:outline-yellow-500  hover:shadow-xl hover:shadow-yellow-200"
    const platinum="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 hover:outline-gray-300 hover:outline  hover:shadow-xl hover:shadow-white"
    const bronce="bg-gradient-to-br from-yellow-500 via-yellow-600 to-orange-500 hover:outline hover:outline-amber-900  hover:shadow-lg hover:shadow-amber-500"
  return (
    <div className={`m-4 bg-white rounded-lg md:w-72 min-w-60 h-44 transition-all duration-100 ${platinum}`}>
        <h1>Nombre tata</h1>
        <p><b>Enjoy premium benefits. Priority customer support. Access to exclusive premium content</b></p>
    </div>
  )
}

export default MembershipUCard