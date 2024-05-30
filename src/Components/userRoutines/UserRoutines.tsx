import React from "react";
import { useAuthStore } from "../../store/auth/authStore";
import PDFViewer from "../routineComp/RoutineComp";

import { FaLocationArrow } from "react-icons/fa";
import { useNavigate } from "react-router";


function UserRoutines(): React.ReactElement {
  const { user } = useAuthStore((state) => ({
    userId: state.userId,
    user: state.userData,
    token: state.token,
  }));

  const navigate = useNavigate();
  const routines = user?.user_routines;
  const membershipName = user?.user_membership[0].membership.name;
  console.log(routines);

  const handleNavigate = () => {
    if(membershipName === 'Free' || membershipName === 'Silver') {
      navigate('/user/update-plan')
      return
    }


    navigate('/routines');
  }

  return (
    <div>
      {routines?.length !== 0 ? (
        <>
          <h2 className="font-semibold text-5xl text-center text-slate-700">
            My Routines
          </h2>
          <p className="my-2 font-semibold text-3xl text-center text-gray-500">
            What are you working on?
          </p>
          <div className="">
            {user
              ? user.user_routines.map((routine, index) => (
                  <PDFViewer {...routine.routine} key={index}></PDFViewer>
                ))
              : null}
          </div>
        </>
      ) : (
        <div className="flex justify-center flex-col max-w-2xl mx-auto">
          <div className="mb-10">
            <h2 className="font-semibold text-5xl text-slate-700 text-center">
              {membershipName === "Free" || membershipName == 'Silver'
                ? "Upgrade your membership"
                : "You don't have routines"}
            </h2>
            <p className="font-semibold text-center text-gray-600 text-xl">
              Continue enjoying other content
            </p>
          </div>
          <img src="/img/notroutine.svg" alt="" className="object-cover" />
          <button onClick={handleNavigate} className="flex flex-col justify-center bg-white hover:bg-orange-500 shadow-lg p-4 rounded-full transition-all duration-75 hover:cursor-pointer ease-in mt-7">
            <div className="flex justify-center m-auto rounded-full text-center items-center gap-5">
              <FaLocationArrow size={20} className="text-primary" />
              <h3 className="font-semibold text-center text-primary">
              {membershipName === "Free" || membershipName == 'Silver'
                ? "Upgrade Plan"
                : "Go to routines"}
              </h3>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

export default UserRoutines;
