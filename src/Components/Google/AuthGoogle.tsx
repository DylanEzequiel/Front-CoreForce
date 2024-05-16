/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../../firebase/firebase";

import { useNavigate } from "react-router";
import clienteAxios from "../../service/axiosService";

/*
  Stages:
  0: initiated
  1: loading
  2: login completed
  3: login but no username
  4: not logged
*/
export const AuthGoogle: React.FC = () => {


  let navigate = useNavigate();



 

  const signInWithGoogle = async(googleProvider: GoogleAuthProvider) => {
    try {
      const res = await signInWithPopup(auth, googleProvider)
      const user = res.user 
      console.log(res);

      //Navegar al home
      // Enviar datos del usuario al backend
      const response = await clienteAxios.post('/api/user', {
        firebaseId: user.uid,
        displayName: user.displayName,
        email: user.email
        // Aquí puedes enviar otros datos relevantes del usuario si es necesario
      })

      if (response.status === 200) {
        // Si el usuario se creó correctamente o ya existía en la base de datos
        console.log('Usuario creado o ya existente');
      } else {
        // Si el usuario no existe, mostrar el modal para completar los campos adicionales
        
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = async() => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
  }

 

  return (
    <button className="flex items-center gap-2 bg-primary text-white py-2 px-4 rounded-md"
    onClick={handleClick}
    >
      Loggin with Google <FaGoogle />
    </button>
  );
};
