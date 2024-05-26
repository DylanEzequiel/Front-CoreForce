import { FaRobot } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { IoCreate, IoPricetag } from "react-icons/io5";

const servicesApp = [
  {
    name: "Chat with a Trainer",
    description:
      "Get personalized advice and motivation directly from our certified trainers. Chat is integrated right within the app!",
    icon: IoMdChatboxes, // Assuming this icon represents chat functionality
    id: 5,
    link: "chat",
    bg: "primary", // Placeholder for linking to chat functionality
  },
  {
    name: "Create Custom Routines",
    description:
      "Design your own workout plan using our exercise library. Tailor your fitness journey to your specific needs and goals!",
    icon: IoCreate, // Assuming this icon represents creating routines
    id: 6,
    link: "custom-routines",
    bg: "white", // Placeholder for linking to custom routine creation section
  },
  {
    name: "Best-Priced Fitness Plans",
    description:
      "Unlock a variety of affordable fitness plans that fit your budget and fitness level. Get the most out of your workouts!",
    icon: IoPricetag, // Assuming this icon represents pricing
    id: 7,
    link: "pricing",
    bg: "primary", // Placeholder for linking to pricing plans section
  },
  {
    name: "AI-powered Help Bot",
    description:
      "Need a quick answer or guidance? Our AI assistant is here to help you 24/7 with any fitness-related questions you may have!",
    icon: FaRobot, // Assuming this icon represents a bot
    id: 8,
    link: "help-bot",
    bg: "white", // Placeholder for linking to the help bot section
  },
];

export const OurService = () => {
  return (
    <section>
      <h2 className="font-semibold text-5xl text-center text-slate-700">
        Our Services
      </h2>
      <p className="my-2 font-semibold text-3xl text-center text-gray-500">
        Discover what we can do for you
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-10">
        {servicesApp.map((service) => (
          <div
            key={service.id}
            className={`bg-${service.bg} p-10 w-full rounded-t-md md:rounded-t-none md:rounded-l-md md:w-[400px] border space-x-2 xl:border-none`}
          >
            {<service.icon size={40} className={`${service.bg === 'white' ? 'text-secondary' : 'text-secondary'}`}/>}

           <div className={`${service.bg === 'white' ? 'text-primary' : 'text-white'}`}>
            <h2 className="text-4xl uppercase tracking-tighter font-semibold py-10">
                {service.name}
              </h2>
              <p className="text-xl mb-20">
                {service.description}
              </p>
           </div>
           
          </div>
        ))}
      </div>
    </section>
  );
};
