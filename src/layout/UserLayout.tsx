import { GiBiceps } from "react-icons/gi";
import { IoMenuOutline } from "react-icons/io5";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { TrainerLinks } from "../Components/trainer/TrainerLinks";
import { useAuthStore } from "../store/auth/authStore";
import { UserLinks } from "../Components/user/UserLinks";


export const UserLayout = () => {
  const { user } = useAuthStore((state) => ({
    user: state.userData,
  }));



  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2  text-gray-400 bg-gray-700 focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <IoMenuOutline className="text-primary" scale={40} />
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <ul className="space-y-2 font-medium">
            <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6">
              <NavLink to={"/"}>
                <div className="flex items-center gap-1">
                  <p className="text-3xl p-2 font-semibold text-comp">
                    CoreForce
                  </p>
                  <GiBiceps size={23} className="text-secondary" />
                </div>
              </NavLink>
            </div>
            {user?.role === "user" ? (
              <>
                <UserLinks />
              </>
            ) : (
              <>
                <TrainerLinks />
              </>
            )}
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 min-h-screen">
        <div className="p-4 border-2 border-gray-200  rounded-lg ">
          <Outlet />
        </div>
      </div>
    </>
  );
};
