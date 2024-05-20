import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/auth/authStore";

export const Galleries = () => {
  const { user } = useAuthStore((state) => ({
    userId: state.userId,
    user: state.userData,
  }));
  return (
    <main className="mx-auto py-20 min-h-screen container">
      <h1 className="py-16 font-semibold text-5xl text-center text-slate-700">
        live the experience
      </h1>

      <div className="flex flex-wrap -m-1 md:-m-2">
        <div className="flex flex-wrap md:w-1/2">
          <div className="p-1 md:p-2 sm:w-1/2">
            <img
              alt="gallery"
              className="block rounded-lg w-full h-full object-center object-cover"
              src="/img/workout1.jpg"
            /> 
          </div>
          <div className="p-1 md:p-2 sm:w-1/2">
            <img
              alt="gallery"
              className="block rounded-lg w-full h-full object-center object-cover"
              src="/img/workout2.jpg"
            />
          </div>
          <div className="p-1 md:p-2 w-full">
            <img
              alt="gallery"
              className="block rounded-lg w-full h-full object-center object-cover"
              src="/img/workout3.jpg"
            />
          </div>
        </div>
        <div className="flex flex-wrap md:w-1/2">
          <div className="p-1 md:p-2 w-full">
            <img
              alt="gallery"
              className="block rounded-lg w-full h-full object-center object-cover"
              src="/img/workout4.jpg"
            />
          </div>
          <div className="p-1 md:p-2 sm:w-1/2">
            <img
              alt="gallery"
              className="block rounded-lg w-full h-full object-center object-cover"
              src="/img/workout5.jpg"
            />
          </div>
          <div className="p-1 md:p-2 sm:w-1/2">
            <img
              alt="gallery"
              className="block rounded-lg w-full h-full object-center object-cover"
              src="/img/workout6.jpg"
            />
          </div>
        </div>
        {user && <Link to="/Ratepage" className="py-10 text-3xl text-center text-slate-700">
          Click here to send a review  
        </Link>}
      </div>
    </main>
  );
};
