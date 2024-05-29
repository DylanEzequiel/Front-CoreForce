import { Link } from "react-router-dom";

export const About = () => {
  return (
    <main className="mx-auto py-24 min-h-screen container">
      <div className="justify-items-center gap-5 grid grid-cols-1 lg:grid-cols-6 mt-8 p-8">
        <div className="md:col-span-3 lg:col-span-2 lg:col-start-2 lg:col-end-4 py-5 lg:py-0">
          <h1 className="py-6 font-bold text-4xl text-pretty text-primary">
            Welcome to CoreForce
          </h1>

          <p className="font-semibold text-gray-500 text-lg">
            Welcome to Gym Tone, where we specialize in providing high-quality
            workouts and fitness training in a welcoming and supportive
            environment. Our team of expert trainers is committed to excellence
            and strives to provide you with a unique experience with every
            visit.{" "}
            <span className="text-secondary">
              Come and discover why we're much more than just a typical gym!
            </span>
          </p>
          <button className="bg-slate-800 hover:bg-slate-900 mt-8 px-6 py-2 rounded-sm w-full lg:w-auto font-semibold text-lg text-white transition">
            <Link to={"/"} className="" >
              Learn More
            </Link>
          </button>
        </div>

        <div className="col-span-2 lg:col-start-5 lg:col-end-7">
          <img
            alt="about image"
            src="/img/About.jpg"
            height={800}
            width={800}
            loading="lazy"
            className="object-top rounded-md w-full h-full object-cover"
          />
        </div>
      </div>

      <section className="relative bg-[url(/img/hero-1.jpg)] bg-cover bg-no-repeat bg-center">
        <div className="absolute inset-0 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l sm:from-white/95 sm:to-white/25"></div>
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-32 max-w-screen-xl h-auto text-center">
          <h2 className="my-3 font-bold text-2xl text-white">Our Vision</h2>

          <p className="font-semibold text-lg text-pretty text-white/85">
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
