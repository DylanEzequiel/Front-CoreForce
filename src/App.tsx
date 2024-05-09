import { NavBar } from "./Components/NavBar/NavBar";
import { Home } from "./view/home/Home";
import { Route, Routes } from "react-router-dom";
import { Login } from "./view/auth/Login";
import { HomeLayout } from "./layout/HomeLayout";
import Footer from "./Components/Footer/Footer";
import DasboardUser from "./view/dashboardUser/DasboardUser";
import { useDispatch } from "react-redux";
import { loginAction } from "./redux/login/login.actions";

function App() {
  const dispatch: any = useDispatch();

  return (
    <div className="h-screen bg-gray-200">
      <NavBar />
      {/* aca van las rutas a las que hacemos en Pages -Dylan  */}
      <button className=" top-48" onClick={() => dispatch(loginAction())}>
        click
      </button>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/profile" element={<DasboardUser />} />
        <Route index element={<Home />}></Route>
        <Route index path="/login" element={<Login />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
