/* eslint-disable @typescript-eslint/no-explicit-any */

import { Home } from "./view/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import {loadStripe} from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js";
import { Profile } from "./view/admin/Profile";
import { SettingUser } from "./Components/user/SettingUser";
import { AuthLayout } from "./layout/AuthLayout";
import { UserLayout } from "./layout/UserLayout";
import { Trainer } from "./view/trainer/Trainer";
import { TrainerChat } from "./view/trainer/TrainerChat";
import { CreateRoutine } from "./Components/trainer/CreateRoutine";
import { StudentList } from "./Components/trainer/StudentList";
import Programs from "./Components/programs/Programs";
import { SelectTrainer } from "./Components/user/SelectTrainer";
import { PaymentHistorial } from "./Components/user/PaymentHistorial";
import { Pricing } from "./Components/pricing/Pricing";
import StripeView from "./view/stripeForm/StripeView";
import Routines from "./view/routines/Routines";



function App() {
  const stripeAPI= import.meta.env.VITE_STRIPE_KEY_TEST
  
  const stripePromise = loadStripe(stripeAPI)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'profile/setting', element: <SettingUser /> },
        { path: 'pricing', element: <PricingPage /> },
        { path: 'gallery', element: <Galleries /> },
        { path: 'about', element: <About /> },
        { path: 'payment', element: <StripeView /> },
        { path: 'ratepage', element: <RatePage /> },
        { path: 'postRoutine', element: <Routines />}
      ],
    },
    {
      path: '/dashboard',
      element: <PrivateLayout />,
      children: [
        { path: 'admin', element: <DashboardAdmin /> },
        { path: 'users', element: <ListUsers /> },
        { path: 'admin/:id', element: <UpdateUsers /> },
        { path: 'profile', element: <Profile /> },
        
      ],
    },{
      path: '/auth',
      element: <AuthLayout />,
      children: [
        { path: 'signup', element: <Register />},
        { path: 'signin', element: <Login />  }  
      ]
    }, {
      path: '/user',
      element: <UserLayout />,
      children: [
        {path: 'trainer', element: <Trainer />},
        {path: 'trainer/chat', element: <TrainerChat />},
        {path: 'trainer/create-routine', element: <CreateRoutine />},
        {path: 'trainer/student-list', element: <StudentList />},
        {path: 'profile', element: <DasboardUser />},
        {path: 'routines', element: <Programs />},
        {path: 'select-trainer', element: <SelectTrainer />},
        {path: 'payment-history', element: <PaymentHistorial />},
        {path: 'update-plan', element: <Pricing />},
      ]

    }
   
  ]);
  
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

          <RouterProvider router={router} />
    
        {/* <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="profile" element={<DasboardUser />} />
            <Route path="profile/setting" element={<SettingUser />} />
            <Route path="auth/register" element={<Register />} />
            <Route path="auth/login" element={<Login /> }/>
            <Route path="pricing" element={<PricingPage />}/>
            <Route path="gallery" element={<Galleries />}/>
            <Route path="about" element={<About />}/>

        
            <Route path="payment" element={<PayForm/>}/>
            <Route path="ratepage" element={<RatePage/>}/>
           
          </Route>
        </Routes>

        <Routes>
          <Route path="/dashboard" element={<PrivateLayout />}>
            <Route index path="admin" element={<DashboardAdmin />} />
            <Route path="users" element={<ListUsers />} />
            <Route path="admin/:id" element={<UpdateUsers />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>

    
        <Routes>
          
        </Routes> */}

        
      </Elements>
    </div>
  );
}

export default App;
