import { Outlet } from "react-router-dom";
import Sidebar from "../Components/dashboard/sidebard/Sidebar";
import { useState } from "react";
import Header from "../Components/dashboard/header/Header";

const PrivateLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="bg-gray-100">
      <div className="flex min-h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
