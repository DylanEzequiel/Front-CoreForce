import { Outlet } from 'react-router-dom';
import { NavBar } from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';

export const HomeLayout = () => {
  return (
    <>
    <NavBar />
    <div>
      <Outlet />
    </div>
    <Footer />
    </>
  )
}
