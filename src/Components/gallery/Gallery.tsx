

const Gallery: React.FC = () => {
  return (
    <section className="my-5 py-5">
       
      <div className="mx-auto py-10 container px-2">
        <h2 className="font-semibold text-5xl text-center text-slate-800">Meet Your Trainer</h2> 
        <p className="font-semibold text-center text-gray-500 text-xl">Our training programs are crafted with your fitness journey in mind, ensuring personalized guidance and expert support every step of the way.</p>
        <div className="gap-3 grid grid-cols-1 lg:grid-cols-3 my-16">

          <div className="relative rounded-md aspect-square grayscale hover:filter-none">
            <div className="shadow-lg">
              <img src="/img/trainer1.jpg" alt="" 
                className="rounded-md w-full h-full transition-all aspect-[5/7] object-cover"
              />
            </div>

            <div className="absolute inset-0 hover:inset-5 flex flex-col justify-center items-center border-gray-300 opacity-0 hover:opacity-100 px-1 py-4 border rounded-sm transition-all duration-500">
              <h3 className="font-bold text-3xl text-orange-800">CoreForce</h3>
              <p className="font-semibold text-center text-lg text-pretty text-white">Explore the mastery behind each workout session in our trainer</p>
            </div>
          </div>

          <div className="relative rounded-md aspect-square grayscale hover:filter-none">
            <div className="shadow-lg">
              <img src="/img/trainer3.jpg" alt="" 
                className="rounded-md w-full h-full transition-all aspect-[5/7] object-cover"
              />
            </div>

            <div className="absolute inset-0 hover:inset-5 flex flex-col justify-center items-center border-gray-300 opacity-0 hover:opacity-100 px-1 py-4 border rounded-sm transition-all duration-500">
              <h3 className="font-bold text-3xl text-orange-800">CoreForce</h3>
              <p className="font-semibold text-center text-lg text-pretty text-white">Explore the mastery behind each workout session in our trainer</p>
            </div>
          </div>

          <div className="relative rounded-md aspect-square grayscale hover:filter-none">
            <div className="shadow-lg">
              <img src="/img/trainer2.jpg" alt="" 
                className="rounded-md w-full h-full transition-all aspect-[5/7] object-cover"
              />
            </div>

            <div className="absolute inset-0 hover:inset-5 flex flex-col justify-center items-center border-gray-300 opacity-0 hover:opacity-100 px-1 py-4 border rounded-sm transition-all duration-500">
              <h3 className="font-bold text-3xl text-orange-800">CoreForce</h3>
              <p className="font-semibold text-center text-lg text-pretty text-white">Explore the mastery behind each workout session in our trainer</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Gallery
