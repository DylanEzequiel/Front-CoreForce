import { IconType } from "react-icons";
import { FaHeartPulse } from "react-icons/fa6";
import { GiBodyBalance, GiMightyForce } from "react-icons/gi";
import { GrRun } from "react-icons/gr";
import RoutinesContainer from "../RoutinesContainer/RoutinesContainer";
import { useAuthStore } from "../../store/auth/authStore";



interface CategoryListProps {
  id: number;
  name: string;
  icon: IconType;
  description: string;
}



const trainingPrograms: CategoryListProps[] = [
  {
      name: "Cardio Exercise",
      description: "Exercise your heart rate up and keep it up for a prolonged period of time.",
      icon: FaHeartPulse,
      id: 1
  },
  {
      name: "Strength Training Program",
      description: "Build muscle and increase endurance with targeted exercises to improve overall strength and power.",
      icon: GiMightyForce,
      id: 2
  },
  {
      name: "Flexibility and Mobility Program",
      description: "Enhance flexibility and mobility with exercises designed to improve joint range of motion and reduce the risk of injury.",
      icon: GiBodyBalance,
      id: 3
  },
  {
      name: "High-Intensity Interval Training (HIIT)",
      description: "Maximize calorie burn and boost metabolism with alternating bursts of intense activity and short rest periods.",
      icon: GrRun,
      id: 4
  }
];



const Programs: React.FC = () => {
  const {user}=useAuthStore((state)=>({
    user:state.userData
  }))
  
  return (
    <section className="md:p-24">
      <h2 className="font-semibold text-5xl text-center text-slate-700">
        Select Programs
      </h2>
      <p className="my-2 font-semibold text-3xl text-center text-gray-500">
        Build your personal routine
      </p>

      <div className="gap-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-10 px-2">

{/* mapeamos y renderizamos los tipos de rutinas que hay disponibles */}

        {
          trainingPrograms.map( program => (
            <div className="border-gray-200 bg-slate-800 shadow-2xl mx-auto px-10 py-28 border rounded-md md:max-w-sm text-white transition-all hover:scale-105 cursor-pointer" key={program.id}>
            <program.icon size={30} className="text-orange-500" />
            <h3 className="py-2 text-2xl">{program.name}</h3>
            <p className="font-light text-gray-400 text-lg">
              {program.description}
            </p>
          </div>
  
          ) )
        }
    
      </div>
        {user?
          <RoutinesContainer />
          :null
        }
     
    </section>
  );
};

export default Programs;
