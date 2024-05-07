import React from 'react'
import { Link } from 'react-router-dom'

function MicroMenu():React.ReactNode {
  return (
    <div className=''>
        <ul className='z-50 fixed bg-slate-400 p-3 rounded-r-md rounded-bl-md'>
         
            <li className='px-4 py-2'>
                <Link to="/">About Us</Link>
            </li>

            <hr />
            
            <li className='px-4 py-2'>
              <Link to="/">Location</Link>
            </li>
            
            <hr />
            
            <li className='px-4 py-2'>
              <Link to="/"></Link>
            </li>
            
        </ul>
        {/* display hide-dylan */}
        <div className='top-0 right-0 left-0 fixed w-full min-h-screen'></div>
    </div>
  )
}

export default MicroMenu