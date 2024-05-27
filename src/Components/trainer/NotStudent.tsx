import { RiUserAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const NotStudent = () => {
  return (
    <div className="flex justify-center flex-col max-w-2xl mx-auto">
      <div className="mb-10">
        <h2 className="font-semibold text-5xl text-slate-700 text-center">
          No Student Added
        </h2>
        <p className="font-semibold text-center text-gray-600 text-xl">
          Please add student to continue
        </p>
      </div>
      <img src="/img/add-user.svg" alt="" className="object-cover" />
      <Link
        to="/user/trainer/add-student"
        className="flex flex-col justify-center bg-white hover:bg-green-500 shadow-lg p-4 rounded-full transition-all duration-75 hover:cursor-pointer ease-in mt-7"
      >
        <div className="flex justify-center m-auto rounded-full text-center items-center gap-5">
          <RiUserAddFill size={20} className="text-primary" />
          <h3 className="font-semibold text-center text-primary">
            Add a student
          </h3>
        </div>
      </Link>
    </div>
  );
};
