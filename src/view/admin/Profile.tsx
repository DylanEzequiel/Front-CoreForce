import { useAuthStore } from "../../store/auth/authStore";

export const Profile = () => {
  const { user } = useAuthStore((state) => ({
    userId: state.userId,
    user: state.userData,
  }));
  console.log(user)

  return (
    <div className="border-slate-700 bg-white rounded-md overflow-hidden">
      <div className="relative z-20 h-35 md:h-65">
        <img
          src="/img/cover-01.png"
          alt=""
          className="rounded-tl-sm rounded-tr-sm w-full h-full object-cover"
        />
      </div>

      <div className="px-4 pb-6 lg:pb-8 xl:pb-11 text-center">
        <div className="relative z-30 bg-white/20 backdrop-blur mx-auto -mt-20 p-1 sm:p-3 rounded-full w-full max-w-32 sm:max-w-44 h-32 sm:h-44">
          <div className="relative drop-shadow-2">
            <img src={user?.profile_image} alt={user?.name} />
          </div>
        </div>
        <div className="mt-4 text-primary">
          <h3 className="mb-1.5 font-semibold text-2xl">{user?.name}</h3>
          <p className="font-medium">{user?.role}</p>
          <div className="border-stroke grid grid-cols-1 shadow-sm mx-auto mt-4 mb-5 py-2.5 border rounded-md max-w-96">
            <div className="flex xsm:flex-row flex-col justify-center items-center gap-1 border-stroke px-4 border-r">
              <span className="text-sm">Email: </span>
              <span className="font-semibold text-black">{user?.email}</span>
            </div>
          </div>

          <div className="border-stroke grid grid-cols-1 shadow-sm mx-auto mt-4 mb-5 py-2.5 border rounded-md max-w-96">
            <div className="flex xsm:flex-row flex-col justify-center items-center gap-1 border-stroke px-4 border-r">
              <span className="text-sm">Address: </span>
              <span className="font-semibold text-black">{user?.address}</span>
            </div>
          </div>

          <div className="border-stroke grid grid-cols-1 shadow-sm mx-auto mt-4 mb-5 py-2.5 border rounded-md max-w-96">
            <div className="flex xsm:flex-row flex-col justify-center items-center gap-1 border-stroke px-4 border-r">
              <span className="text-sm">Phone: </span>
              <span className="font-semibold text-black">{user?.phoneNumber}</span>
            </div>
          </div>

          <div className="border-stroke grid grid-cols-1 shadow-sm mx-auto mt-4 mb-5 py-2.5 border rounded-md max-w-96">
            <div className="flex xsm:flex-row flex-col justify-center items-center gap-1 border-stroke px-4 border-r">
              <span className="text-sm">Gender: </span>
              <span className="font-semibold text-black">{user?.gender}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
