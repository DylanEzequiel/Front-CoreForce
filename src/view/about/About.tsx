export const About = () => {
  return (
    <main className="min-h-screen py-24 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 mt-8 p-8 justify-items-center">
        <div className="md:col-span-3 lg:col-span-2  lg:col-start-2 lg:col-end-4 py-5 lg:py-0">
          <h1 className="text-4xl font-bold text-pretty py-6 text-primary">
            Welcome to CoreForce
          </h1>

          <p className="text-lg font-semibold text-gray-500">
            Welcome to Gym Tone, where we specialize in providing high-quality
            workouts and fitness training in a welcoming and supportive
            environment. Our team of expert trainers is committed to excellence
            and strives to provide you with a unique experience with every
            visit.{" "}
            <span className="text-secondary">
              Come and discover why we're much more than just a typical gym!
            </span>
          </p>

          <button className="mt-8 bg-slate-800 hover:bg-slate-900 px-6 py-2 text-white font-semibold text-lg rounded-sm transition w-full lg:w-auto">
            Learn More
          </button>
        </div>

        <div className="col-span-2 lg:col-start-5 lg:col-end-7">
          <img
            alt="about image"
            src="/img/About.jpg"
            height={800}
            width={800}
            loading="lazy"
            className="rounded-md w-full h-full object-cover object-top"
          />
        </div>
      </div>

      <section className="relative bg-[url(/img/hero-1.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0  sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 h-auto lg:px-8 text-center">
          <h2 className="text-white text-2xl font-bold my-3">Our Vision</h2>

          <p className="text-white/85 font-semibold text-lg text-pretty">
            At CoreForce, we envision a future where technology seamlessly
            integrates into your fitness journey, making workouts more
            efficient, connections within the fitness community stronger, and
            overall experiences richer. We are committed to leading this digital
            transformation, providing cutting-edge solutions that not only meet
            but surpass your expectations. Join us in redefining the way you
            train, connect, and achieve your fitness goals. Welcome to CoreForce
            - where innovation meets performance.
          </p>
        </div>
      </section>
    </main>
  );
};
