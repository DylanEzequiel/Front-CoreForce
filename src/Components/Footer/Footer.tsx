import React from 'react'
// import { NavLink } from 'react-router-dom'

function Footer():React.ReactElement {
  return (
    
<footer className="w-full max-w-screen-xl p-4 bg-primary m-30">

    <div className="flex justify-around">
        <div className='w-1/2 text-left'>
            <h4 className="mb-6 text-sm font-semibold text-white uppercase">Core Force Fitness</h4>
            
            <p className="text-sm text-text sm:text-center">
            Welcome to Core Force Fitness, where your fitness journey receives specialized attention! Our mission is to help you to achieve your health and wellness goals with personalized support every step of the way. Whether you're a beginner or a seasoned athlete, our team of dedicated trainers is here to tailor workouts to your unique needs, ensuring you reach your full potential. Join us today and experience the difference of expert guidance and a supportive community on your path to a stronger, healthier you!
            </p>
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