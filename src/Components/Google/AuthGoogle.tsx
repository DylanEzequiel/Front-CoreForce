/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { auth, userExist } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

/*
  Stages:
  0: initiated
  1: loading
  2: login completed
  3: login but no username
  4: not logged
*/
export const AuthGoogle: React.FC = () => {

  const [currentUser, setCurrentUser] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async(user: any) => {
      if(user) {
        if(await userExist(user.uid)) {
          console.log('esta registrado')
          //reenviar al home
          navigate('/')
        }else {
          //reenviar a completar registro
          console.log('no lo estas')
        }
      }else{
        console.log('No hay')
      }
    })
  } , [navigate])

 

  const signInWithGoogle = async(googleProvider: GoogleAuthProvider) => {
    try {
      const res = await signInWithPopup(auth, googleProvider)
      console.log(res);
      //Navegar al home
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
