/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { FaArrowLeft, FaUsers } from "react-icons/fa";
import { GiBiceps } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const sidebar = useRef<any>(null);
  const trigger = useRef<any>(null);
  const location = useLocation();
  
  const { pathname } = location;


  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-50 flex min-h-screen w-72 flex-col overflow-y-hidden duration-300 ease-linear bg-primary lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6">
        <NavLink to={"/"}>
          <div className="flex items-center gap-1">
            <p className="text-3xl p-2 font-semibold text-comp">CoreForce</p>
            <GiBiceps size={23} className="text-secondary"/>
          </div>
        </NavLink>
        <button
          className="block lg:hidden"
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FaArrowLeft size={20} className="text-white" />
        </button>
      </div>

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-comp">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-2">
              <li>
                <NavLink
                  to={'/dashboard/admin'}
                  className={`group relative flex items-center gap-2 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-secondary ${
                    pathname.includes('dashboard/admin') &&
                    'bg-secondary'
                  }`}
                >
                  <MdOutlineDashboard size={20} className="text-comp"/>
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={'/dashboard/users'}
                  className={`group relative flex items-center gap-2 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-secondary ${
                    pathname.includes('dashboard/users') &&
                    'bg-secondary'
                  }`}
                >
                  <FaUsers size={20} className="text-comp"/>
                  Users
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={'#'}
                  className={`group relative flex items-center gap-2 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-secondary ${
                    pathname.includes('dasettingshboard/') &&
                    'bg-secondary'
                  }`}
                >
                  <IoSettingsOutline size={20} className="text-comp"/>
                  Setting
                </NavLink>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
