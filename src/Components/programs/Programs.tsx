import { IconType } from "react-icons";
import { FaHeartPulse } from "react-icons/fa6";
import { GiBodyBalance, GiMightyForce } from "react-icons/gi";
import { GrRun } from "react-icons/gr";


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


  return (
    <section>
      <h2 className="text-center text-5xl text-slate-700 font-semibold">
        Our Programs
      </h2>
      <p className="text-center my-2 font-semibold text-3xl text-gray-500">
        Build your personal routine
      </p>

      <div className="grid grid-cols-1 gap-3 mt-10 md:grid-cols-2 xl:grid-cols-4">
        {
          trainingPrograms.map( program => (
            <div className="max-w-sm px-10 mx-auto text-white transition-all border border-gray-200 rounded-md shadow-2xl bg-slate-800 py-28 hover:scale-105" key={program.id}>
            <program.icon size={30} className="text-orange-500" />
            <h3 className="py-2 text-2xl">{program.name}</h3>
            <p className="text-lg font-light text-gray-400">
              {program.description}
            </p>
          </div>
  
          ) )
        }
    
      </div>
    </section>
  );
};

export default Programs;