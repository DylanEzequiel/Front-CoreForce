import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth/authStore";
import { FaRegCircleUser } from "react-icons/fa6";

function LoginRegWind(): React.ReactNode {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  function handleClick(): void {
    setDisplay(!display);
  }
  const { user, userId } = useAuthStore((state) => ({
    userId: state.userId,
    user: state.userData,
  }));
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <button
      className={`flex items-center gap-2 py-2 px-4 text-center hover:cursor-pointer  ${
        display === true ? "bg-slate-400 hover:cursor-default" : null
      }`}
      onClick={handleClick}
    >
      <b onClick={handleClick}>
        {userId ? user?.name : <FaRegCircleUser size={30}/>}
        {display ? (
          <div className="z-50 right-0 mt-4 flex w-64 flex-col rounded-md border border-comp bg-white shadow-md absolute">
            <ul
              className={`${
                display === true ? "bg-slate-400 hover:cursor-default" : null
              }`}
            >
              {userId ? (
                <>
                  {user?.role === "user" ? (
                    <>
                      <Link to={"/user/profile"}>
                        <p className="hover:bg-slate-500 px-4 py-2 duration-300">
                          Profile
                        </p>
                      </Link>
                    </>
                  ) : null}
                  {user?.role === "admin" ? (
                    <Link to={"/dashboard/admin"}>
                      <p className="hover:bg-slate-500 px-4 py-2 duration-300">
                        Dashboard
                      </p>
                    </Link>
                  ) : null}
                  {
                    user?.role === 'trainer' ? (
                      <Link to={"/user/trainer"}>
                      <p className="hover:bg-slate-500 px-4 py-2 duration-300">
                        Dashboard - Trainer
                      </p>
                    </Link>
                    ): null
                  }
                  <button
                    onClick={handleLogout}
                    className="hover:bg-slate-500 px-4 py-2 duration-300 w-full"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to={"/auth/signup"}>
                    <p className="hover:bg-slate-500 px-4 py-2 duration-300">
                      Sign Up
                    </p>
                  </Link>
                  <hr />
                  <Link to={"/auth/signin"}>
                    <p className="hover:bg-slate-500 px-4 py-2 duration-300">
                      Sign in
                    </p>
                  </Link>
                </>
              )}
            </ul>
            {/* display hide-dylan */}
            <div className="top-0 right-0 left-0 -z-50 fixed w-full min-h-screen hover:cursor-default"></div>
          </div>
        ) : null}
      </b>
      {userId ? (
        <div className="w-8 h-8">
          <img src={user?.profile_image} alt="" />
        </div>
      ) : null}
    </button>
  );
}

export default LoginRegWind;
