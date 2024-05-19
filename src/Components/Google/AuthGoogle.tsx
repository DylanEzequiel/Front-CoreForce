
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router";
import clienteAxios from "../../service/axiosService";
import { useAuthStore } from "../../store/auth/authStore";

/*
  Stages:
  0: initiated
  1: loading
  2: login completed
  3: login but no username
  4: not logged
*/
export const AuthGoogle: React.FC = () => {
  const {fetchUserData, setTokenAndUserId} = useAuthStore()
  const navigate = useNavigate();

  const signInWithGoogle = async(googleProvider: GoogleAuthProvider) => {
    try {
      const res = await signInWithPopup(auth, googleProvider)
      const user = res.user 
     
      
      // Enviar datos del usuario al backend y revisamos si el uid existe
      const {data} = await clienteAxios.post('/firebase/google', {
        firebaseId: user.uid, // "wVoIJoXDaMedktgkrMxAiwYzzS32" //"wVoIJoXDaMedktgkrMxAiwYzzS32"
        name: user.displayName,
        email: user.email,
        imagen: user.photoURL
       
      })
      console.log(data)
      setTokenAndUserId(data.token, data.userId);
        fetchUserData();
        navigate("/");
      
      
    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = async() => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
  }

 

  return (
    <button className="flex items-center gap-2 bg-gray-100 text-slate-400 p-4 rounded-md mt-5 w-full text-center justify-center"
    onClick={handleClick}
    >
      <FaGoogle className="text-blue-500"/>
      Sign in with Google 
    </button>
  );
};
