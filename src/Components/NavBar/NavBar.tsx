
import React, { useEffect, useState } from 'react'
// import MicroMenu from '../MicroMenu/MicroMenu'
import { Link, useLocation } from 'react-router-dom'
import style from "./navbar.module.css"
import LoginRegWind from '../LoginRegWindow/LoginRegWind'
import { GiBiceps } from 'react-icons/gi'
import { ToggleButton } from './ToggleButton'
import { ResponsiveNavbar } from './ResponsiveNavbar'


export function NavBar ():React.ReactNode {
const [open, setOpen] = useState(false)
const handleOpen=():void=>{
  setOpen(!open)
}

const [navbarColor, setNavbarColor] = useState('transparent');
  const location = useLocation();

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
        <div className='flex px-2 py-4 md:py-2 md:px-6 flex-wrap justify-between items-center  ' id={style.navbar} >
            <Link to={'/'} className='text-gray-300 text-xl font-semibold flex gap-2 items-center justify-center'>
                <span>CoreForce</span>
                <span>
                    <GiBiceps />
                </span>
            </Link>
            {/**Navbar 768px  */}
            <div id="links" className='hidden md:flex'>
                <ul className='flex font-medium text-text'>

                    <li className='m-3 hover:text-secondary duration-300 transition-all' >
                        <Link to={'/about'}>About us</Link>
                    </li>
                    <li className='m-3 hover:text-secondary duration-300 transition-all' >
                        <Link to="/pricing">Pricing</Link> 
                    </li>
                    <li className='m-3 hover:text-secondary duration-300 transition-all' >
                        <Link to="/gallery">Gallery</Link> 
                    </li>
                </ul>
            </div>
            <ToggleButton onClosed={handleOpen}/>
        
            <div className='m-4 text-text items-center hidden md:flex'>
                <LoginRegWind/>
                
            </div>
        </div>
            {/**Navbar responsive  */}
            <ResponsiveNavbar isOpen={open}/>
    </nav>
  )
}
