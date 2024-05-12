import { FaArrowRight } from "react-icons/fa"

export const Hero = () => {
  return (
    <section className="-z-10 py-32 bg-[url('/img/hero-1.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="max-w-[120rem] w-[90%] mx-auto py-52 flex flex-col items-start justify-between">

        <h1 className="text-gray-300 font-semibold text-pretty text-5xl md:text-6xl flex flex-col gap-5">
          <span>¡Welcome to </span>
          <span className="text-8xl">CoreForce!</span>
        </h1>

        <p className="text-pretty text-gray-300 text-xl font-normal max-w-[45rem]">In CoreForce, we transform your body and your well-being. With top-quality workouts and programs, we offer you an exceptional experience. <span className="text-slate-500 font-bold">Join us to achieve your fitness goals and feel strong and confident at all times.</span></p>

        <button className="bg-orange-500 py-3 px-4 mt-5 flex justify-center items-center gap-2 text-white font-semibold text-lg hover:bg-orange-600 transition-all rounded-sm">
          Get Started
          <FaArrowRight />
        </button>

      </div>
    </section>
  )
}
