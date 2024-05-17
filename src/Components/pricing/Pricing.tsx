import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router";

const subscriptionPlans = [
  {
    id: "901d7e97-5939-4dac-b3a3-492ce0acdc18",
    name: "Bronze",
    description:
      "Access to basic features. Limited customer support. No access to premium content.",
    price: 10,
    duration: "30 days",
  },
  {
    id: "4541d7ca-ae0a-4e1f-a7b2-c71dfd65382a",
    name: "Silver",
    description:
      "Extended access with additional perks. Enhanced customer support. Limited access to premium content.",
    price: 17,
    duration: "60 days",
  },
  {
    id: "5fcfecd2-f532-482e-9d18-c9115f07a7ea",
    name: "Gold",
    description:
      "Enjoy premium benefits. Priority customer support. Access to exclusive premium content.",
    price: 30,
    duration: "90 days",
  },
  {
    id: "8b6f72af-8a13-4cd2-ae43-81f3b484ba0c",
    name: "Platinum",
    description:
      "Get exclusive privileges. Dedicated customer support. Access to all premium content. Priority access to new features.",
    price: 70,
    duration: "365 days",
  },
];

const membershipPlans = subscriptionPlans.map((plan) => ({
  ...plan,
  description: plan.description
    .split(".")
    .filter(Boolean)
    .map((desc) => desc.trim()),
}));

export const Pricing = () => {
  const navigate = useNavigate();

  function handleClick( id: string ) {
    console.log(id)
    navigate("/auth/login");
  }

  // console.log(membershipPlans);

  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-7xl">
      <h2 className="font-semibold text-5xl text-center text-slate-700">
        Choose Your Plan
      </h2>

      <p className="font-semibold text-center text-gray-500 text-xl">
        Our pricing plans are designed with transparency and value in mind.
      </p>

      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6">
        {membershipPlans.map((membership) => (
          <div
            className="flex flex-col justify-between bg-primary shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300"
            key={membership.id}
          >
            <div>
              <div className="mb-8">
                <h3 className="font-semibold text-2xl text-white">
                  {membership.name}
                </h3>
                <p className="mt-4 text-gray-400">
                  {membership.description[0]}
                </p>
              </div>

              <div className="mb-8">
                <span className="font-extrabold text-5xl text-white">
                  ${membership.price}
                </span>
                <span className="font-medium text-comp text-xl">/mo</span>
              </div>

              <ul className="space-y-4 mb-8 text-comp">
                {membership.description.slice(1).map((desc) => (
                  <li className="flex items-center gap-2" key={desc}>
                    <FaCheck className="text-secondary" size={20} />
                    <span>{desc}</span>
                  </li>
                ))}

              </ul>
            </div>

            <button
              className="block bg-secondary py-3 w-full font-medium text-center text-text px6"
              onClick={() => handleClick(membership.id)}
            >
              Get Started
            </button>
          </div>
        ))}

        {/* price 1
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

          <button
            className="block bg-secondary py-3 w-full font-medium text-center text-text px6"
            onClick={handleClick}
          >
            Get Started
          </button>
        </div>

       
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
          <button
            className="block bg-secondary py-3 w-full font-medium text-center text-text px6"
            onClick={handleClick}
          >
            Get Started
          </button>
        </div>

      
        <div className="flex flex-col justify-between bg-primary shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
          <div>
            <div className="mb-8">
              <h3 className="font-semibold text-2xl text-white">Gold</h3>
              <p className="mt-4 text-gray-400">Enjoy premium benefits</p>
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
          <button
            className="block bg-secondary py-3 w-full font-medium text-center text-text px6"
            onClick={handleClick}
          >
            Get Started
          </button>
        </div>

       

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
                <span>
                  Access to all premium content. Priority access to new features
                </span>
              </li>
            </ul>
          </div>

          <button
            className="block bg-secondary py-3 w-full font-medium text-center text-text px6"
            onClick={handleClick}
          >
            Get Started
          </button>
        </div> */}
      </div>
    </section>
  );
};
