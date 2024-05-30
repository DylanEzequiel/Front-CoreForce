import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import PayPopUp from "../payPopUp/PayFormComp";
import { useAuthStore } from "../../store/auth/authStore";
import Swal from "sweetalert2";
import { GetUserMembership } from "../../helpers/getactivemembership/getMembership";

const subscriptionPlans = [
  {
    id: "75734824-e5c6-4b56-811a-dfbf8dda058c",
    name: "Silver",
    description:
      "Extended access with additional perks. Enhanced customer support. Limited access to premium content.",
    price: 6000,
    duration: "60 days",
  },
  {
    id: "6fe5a96a-4e34-4f75-b760-327d98ef92ec",
    name: "Gold",
    description:
      "Enjoy premium benefits. Priority customer support. Access to exclusive premium content.",
    price: 10000,
    duration: "90 days",
  },
  {
    id: "4829ed97-689b-47d1-a3d7-409d4e26072d",
    name: "Platinum",
    description:
      "Get exclusive privileges. Dedicated customer support. Access to all premium content. Priority access to new features.",
    price: 15000,
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
  const [popUp,setPopUp]=useState(false)
  const { userId,user } = useAuthStore((state) => ({
    userId: state.userId,
    user:state.userData
  }));
  const [userMembership,setUserMembership]=useState<any>()
  useEffect(()=>{
    if(user){
      const a=GetUserMembership(user!) 
      setUserMembership(a)
    }
  },[])

  function handleClick(id: string, name: string, userId:string | null) {
    if(!userId){
      Swal.fire({
        title:"You need to login first",
        icon:"error"
      })
      setPopUp(false)
    }
    else{
      localStorage.setItem("MembershipId", id);
      localStorage.setItem("MembershipName", name);
      setPopUp(true)
    }
    
  }
  function handlePop(){
    setPopUp(!popUp)
  }
  // console.log(membershipPlans);

  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-20 container">
      <h2 className="font-semibold text-5xl text-center text-slate-700">
        Choose Your Plan
      </h2>

      <p className="font-semibold text-center text-gray-600 text-xl">
        Our pricing plans are designed with transparency and value in mind.
      </p>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {membershipPlans.map((membership) => (
          <div
            className="flex flex-col justify-between bg-primary shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300 text-pretty"
            key={membership.id}
          >
            <div>
              <div className="mb-8">
                <h3 className="font-semibold text-2xl text-white">
                  {membership.name}
                </h3>
                <p className="mt-4 text-gray-300">
                  {membership.description[0]}
                </p>
              </div>

              <div className="mb-8">
                <span className="font-extrabold text-3xl md:text-2xl lg:text-1xl xl:text-5xl text-white">
                  ${membership.price}
                </span>
                <span className="font-medium text-slate-300 text-xl">/mo</span>
              </div>

              <ul className="space-y-4 mb-8 text-slate-200">
                {membership.description.slice(1).map((desc) => (
                  <li className="flex items-center gap-2" key={desc}>
                    <FaCheck className="text-secondary" size={20} />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {
             userMembership?.membership.name != membership?.name
              ?
              (<button
              className="block bg-secondary px-6 py-2 w-full font-bold text-center text-white text-lg rounded-md"
              onClick={() => handleClick(membership.id, membership.name,userId)}>
              Get Started
            </button>):
            (
              <button className="block bg-green-500 px-6 py-2 w-full font-bold text-center text-white text-lg hover:cursor-default rounded-md">
                Current
              </button>)
              }
          </div>
        ))}
        {popUp && 
        <div className={`animate-fadeIn`}>
          <div onClick={handlePop} className='top-0 right-0 left-0 fixed bg-gray-600/50 backdrop-blur-sm w-full min-h-screen'>
          </div>
          <PayPopUp/>
        </div>
          }
      </div>
    </section>
  );
};


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