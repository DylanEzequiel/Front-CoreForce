import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router";



export const Pricing = () => {
    const navigate =useNavigate()

    function handleClick(){
      navigate("/auth/login")
    }

  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-7xl">
      <h2 className="font-semibold text-5xl text-center text-slate-700">
        Choose Your Plan
      </h2>

      <p className="font-semibold text-center text-gray-500 text-xl">
        Our pricing plans are designed with transparency and value in mind.
      </p>


      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6">
        
        {/* price 1 */}
        <div className="flex flex-col justify-between bg-primary shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
          <div>
            <div className="mb-8">
              <h3 className="font-semibold text-2xl text-white">Bronze</h3>
              <p className="mt-4 text-gray-400">
                Get started with our basic features
              </p>
            </div>

            <div className="mb-8">
              <span className="font-extrabold text-5xl text-white">$10</span>
              <span className="font-medium text-comp text-xl">/mo</span>
            </div>

            <ul className="space-y-4 mb-8 text-comp">
              <li className="flex items-center gap-2">
                <FaCheck className="text-secondary" size={20} />
                <span>Limited custom support</span>
              </li>

              <li className="flex items-center gap-2">
                <FaCheck className="text-secondary" size={20} />
                <span>No access to premium content</span>
              </li>
            </ul>
          </div>

          <button className="block bg-secondary py-3 w-full font-medium text-center text-text px6" onClick={handleClick}>
            Get Started
          </button>
        </div>


        
        {/* price 2 */}
        <div className="flex flex-col justify-between bg-primary shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
          <div>
            <div className="mb-8">
              <h3 className="font-semibold text-2xl text-white">Silver</h3>
              <p className="mt-4 text-gray-400">
                Extended access with additional perks
              </p>
            </div>

            <div className="mb-8">
              <span className="font-extrabold text-5xl text-white">$17</span>
              <span className="font-medium text-comp text-xl">/mo</span>
            </div>

            <ul className="space-y-4 mb-8 text-comp">
              <li className="flex items-center gap-2">
                <FaCheck className="text-secondary" size={20} />
                <span>Enhanced customer support</span>
              </li>

              <li className="flex items-center gap-2">
                <FaCheck className="text-secondary" size={20} />
                <span>Limited access to premium content.</span>
              </li>
            </ul>

          </div>
          <button className="block bg-secondary py-3 w-full font-medium text-center text-text px6" onClick={handleClick}>
            Get Started
          </button>
        </div>


        
        {/* price 3 */}
        <div className="flex flex-col justify-between bg-primary shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
          <div>
            <div className="mb-8">
              <h3 className="font-semibold text-2xl text-white">Gold</h3>
              <p className="mt-4 text-gray-400">
              Enjoy premium benefits
              </p>
            </div>

            <div className="mb-8">
              <span className="font-extrabold text-5xl text-white">$30</span>
              <span className="font-medium text-comp text-xl">/mo</span>
            </div>

            <ul className="space-y-4 mb-8 text-comp">
              <li className="flex items-center gap-2">
                <FaCheck className="text-secondary" size={20} />
                <span>Priority customer support</span>
              </li>

              <li className="flex items-center gap-2">
                <FaCheck className="text-secondary" size={20} />
                <span>Access to exclusive premium content.</span>
              </li>
            </ul>
      
          </div>
          <button className="block bg-secondary py-3 w-full font-medium text-center text-text px6" onClick={handleClick}>
            Get Started
          </button>
        </div>


        
        {/* price 4 */}

        <div className="flex flex-col justify-between bg-primary shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
          <div>
            <div className="mb-8">
              <h3 className="font-semibold text-2xl text-white">Platinum</h3>
              <p className="mt-4 text-gray-400">
                Get started with our basic features
              </p>
            </div>

            <div className="mb-8">
              <span className="font-extrabold text-5xl text-white">$30</span>
              <span className="font-medium text-comp text-xl">/mo</span>
            </div>

            <ul className="space-y-4 mb-8 text-comp">
              <li className="flex items-center gap-2">
                <FaCheck className="text-secondary" size={20} />
                <span>Dedicated customer support</span>
              </li>

              <li className="flex items-center gap-2">
                <FaCheck className="text-secondary" size={20} />
                <span>Access to all premium content. Priority access to new features</span>
              </li>
            </ul>

          </div>
          
          <button className="block bg-secondary py-3 w-full font-medium text-center text-text px6" onClick={handleClick}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};
