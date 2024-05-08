import { FaHeartPulse } from "react-icons/fa6"
import { Hero } from "../../Components/hero/Hero"



export const Home = () => {
  return (
    <>
      <Hero />
      <main className="container pt-20 mx-auto pb-36">
        <h2 className="text-5xl font-semibold text-center text-slate-700">Our Programs</h2>
        <p className="my-2 text-3xl font-semibold text-center text-gray-500">Build your personal routine</p>

        <section className="grid grid-cols-1 gap-3 mt-10 md:grid-cols-2 xl:grid-cols-4">

          <div className="max-w-sm px-10 mx-auto text-white transition-all border border-gray-200 rounded-md shadow-2xl bg-slate-800 py-28 hover:scale-105">
            <FaHeartPulse size={30} className="text-orange-500"/>
            <h3 className="py-2 text-2xl">Cardio Exercise</h3>
            <p className="text-lg font-light text-gray-400">Exercise your heart rate up and keeps it up for a prolonged period of time</p>
          </div>

          <div className="max-w-sm px-10 mx-auto text-white transition-all border border-gray-200 rounded-md shadow-2xl bg-slate-800 py-28 hover:scale-105">
            <FaHeartPulse size={30} className="text-orange-500"/>
            <h3 className="py-2 text-2xl">Cardio Exercise</h3>
            <p className="text-lg font-light text-gray-400">Exercise your heart rate up and keeps it up for a prolonged period of time</p>
          </div>

          <div className="max-w-sm px-10 mx-auto text-white transition-all border border-gray-200 rounded-md shadow-2xl bg-slate-800 py-28 hover:scale-105">
            <FaHeartPulse size={30} className="text-orange-500"/>
            <h3 className="py-2 text-2xl">Cardio Exercise</h3>
            <p className="text-lg font-light text-gray-400">Exercise your heart rate up and keeps it up for a prolonged period of time</p>
          </div>

          <div className="max-w-sm px-10 mx-auto text-white transition-all border border-gray-200 rounded-md shadow-2xl bg-slate-800 py-28 hover:scale-105">
            <FaHeartPulse size={30} className="text-orange-500"/>
            <h3 className="py-2 text-2xl">Cardio Exercise</h3>
            <p className="text-lg font-light text-gray-400">Exercise your heart rate up and keeps it up for a prolonged period of time</p>
          </div>

        </section>
      </main>
      
      <section className="relative flex flex-col-reverse my-20 text-white bg-slate-800 py-28 md:flex-row-reverse">
        <div className="container px-10">
          <h2 className="my-2 md:text-4xl lg:text-6xl xl:text-8xl">Why choose us ?</h2> 
          <p className="text-pretty text-sm py-3 font-semibold text-gray-500 xl:text-xl md:max-w-[23rem] lg:max-w-[36rem] xl:max-w-[40rem]">Select your preferred class and begin right away. Keep in mind, the only regrettable workout is the one you skipped.</p>
          <div className="grid max-w-lg gap-10 grid-col-1 md:grid-cols-2">
            
            <div className="flex flex-col gap-1 font-bold text-orange-500 md:text-3xl lg:text-5xl">
              200+
              <span className="text-sm text-gray-500">Members</span>
            </div>

            <div className="flex flex-col gap-1 font-bold text-orange-500 md:text-3xl lg:text-5xl">
              20+
              <span className="text-sm text-gray-500">Best trainers</span>
            </div>

            <div className="flex flex-col gap-1 font-bold text-orange-500 md:text-3xl lg:text-5xl">
              100+
              <span className="text-sm text-gray-500">Programs</span>
            </div>

            <div className="flex flex-col gap-1 font-bold text-orange-500 md:text-3xl lg:text-5xl">
              500+
              <span className="text-sm text-gray-500">Comments</span>
            </div>

          </div>

        </div>
        <img src="/img/choose-img.png" alt="" className="md:absolute md:top-[37px] lg:top-[-23px] xl:right-5 xl:top-[-34px] 2xl:right-10 2xl:top-[-128px] max-w-100 md:max-w-[23rem] lg:max-w-[27rem] xl:max-w-[30rem] 2xl:max-w-[32rem]"/>
      </section>
    </>
  )
}
