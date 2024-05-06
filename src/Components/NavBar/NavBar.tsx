
import React from 'react'
// import { NavLink } from 'react-router-dom'

export function NavBar ():React.ReactNode {
  return (
        <div className='flex flex-wrap justify-between bg-secondary'>
            <div id="links" className=''>
                <ul className='flex font-medium text-text'>
                    <li className='m-3'>
                        {/* <NavLink to="/"> */}
                            <b >About Us</b>
                        {/* </NavLink> */}
                    </li>
                    <li className='m-3'>
                        {/* <NavLink to="/"> */}
                            <b >Join us</b>
                        {/* </NavLink> */}
                    </li>
                    <li className='m-3'>
                        {/* <NavLink to="/"> */}
                            <b>Location</b>
                        {/* </NavLink> */}
                    </li>
                    <li className='m-3'>
                        {/* <NavLink to="/"> */}
                            <b >Pay Methods</b>
                        {/* </NavLink> */}
                    </li>
                </ul>
            </div>
        
            <div id="userCard" className='m-1'>
                <h4 className=''>UserName</h4>
                <b>clientType / Suscription</b>
                <img src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="userIcon" className='inline rounded-full h-12' />
            </div>
        </div>
  )
}
