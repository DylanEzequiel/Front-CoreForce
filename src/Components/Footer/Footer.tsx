import React from 'react'
// import { NavLink } from 'react-router-dom'

function Footer():React.ReactElement {
  return (
    
<footer className="bg-primary m-30 p-4 w-full">

    <div className="flex justify-around">
        <div className='w-1/2 text-left'>
            <h4 className="mb-6 text-sm font-semibold text-white uppercase">Core Force Fitness</h4>
            
        </div>

        <div>
            <h4 className="mb-6 text-sm font-semibold text-white uppercase">Follow me</h4>
            <ul className="font-medium text-text">
                <li className="mb-4">
                    {/* <NavLink to="https://github.com/DylanEzequiel" className="hover:underline">Github</NavLink> */}
                </li>
                <li className="mb-4">
                    {/* <NavLink to="https://www.instagram.com/bd_iddu/" className="hover:underline">Instagram</NavLink> */}
                </li>
                <li className="mb-4">
                    {/* <NavLink to="https://mail.google.com/mail/u/0/#inbox?compose=new" className="hover:underline">Gmail</NavLink> */}
                </li>
            </ul>
        </div>

        <div>
            <h4 className="mb-6 text-sm font-semibold text-white uppercase">Pages</h4>
            <ul className="font-medium text-text">
                <li className="mb-4">
                    {/* <NavLink to="/" className="hover:underline">Home</NavLink> */}
                </li>
                <li className="mb-4">
                    {/* <NavLink to="/About" className="hover:underline">About</NavLink> */}
                </li>
                <li className="mb-4">
                    {/* <NavLink to="/products" className="hover:underline">Products</NavLink> */}
                </li>
                {/* {userToken && <li className="mb-4">
                    <Link href="/dashboard" className="hover:underline">Orders</Link>
                </li>} */}
            
            </ul>
        </div>
    </div>

    <div className="sm:flex sm:justify-between sm:items-center">
        <p className="m-2 text-sm text-text sm:text-center">© 2024 Core Force Fitness All Rights Reserved.
        </p>
    </div>
</footer>
  )
}

export default Footer