import { Outlet } from 'react-router-dom';
import { NavBar } from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import { ChatBotButton, UpButton } from '../Components/up-button/UpButton';

export const HomeLayout = () => {
  return (
    <>
    <NavBar />
    <div>
      <Outlet />
    </div>
    <Footer />

    <UpButton />
    <ChatBotButton />
    </>
  )
}
