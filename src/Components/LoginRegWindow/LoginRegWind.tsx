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
        {display? <div className='fixed z-50 p-3 bg-slate-400 rounded-r-md rounded-bl-md'>
        <ul className={ `${display === true? "bg-slate-400 hover:cursor-default":null}`}>
            <li className='px-4 py-2 duration-300 hover:bg-slate-500'>
                <Link to="/login">Login</Link>
            </li>
            <hr />
            <li className='px-4 py-2 duration-300 hover:bg-slate-500'>
              <Link to="/register">SignUp</Link>
            </li>
        </ul>
        {/* display hide-dylan */}
            <div className='fixed top-0 left-0 right-0 w-full min-h-screen -z-50 hover:cursor-default'></div>
        </div>:null }
        </b>
    </div>
  )
}

export default LoginRegWind