import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"


export const UpButton = () => {

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
    <button className="fixed bottom-8 right-20 text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={scrollToTop} style={{ display: upButton }}>
      <FaArrowUp className="text-gray-200" size={20}/>
    </button>
  )
}
