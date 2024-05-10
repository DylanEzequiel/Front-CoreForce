/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavBar } from './Components/NavBar/NavBar'
import { Home } from './view/home/Home'
import {  Route, Routes } from 'react-router-dom'
// import { Login } from './Components/login/Login'
import { HomeLayout } from './layout/HomeLayout'
import Footer from './Components/Footer/Footer'
import DasboardUser from './view/dashboardUser/DasboardUser'
import { Login } from './view/auth/Login'
import { loginAction } from './redux/login/login.actions'
import { useDispatch } from 'react-redux'
import { Register } from './view/auth/Register'
import { DashboardAdmin } from './view/admin/DashboardAdmin'
import { UpdateUsers } from './view/admin/UpdateUsers'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch: any = useDispatch();

  return (
    <div className='bg-gray-200'>
      <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>

        <NavBar />
        {/* aca van las rutas a las que hacemos en Pages -Dylan  */}
        <button className="top-48" onClick={() => dispatch(loginAction())}>
          click
        </button>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
            <Route index element={<Home />}></Route>
        <Route path="profile" element={<DasboardUser />} />
          <Route path='auth/register' element={<Register />}/>
          <Route path="auth/login" element={<Login />}></Route>
      </Routes>

      {/*Rutas privadas */}
      <Routes>
        <Route path='/dashboard/admin' element={<DashboardAdmin />}/>
        <Route path='/dashboard/admin/:id' element={<UpdateUsers />}/>
        </Routes>
        
        <Footer />
    </div>
  );
}

export default App;
