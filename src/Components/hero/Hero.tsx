import { FaArrowRight } from "react-icons/fa"
import { useNavigate } from "react-router"
import { useAuthStore } from "../../store/auth/authStore";

export const Hero = () => {
  const navigate =useNavigate()
  const {  userId, user } = useAuthStore((state) => ({
    userId: state.userId,
    user: state.userData
  }));

    function handleClick(){
      if(userId && user?.role === 'user') {
        navigate('/user/profile')
        return
      }

      if(userId && user?.role === 'trainer') {
        navigate('/user/trainer')
        return
      }

      if(userId && user?.role === 'admin') {
        navigate('/dashboard/admin')
        return
      }

      navigate("/auth/signin")
    }
  return (
    <section className="-z-10 bg-[url('/img/hero-1.jpg')] bg-cover bg-no-repeat bg-center py-32">
      <div className="flex flex-col justify-between md:items-start mx-auto py-52 w-[90%] max-w-[120rem]">

        <h1 className="flex flex-col gap-5 mb-3 font-semibold text-5xl text-center text-gray-300 text-pretty md:text-start md:text-6xl">
          <span>¡Welcome to </span>
          <span className="md:text-8xl">CoreForce!</span>
        </h1>

        <p className="max-w-[45rem] font-normal text-gray-300 text-pretty text-xl">In CoreForce, we transform your body and your well-being. With top-quality workouts and programs, we offer you an exceptional experience. <span className="font-bold text-slate-200">Join us to achieve your fitness goals and feel strong and confident at all times.</span></p>

        <button className="flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 mt-5 px-4 py-3 rounded-sm font-semibold text-lg text-white transition-all" onClick={handleClick} >
          {userId ? 'Dashboard' : 'Get Started'}
          <FaArrowRight />
        </button>

      </div>
    </section>
  )
}
