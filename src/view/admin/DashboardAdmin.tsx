import { FaUsers } from "react-icons/fa";
import { CardData } from "../../Components/dashboard/cardData/CardData";
import { MdPaid, MdVisibility } from "react-icons/md";
import { PiSneakerMoveFill } from "react-icons/pi";

export const DashboardAdmin: React.FC = () => {
  

  
  return (
    <div className="py-4" id="admin">
      <h1 className="text-5xl py-6 text-slate-700 font-semibold">Admin Dashboard</h1>

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
      </div>
    </div>
  );
};
