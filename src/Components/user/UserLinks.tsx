import { IoLogOut } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth/authStore";
import { MdChat, MdDashboard,MdUpgrade } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GetUserMembership } from "../../helpers/getactivemembership/getMembership";

export const UserLinks = () => {

  const navigate = useNavigate();
  const {  user } = useAuthStore((state) => ({
    user: state.userData
  }));

  
  const membershipName = GetUserMembership(user!)

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
          className="flex items-center hover:bg-gray-700 p-2 rounded-lg text-white group"
        >
          <MdDashboard size={20}/>
          <span className="flex-1 whitespace-nowrap ms-3">Dashboard</span>
        </Link>
      </li>

      <li>
        <Link
          to="routines"
          className="flex items-center hover:bg-gray-700 p-2 rounded-lg text-white group"
        >
          <GiWeightLiftingUp size={20}/>
          <span className="flex-1 whitespace-nowrap ms-3">Routines</span>
        </Link>
      </li>

      <li>
        { membershipName.membership.name === 'Gold' || membershipName.membership.name === 'Platinum'? (
          <Link
          to="chat-trainer"
          className="flex items-center hover:bg-gray-700 p-2 rounded-lg text-white group"
        >
          <MdChat />
          <span className="flex-1 whitespace-nowrap ms-3">Chat</span>
        </Link>
        ): null }
      </li>

{/* 
      <li>
        <Link
          to="payment-history"
          className="flex items-center hover:bg-gray-700 p-2 rounded-lg text-white group t"
        >
          <MdHistory size={20}/>
          <span className="flex-1 whitespace-nowrap ms-3">Payment History</span>
        </Link>
      </li> */}

      <li>
        <Link
          to="update-plan"
          className="flex items-center hover:bg-gray-700 p-2 rounded-lg text-white group"
        >
          <MdUpgrade size={20}/>
          <span className="flex-1 whitespace-nowrap ms-3">Upgrade Plan</span>
        </Link>
      </li>

      <li>
        <button
          onClick={handleLogout}
          className="flex justify-start items-center gap-2 hover:bg-gray-700 p-2 w-full text-white group"
        >
          <IoLogOut size={25} className="text-red-600"/>
          <span className="whitespace-nowrap">Logout</span>
        </button>
      </li>
    </>
  );
};
