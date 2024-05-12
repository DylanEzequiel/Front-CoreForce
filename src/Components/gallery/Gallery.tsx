

const Gallery: React.FC = () => {
  return (
    <section className="py-5 my-5 bg-slate-800 text-white">
       
      <div className="container mx-auto py-10">
        <h2 className="text-center text-5xl text-white font-semibold">Meet Your Trainer</h2> 
        <p className="text-center font-semibold text-xl text-gray-500">Our training programs are crafted with your fitness journey in mind, ensuring personalized guidance and expert support every step of the way.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-16">

          <div className="aspect-square relative rounded-md grayscale hover:filter-none">
            <div className="shadow-lg">
              <img src="/img/trainer1.jpg" alt="" 
                className="aspect-[5/7] rounded-md object-cover transition-all w-full h-full"
              />
            </div>

            <div className="flex flex-col justify-center items-center absolute inset-0 opacity-0 border border-gray-300 rounded-sm transition-all duration-500 py-4 px-1 hover:inset-5 hover:opacity-100">
              <h3 className="text-3xl text-orange-800 font-bold">CoreForce</h3>
              <p className="text-pretty text-lg text-center font-semibold">Explore the mastery behind each workout session in our trainer</p>
            </div>
          </div>

          <div className="aspect-square relative rounded-md grayscale hover:filter-none">
            <div className="shadow-lg">
              <img src="/img/trainer3.jpg" alt="" 
                className="aspect-[5/7] rounded-md object-cover transition-all w-full h-full"
              />
            </div>

            <div className="flex flex-col justify-center items-center absolute inset-0 opacity-0 border border-gray-300 rounded-sm transition-all duration-500 py-4 px-1 hover:inset-5 hover:opacity-100">
              <h3 className="text-3xl text-orange-800 font-bold">CoreForce</h3>
              <p className="text-pretty text-lg text-center font-semibold">Explore the mastery behind each workout session in our trainer</p>
            </div>
          </div>

          <div className="aspect-square relative rounded-md grayscale hover:filter-none">
            <div className="shadow-lg">
              <img src="/img/trainer2.jpg" alt="" 
                className="aspect-[5/7] rounded-md object-cover transition-all w-full h-full"
              />
            </div>

            <div className="flex flex-col justify-center items-center absolute inset-0 opacity-0 border border-gray-300 rounded-sm transition-all duration-500 py-4 px-1 hover:inset-5 hover:opacity-100">
              <h3 className="text-3xl text-orange-800 font-bold">CoreForce</h3>
              <p className="text-pretty text-lg text-center font-semibold">Explore the mastery behind each workout session in our trainer</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Gallery
