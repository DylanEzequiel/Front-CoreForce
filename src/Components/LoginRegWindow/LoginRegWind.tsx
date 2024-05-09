import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginRegWind():React.ReactNode {
    const [display,setDisplay]=useState(false)
    function handleClick():void{
        setDisplay(!display)
    }
  return (
    <div className={`m-3 text-center w-12 hover:cursor-pointer rounded-t ${display === true? "bg-slate-400 hover:cursor-default":null}`} >
        <b onClick={handleClick} >
        User
        {display? <div className='z-50 fixed bg-slate-400 p-3 rounded-r-md rounded-bl-md'>
        <ul className={ `${display === true? "bg-slate-400 hover:cursor-default":null}`}>
            <li className='hover:bg-slate-500 px-4 py-2 duration-300'>
                <Link to="/auth/login">Login</Link>
            </li>
            <hr />
            <li className='hover:bg-slate-500 px-4 py-2 duration-300'>
              <Link to="/auth/register">SignUp</Link>
            </li>
        </ul>
        {/* display hide-dylan */}
            <div className='top-0 right-0 left-0 -z-50 fixed w-full min-h-screen hover:cursor-default'></div>
        </div>:null }
        </b>
    </div>
  )
}

export default LoginRegWind