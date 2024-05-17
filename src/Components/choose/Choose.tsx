

const Choose = () => {
  return (
    <section className="bg-slate-800 text-white pt-28 pb-0 md:pb-28 relative flex flex-col md:flex-row-reverse">
        <div className="container px-10">
          <h2 className="my-2 text-4xl text-center md:text-start md:text-4xl lg:text-6xl xl:text-8xl">Why choose us ?</h2> 
          <p className="text-pretty text-lg py-3 font-semibold text-gray-500 xl:text-xl md:max-w-[23rem] lg:max-w-[36rem] xl:max-w-[40rem]">Select your preferred class and begin right away. Keep in mind, the only regrettable workout is the one you skipped.</p>
          <div className="grid max-w-lg gap-10 grid-col-1 sm:grid-cols-2 mb-10 md:mb-0">
            
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
        <img src="/img/choose-img.png" alt="" className="md:absolute md:top-[61px] lg:top-[-7px] xl:right-5 xl:top-[-34px] 2xl:right-10 2xl:top-[-128px] 3xl:top-[-77px] max-w-100 md:max-w-[23rem] lg:max-w-[27rem] xl:max-w-[30rem] 2xl:max-w-[32rem]"/>
      </section>
  )
}

export default Choose
