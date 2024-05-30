
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router";
import clienteAxios from "../../service/axiosService";
import { useAuthStore } from "../../store/auth/authStore";
import { toast } from "react-toastify";

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
      toast.success("Login success! Welcome back");
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
    <button className="flex justify-center items-center gap-2 bg-blue-700 mt-5 p-4 rounded-md w-full text-center text-gray-100"
    onClick={handleClick}
    >
      <FaGoogle className="text-gray-100"/>
      Sign in with Google 
    </button>
  );
};
