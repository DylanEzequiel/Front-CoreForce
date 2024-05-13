
import React, { useEffect, useState } from 'react'
// import MicroMenu from '../MicroMenu/MicroMenu'
import { Link, useLocation } from 'react-router-dom'
import style from "./navbar.module.css"
import LoginRegWind from '../LoginRegWindow/LoginRegWind'
import { GiBiceps } from 'react-icons/gi'


export function NavBar ():React.ReactNode {
// const [display, setDisplay] = useState(false)
// const handleCLick=():void=>{
//     setDisplay(!display)
// }

const [navbarColor, setNavbarColor] = useState('transparent');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setNavbarColor("#111827"); // Cambia el color a lo que desees cuando el scroll llegue a cierto punto
      } else {
        setNavbarColor(navbarColor => {
          // Si la ruta es "/", el color debe ser transparente, de lo contrario, usa "#111827"
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
    <nav className={`fixed top-0 z-50 w-full pb-10 select-none ${location.pathname === '/dashboard' ? 'hidden': 'block'}` }>
        <div className='flex px-2 md:px-6 flex-wrap justify-between items-center shadow-md ' id={style.navbar} style={{ backgroundColor: navbarColor }}>
            <Link to={'/'} className='text-gray-300 text-lg font-semibold flex gap-2 items-center justify-center'>
                <span>CoreForce</span>
                <span>
                    <GiBiceps />
                </span>
            </Link>
            <div id="links" className='bg'>
                <ul className='flex font-medium text-text'>
                    {/* <li className={`m-3 text-center w-12  rounded-t ${display ? "bg-slate-400" :null}`}>
                            <b onClick={handleCLick} className='hover:cursor-pointer'>Info
                                {display? <MicroMenu></MicroMenu>:null}
                            </b>
                    </li> */}
                    <li className='m-3' >
                        <Link to={'/about'}>About us</Link>
                    </li>
                    <li className='m-3' >
                        <Link to="/pricing">Pricing</Link> 
                    </li>
                    <li className='m-3' >
                        <Link to="/gallery">Gallery</Link> 
                    </li>
                </ul>
            </div>
        
            <div className='flex m-4 text-text items-center'>
                <LoginRegWind/>
                
            </div>
        </div>
    </nav>
  )
}
