import { NavBar } from "./Components/NavBar/NavBar";
import { Home } from "./view/home/Home";
import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "./layout/HomeLayout";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./Components/Footer/Footer";
import { Profile } from "./Components/profile/Profile";

function App() {
  // TODO CREAR UN ESTADO GLOBAL PARA EL IDIOMA

  const { isAuthenticated } = useAuth0();

  return (
    <div className='bg-gray-200 h-screen'>
      <NavBar />
      {/* aca van las rutas a las que hacemos en Pages -Dylan  */}
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route index element={<Home />}></Route>
        <Route path="/profile" element={<Profile/>}/>
        {/* <Route index path='login' element={<Login></Login>}></Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
