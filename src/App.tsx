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
import { PricingPage } from "./view/pricing/PricingPage";
import { Galleries } from "./view/galleries/Galleries";
// import { ErrorPage } from "./view/errorPage/ErrorPage";
import { About } from "./view/about/About";
import RatePage from "./view/ratePage/RatePage";
import PayForm from "./view/payForm/PayForm";
import {loadStripe} from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js";


function App() {
  
  const stripePromise = loadStripe("pk_test_51PH8NuBo3feRciaDBfMEClW56SUbX1GoDzS2jSdXSb3HM42Fdk9Gge4vWBIcnxkFbqAiWJs3FnKZ4WCd8CZiO1Em00L4Nuie9F")
  
  return (
    <div className="bg-gray-200">
      <Elements stripe={stripePromise}>


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
            <Route path="auth/login" element={<Login /> }/>
            <Route path="pricing" element={<PricingPage />}/>
            <Route path="gallery" element={<Galleries />}/>
            <Route path="about" element={<About />}/>

            {/* Estas de aca son rutas que serian privadas pero las dejo aca por tests -Dylan */}
            <Route path="payment" element={<PayForm/>}/>
            <Route path="ratepage" element={<RatePage/>}/>
            {/* <Route path="/*" element={<ErrorPage />}/> */}
          </Route>
        </Routes>

        {/*Rutas privadas */}
        <Routes>
          <Route path="/dashboard" element={<PrivateLayout />}>
            <Route index path="admin" element={<DashboardAdmin />} />
            <Route path="users" element={<ListUsers />} />
            <Route path="admin/:id" element={<UpdateUsers />} />
          </Route>
        </Routes>

        
      </Elements>
    </div>
  );
}

export default App;
