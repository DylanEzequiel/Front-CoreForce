import { FaUsers } from "react-icons/fa";
import { CardData } from "../../Components/dashboard/cardData/CardData";
import { MdPaid, MdVisibility } from "react-icons/md";
import { PiSneakerMoveFill } from "react-icons/pi";
import { useAuthStore } from "../../store/auth/authStore";
import { BarChart } from "../../Components/chart/BarChart";
import { PastelChart } from "../../Components/chart/PastelChart";
import { ActiveChart } from "../../Components/chart/ActiveChart";

export const DashboardAdmin: React.FC = () => {
  
  const { user } = useAuthStore((state) => ({
    user: state.userData,
  }));
  
  return (
    <div className="py-4" id="admin">
      <h1 className="text-5xl py-6 text-slate-700 font-semibold">Admin Dashboard</h1>
      <p className="text-comp text-2xl font-semibold">Welcome {user?.name}</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7 mt-6">

        <CardData
          title="Total Users"
          total="200"
        >
          <FaUsers size={20}/>
        </CardData>

        <CardData
          title="Total Members"
          total="190"
        >
          <MdPaid size={20} />
        </CardData>

        <CardData
          title="Total trainers"
          total="30"
        >
          <PiSneakerMoveFill size={20}/>
        </CardData>

        <CardData
          title="Total visites"
          total="3000+"
        >
          <MdVisibility size={20} />
        </CardData>


        <div className="py-5 md:flex justify-between gap-10 w-auto h-auto">
          <BarChart />
          <PastelChart />
          <ActiveChart />
        </div>
      </div>
    </div>
  );
};
