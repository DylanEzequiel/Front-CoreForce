import { IoLogOut } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth/authStore";
import { MdDashboard } from "react-icons/md";
import { FaFileAlt, FaFileUpload } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { PiUsersFill } from "react-icons/pi";

export const TrainerLinks = () => {

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
          to="trainer"
          className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group"
        >
          <MdDashboard size={20}/>
          <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link
          to="trainer/upload-exercises"
          className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group"
        >
          <FaFileUpload size={20}/>
          <span className="flex-1 ms-3 whitespace-nowrap">Upload Exercises</span>
        
        </Link>

        <Link
          to="/routines"
          className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group"
        >
          <FaFileAlt size={20}/>
          <span className="flex-1 ms-3 whitespace-nowrap">Routines</span>
        
        </Link>
      </li>
      
      <li>
        <Link
          to="trainer/chat"
          className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group"
        >
          <IoMdChatbubbles size={20}/>
          <span className="flex-1 ms-3 whitespace-nowrap">Chat</span>
          
        </Link>
      </li>
      
      <li>
        <Link
          to="trainer/student-list"
          className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group"
        >
          <PiUsersFill />
          <span className="flex-1 ms-3 whitespace-nowrap">Student List</span>
        
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
