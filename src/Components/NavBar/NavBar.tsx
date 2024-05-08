
import React, { useState } from 'react'
import MicroMenu from '../MicroMenu/MicroMenu'
import { Link } from 'react-router-dom'
import { LoginButton } from '../login/Login'
import { LogoutButton } from '../logout/Logout'
// import { NavLink } from 'react-router-dom'

export function NavBar ():React.ReactNode {
const [display, setDisplay] = useState(false)
const handleCLick=():void=>{
    setDisplay(!display)
}

  return (
    <nav className='top-0 z-50 fixed pb-10 w-full'>
        <div className='flex flex-wrap justify-between bg-slate-800 select-none shadow-md'>
            <div id="links" className=''>
                <ul className='flex font-medium text-text'>
                    <li className={`m-3 text-center w-12 rounded-t ${display === true? "bg-slate-400":null}`}>
                            <b onClick={handleCLick}>Info
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
        
            <div className='m-1'>
                <LoginButton ></LoginButton>
                <LogoutButton></LogoutButton>
                <img src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="userIcon" className='inline rounded-full h-16' />
            </div>
        </div>
    </nav>
  )
}
