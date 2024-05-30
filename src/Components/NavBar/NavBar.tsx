
import React, { useEffect, useState } from 'react'
// import MicroMenu from '../MicroMenu/MicroMenu'
import { Link, useLocation } from 'react-router-dom'
import style from "./navbar.module.css"
import LoginRegWind from '../LoginRegWindow/LoginRegWind'
import { GiBiceps } from 'react-icons/gi'
import { ToggleButton } from './ToggleButton'
import { ResponsiveNavbar } from './ResponsiveNavbar'
import { useAuthStore } from '../../store/auth/authStore'


export function NavBar ():React.ReactNode {
const [open, setOpen] = useState(false)
const handleOpen=():void=>{
  setOpen(!open)
}

const [navbarColor, setNavbarColor] = useState('transparent');
  const location = useLocation();
  const {user} = useAuthStore((state)=>({
    user:state.userData
  }))
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setNavbarColor("#111827"); // Cambia el color a lo que desees cuando el scroll llegue a cierto punto
      } else {
        setNavbarColor(navbarColor => {
          console.log(navbarColor)
          return location.pathname === "/" ? 'transparent' : "#111827";
        });
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    // Limpia el listener del evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]); 

  return (
    <nav className={`fixed top-0 z-50 w-full pb-1 select-none ${location.pathname === '/dashboard' ? 'hidden': 'block'} shadow-md` } style={{ backgroundColor: navbarColor }}>
        <div className='flex flex-wrap justify-between items-center px-2 md:px-6 py-4 md:py-2' id={style.navbar} >
            <Link to={'/'} className='flex justify-center items-center gap-2 font-semibold text-gray-300 text-xl'>
                <span>CoreForce</span>
                <span>
                    <GiBiceps />
                </span>
            </Link>
            {/**Navbar 768px  */}
            <div id="links" className='md:flex hidden'>
                <ul className='flex font-medium text-text'>

                    <li className='m-3 hover:text-secondary transition-all duration-300' >
                        <Link to={'/about'}>About us</Link>
                    </li>
                   <li className='m-3 hover:text-secondary transition-all duration-300' >
                        <Link to={'/routines'}>Routines</Link>
                    </li>
                    {user?.role !== "trainer" ?
                    <li className='m-3 hover:text-secondary transition-all duration-300' >
                        <Link to="/pricing">Pricing</Link> 
                    </li>
                    : null}
                    <li className='m-3 hover:text-secondary transition-all duration-300' >
                        <Link to="/gallery">Gallery</Link> 
                    </li>
                </ul>
            </div>
            <ToggleButton onClosed={handleOpen}/>
        
            <div className='md:flex items-center hidden m-4 text-text'>
                <LoginRegWind/>
                
            </div>
        </div>
            {/**Navbar responsive  */}
            <ResponsiveNavbar isOpen={open}/>
    </nav>
  )
}
