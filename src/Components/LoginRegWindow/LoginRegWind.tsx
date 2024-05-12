import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function LoginRegWind(): React.ReactNode {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const sessionUser = sessionStorage.getItem("UserId");
  function handleClick(): void {
    setDisplay(!display);
  }

  const handleLogout = () => {
    sessionStorage.removeItem("UserId");
    sessionStorage.removeItem("UserToken");
    navigate("/");
  };

  return (
    <div
      className={`flex items-center gap-2 p-3 text-center hover:cursor-pointer rounded-t relative ${
        display === true ? "bg-slate-400 hover:cursor-default" : null
      }`}
    >
      <b onClick={handleClick}>
        {sessionUser ? "user" : "Get Started"}
        {display ? (
          <div className="z-50 right-0 mt-4 flex w-64 flex-col rounded-md border border-comp bg-white shadow-md absolute">
            <ul
              className={`${
                display === true ? "bg-slate-400 hover:cursor-default" : null
              }`}
            >
              {sessionUser ? (
                <>
                <li className="hover:bg-slate-500 px-4 py-2 duration-300">
                    <Link to={'/profile'}>Perfil</Link>
                  </li>
                  <li className="hover:bg-slate-500 px-4 py-2 duration-300">
                    <Link to={'/dashboard/admin'}>Dashboard</Link>
                  </li>
                  <li className="hover:bg-slate-500 px-4 py-2 duration-300">
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="hover:bg-slate-500 px-4 py-2 duration-300">
                    <Link to="/auth/login">Login</Link>
                  </li>
                  <hr />
                  <li className="hover:bg-slate-500 px-4 py-2 duration-300">
                    <Link to="/auth/register">SignUp</Link>
                  </li>
                </>
              )}
            </ul>
            {/* display hide-dylan */}
            <div className="top-0 right-0 left-0 -z-50 fixed w-full min-h-screen hover:cursor-default"></div>
          </div>
        ) : null}
      </b>
      <FaRegUserCircle size={30} />
    </div>
  );
}

export default LoginRegWind;
