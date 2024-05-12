import { FaCheck } from "react-icons/fa6";



export const Pricing = () => {
  return (
    <section className="py-20 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
      <h2 className="text-center text-5xl text-slate-700 font-semibold">
        Choose Your Plan
      </h2>

      <p className="text-center font-semibold text-xl text-gray-500">
        Our pricing plans are designed with transparency and value in mind.
      </p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-6">
        <div className="bg-primary rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white">Bronze</h3>
            <p className="mt-4 text-gray-400">
              Get started with our basic features
            </p>
          </div>

          <div className="mb-8">
            <span className="text-5xl font-extrabold text-white">$10</span>
            <span className="text-xl font-medium text-comp">/mo</span>
          </div>

          <ul className="mb-8 space-y-4 text-comp">
            <li className="flex items-center gap-2">
              <FaCheck className="text-secondary" size={20} />
              <span>Limited custom support</span>
            </li>

            <li className="flex items-center gap-2">
              <FaCheck className="text-secondary" size={20} />
              <span>No access to premium content</span>
            </li>
          </ul>

          <button className="block w-full py-3 px6 text-center bg-secondary text-text font-medium">
            Sign Up
          </button>
        </div>

        <div className="bg-primary rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white">Silver</h3>
            <p className="mt-4 text-gray-400">
              Extended access with additional perks
            </p>
          </div>

          <div className="mb-8">
            <span className="text-5xl font-extrabold text-white">$17</span>
            <span className="text-xl font-medium text-comp">/mo</span>
          </div>

          <ul className="mb-8 space-y-4 text-comp">
            <li className="flex items-center gap-2">
              <FaCheck className="text-secondary" size={20} />
              <span>Enhanced customer support</span>
            </li>

            <li className="flex items-center gap-2">
              <FaCheck className="text-secondary" size={20} />
              <span>Limited access to premium content.</span>
            </li>
          </ul>

          <button className="block w-full py-3 px6 text-center bg-secondary text-text font-medium">
            Get Started
          </button>
        </div>

        <div className="bg-primary rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white">Gold</h3>
            <p className="mt-4 text-gray-400">
            Enjoy premium benefits
            </p>
          </div>

          <div className="mb-8">
            <span className="text-5xl font-extrabold text-white">$30</span>
            <span className="text-xl font-medium text-comp">/mo</span>
          </div>

          <ul className="mb-8 space-y-4 text-comp">
            <li className="flex items-center gap-2">
              <FaCheck className="text-secondary" size={20} />
              <span>Priority customer support</span>
            </li>

            <li className="flex items-center gap-2">
              <FaCheck className="text-secondary" size={20} />
              <span>Access to exclusive premium content.</span>
            </li>
          </ul>

          <button className="block w-full py-3 px6 text-center bg-secondary text-text font-medium">
            Get Started
          </button>
        </div>

        <div className="bg-primary rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white">Platinum</h3>
            <p className="mt-4 text-gray-400">
              Get started with our basic features
            </p>
          </div>

          <div className="mb-8">
            <span className="text-5xl font-extrabold text-white">$30</span>
            <span className="text-xl font-medium text-comp">/mo</span>
          </div>

          <ul className="mb-8 space-y-4 text-comp">
            <li className="flex items-center gap-2">
              <FaCheck className="text-secondary" size={20} />
              <span>Dedicated customer support</span>
            </li>

            <li className="flex items-center gap-2">
              <FaCheck className="text-secondary" size={20} />
              <span>Access to all premium content. Priority access to new features</span>
            </li>
          </ul>

          <button className="block w-full py-3 px6 text-center bg-secondary text-text font-medium">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};
