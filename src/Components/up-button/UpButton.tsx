import React from 'react'
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"
import { GoDependabot } from "react-icons/go";
import { useNavigate } from 'react-router';
import { useAuthStore } from '../../store/auth/authStore';
import { GetUserMembership } from '../../helpers/getactivemembership/getMembership';

export const UpButton = ():React.ReactNode => {

  const [upButton, setUpButton] = useState( 'none' );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Para hacer el desplazamiento suave
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setUpButton("flex"); // Cambia el 'transparent' a lo que desees cuando el scroll llegue a cierto punto
      } else {
        setUpButton( 'none' );
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el listener del evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [upButton]);

  return (
    <button className="right-20 bottom-8 fixed bg-gradient-to-r hover:bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 mb-2 px-3 text-center text-white focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-300 py-2.5 rounded-full font-medium text-sm me-2" onClick={scrollToTop} style={{ display: upButton }}>
      <FaArrowUp className="text-gray-200" size={20}/>
    </button>
  )
}



export function ChatBotButton():React.ReactNode {

  const {user} = useAuthStore((state)=>({
    user:state.userData
  }))
  const [userMembership,setUserMembership]=useState<any>()
  useEffect(()=>{
    if(user){
      const a=GetUserMembership(user!) 
      setUserMembership(a)
    }
  },[])
  const navigate=useNavigate()
  function handleClick(){
    navigate("/user/chatbot")
  }
  return (
    <div>

      {user && userMembership !== "Free" ? <button 
      onClick={handleClick}
      className="right-5 bottom-8 fixed bg-green-500 mb-2 px-3 text-center text-white    py-2.5 rounded-full font-medium text-sm me-2">
        <GoDependabot size={20} className='' style={{ strokeWidth: 2 }} />
      </button>:null}
    </div>
  )
}

  