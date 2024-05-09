
import React, { useState } from 'react'
import MicroMenu from '../MicroMenu/MicroMenu'
import { Link } from 'react-router-dom'
import style from "./navbar.module.css"
import LoginRegWind from '../LoginRegWindow/LoginRegWind'

export function NavBar ():React.ReactNode {
const [display, setDisplay] = useState(false)
const handleCLick=():void=>{
    setDisplay(!display)
}

  return (
    <nav className='fixed top-0 z-50 w-full pb-10 select-none' >
        <div className='flex flex-wrap justify-between bg-slate-800' id={style.navbar}>
            <div id="links" className='bg'>
                <ul className='flex font-medium text-text'>
                    <li className={`m-3 text-center w-12  rounded-t ${display ? "bg-slate-400" :null}`}>
                            <b onClick={handleCLick} className='hover:cursor-pointer'>Info
                                {display? <MicroMenu></MicroMenu>:null}
                            </b>
                    </li>
                    <li className='m-3' >
                        <b >
                            Profile
                        </b>
                    </li>
                    <li className='m-3' >
                        <Link to="/login">Pay Methods</Link> 
                    </li>

                </ul>
            </div>
        
            <div className='flex m-1 text-text'>
                <LoginRegWind/>
                <img src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="userIcon" className='h-16 rounded-full' />
            </div>
        </div>
    </nav>
  )
}
