/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import { LuUser } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { RiProfileFill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";


export const UserMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  const navigate = useNavigate();
    
  const handleLogout = () => {
    sessionStorage.removeItem("UserId");
    sessionStorage.removeItem("UserToken");
    navigate("/");
  };

  return (
    <div className="relative">
      <Link
        to='#'
        onClick={() => setDropdownOpen(!dropdownOpen)}
        ref={trigger}
        className="flex items-center gap-4"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black">
            User
          </span>
          <span className="block text-xs">Admin</span>
        </span>

        <LuUser size={32} className="text-primary"/>

        <MdKeyboardArrowDown className="hidden fill-current sm:block"/>
      </Link>


      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-64 flex-col rounded-md border border-comp bg-white shadow-md ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7">
          <li>
            <Link to={'#'}
              className="flex items-center gap-3 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <RiProfileFill size={20}/>
              My Profile
            </Link>
          </li>
        </ul>

        <button className="flex items-center gap-3 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          onClick={handleLogout}
        >
          <CiLogout size={20}/>
          Log Out
        </button>
      </div>
    </div>
  )
}
