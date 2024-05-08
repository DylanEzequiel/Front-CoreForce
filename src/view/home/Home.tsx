import { FaHeartPulse } from "react-icons/fa6"
import { Hero } from "../../Components/hero/Hero"



export const Home = () => {
  return (
    <>
      <Hero />
      <main className="container mx-auto pb-36 pt-20">
        <h2 className="text-center text-5xl text-slate-700 font-semibold">Our Programs</h2>
        <p className="text-center my-2 font-semibold text-3xl text-gray-500">Build your personal routine</p>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 mt-10">

          <div className="max-w-sm mx-auto border border-gray-200 shadow-2xl rounded-md bg-slate-800 text-white py-28 px-10 hover:scale-105 transition-all">
            <FaHeartPulse size={30} className="text-orange-500"/>
            <h3 className="text-2xl py-2">Cardio Exercise</h3>
            <p className="font-light text-lg text-gray-400">Exercise your heart rate up and keeps it up for a prolonged period of time</p>
          </div>

          <div className="max-w-sm mx-auto border border-gray-200 shadow-2xl rounded-md bg-slate-800 text-white py-28 px-10 hover:scale-105 transition-all">
            <FaHeartPulse size={30} className="text-orange-500"/>
            <h3 className="text-2xl py-2">Cardio Exercise</h3>
            <p className="font-light text-lg text-gray-400">Exercise your heart rate up and keeps it up for a prolonged period of time</p>
          </div>

          <div className="max-w-sm mx-auto border border-gray-200 shadow-2xl rounded-md bg-slate-800 text-white py-28 px-10 hover:scale-105 transition-all">
            <FaHeartPulse size={30} className="text-orange-500"/>
            <h3 className="text-2xl py-2">Cardio Exercise</h3>
            <p className="font-light text-lg text-gray-400">Exercise your heart rate up and keeps it up for a prolonged period of time</p>
          </div>

          <div className="max-w-sm mx-auto border border-gray-200 shadow-2xl rounded-md bg-slate-800 text-white py-28 px-10 hover:scale-105 transition-all">
            <FaHeartPulse size={30} className="text-orange-500"/>
            <h3 className="text-2xl py-2">Cardio Exercise</h3>
            <p className="font-light text-lg text-gray-400">Exercise your heart rate up and keeps it up for a prolonged period of time</p>
          </div>

        </section>
      </main>

      <section className="bg-slate-800 text-white py-28 relative my-20 flex flex-col-reverse md:flex-row-reverse">
        <div className="container px-10">
          <h2 className="md:text-4xl lg:text-6xl xl:text-8xl my-2">Why choose us ?</h2> 
          <p className="text-pretty text-sm py-3 font-semibold text-gray-500 xl:text-xl md:max-w-[23rem] lg:max-w-[36rem] xl:max-w-[40rem]">Select your preferred class and begin right away. Keep in mind, the only regrettable workout is the one you skipped.</p>
          <div className="grid grid-col-1 md:grid-cols-2 max-w-lg gap-10">
            
            <div className="md:text-3xl lg:text-5xl flex flex-col gap-1 font-bold text-orange-500">
              200+
              <span className="text-sm text-gray-500">Members</span>
            </div>

            <div className="md:text-3xl lg:text-5xl flex flex-col gap-1 font-bold text-orange-500">
              20+
              <span className="text-sm text-gray-500">Best trainers</span>
            </div>

            <div className="md:text-3xl lg:text-5xl flex flex-col gap-1 font-bold text-orange-500">
              100+
              <span className="text-sm text-gray-500">Programs</span>
            </div>

            <div className="md:text-3xl lg:text-5xl flex flex-col gap-1 font-bold text-orange-500">
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
