/* eslint-disable @typescript-eslint/no-explicit-any */

import { Home } from "./view/home/Home";
import { Route, Routes } from "react-router-dom";
// import { Login } from './Components/login/Login'
import { HomeLayout } from "./layout/HomeLayout";

import DasboardUser from "./view/dashboardUser/DasboardUser";
import { Login } from "./view/auth/Login";
import { Register } from "./view/auth/Register";
import { DashboardAdmin } from "./view/admin/DashboardAdmin";
import { UpdateUsers } from "./view/admin/UpdateUsers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateLayout from "./layout/PrivateLayout";
import { ListUsers } from "./view/admin/ListUsers";

function App() {
  return (
    <div className="bg-gray-200">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    
      {/* aca van las rutas a las que hacemos en Pages -Dylan  */}
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="profile" element={<DasboardUser />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="auth/login" element={<Login />}></Route>
        </Route>
      </Routes>

      {/*Rutas privadas */}
      <Routes>
        <Route path="/dashboard" element={<PrivateLayout />}>
          <Route index path="admin" element={<DashboardAdmin />} />
          <Route path="users" element={<ListUsers />} />
          <Route path="users/:id" element={<UpdateUsers />} />
        </Route>
      </Routes>

      
    </div>
  );
}

export default App;
