import { IoLogOut } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth/authStore";
import { MdChat, MdDashboard, MdHistory, MdUpgrade } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";

export const UserLinks = () => {

  const navigate = useNavigate();

  const { logout } = useAuthStore();
  const handleLogout = () => {
    logout();
    navigate("/");
  };


  return (
    <>
    <li>
        <Link
          to="profile"
          className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group"
        >
          <MdDashboard size={20}/>
          <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
        </Link>
      </li>

      <li>
        <Link
          to="routines"
          className="flex items-center p-2 rounded-lg text-white  hover:bg-gray-700 group"
        >
          <GiWeightLiftingUp size={20}/>
          <span className="flex-1 ms-3 whitespace-nowrap">Routines</span>
        </Link>
      </li>

      <li>
        <Link
          to="chat-trainer"
          className="flex items-center p-2 rounded-lg text-white  hover:bg-gray-700 group"
        >
          <MdChat />
          <span className="flex-1 ms-3 whitespace-nowrap">Chat</span>
        </Link>
      </li>


      <li>
        <Link
          to="payment-history"
          className="flex items-center p-2 t rounded-lg text-white  hover:bg-gray-700 group"
        >
          <MdHistory size={20}/>
          <span className="flex-1 ms-3 whitespace-nowrap">Payment History</span>
        </Link>
      </li>

      <li>
        <Link
          to="update-plan"
          className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group"
        >
          <MdUpgrade size={20}/>
          <span className="flex-1 ms-3 whitespace-nowrap">Upgrade Plan</span>
        </Link>
      </li>

      <li>
        <button
          onClick={handleLogout}
          className="flex justify-start gap-2 items-center p-2 text-white  hover:bg-gray-700 group w-full"
        >
          <IoLogOut size={25} className="text-red-600"/>
          <span className="whitespace-nowrap">Logout</span>
        </button>
      </li>
    </>
  );
};
