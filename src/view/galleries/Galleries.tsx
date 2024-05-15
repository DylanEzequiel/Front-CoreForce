export const Galleries = () => {
  return (
    <main className="min-h-screen py-20 container mx-auto">
      <h1 className="text-center text-5xl text-slate-700 font-semibold py-16">
        live the experience
      </h1>

      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex md:w-1/2 flex-wrap">
          <div className="sm:w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/img/workout1.jpg"
            />
          </div>
          <div className="sm:w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/img/workout2.jpg"
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/img/workout3.jpg"
            />
          </div>
        </div>
        <div className="flex md:w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/img/workout4.jpg"
            />
          </div>
          <div className="sm:w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/img/workout5.jpg"
            />
          </div>
          <div className="sm:w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/img/workout6.jpg"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
