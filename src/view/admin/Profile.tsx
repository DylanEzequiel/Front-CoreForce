import { useAuthStore } from "../../store/auth/authStore";

export const Profile = () => {
  const { user } = useAuthStore((state) => ({
    userId: state.userId,
    user: state.userData,
  }));

  return (
    <div className="overflow-hidden rounded-md border-slate-700 bg-white">
      <div className="relative z-20 h-35 md:h-65">
        <img
          src="/img/cover-01.png"
          alt=""
          className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover"
        />
      </div>

      <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11">
        <div className="relative z-30 mx-auto -mt-20 h-32 w-full max-w-32 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
          <div className="relative drop-shadow-2">
            <img src={user?.profile_image} alt={user?.name} />
          </div>
        </div>
        <div className="mt-4 text-primary">
          <h3 className="mb-1.5 text-2xl font-semibold ">{user?.name}</h3>
          <p className="font-medium ">{user?.role}</p>
          <div className="mx-auto mt-4 mb-5 grid max-w-96 grid-cols-1 rounded-md border border-stroke py-2.5 shadow-sm ">
            <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 xsm:flex-row">
              <span className="text-sm">Email: </span>
              <span className="font-semibold text-black ">{user?.email}</span>
            </div>
          </div>

          <div className="mx-auto mt-4 mb-5 grid max-w-96 grid-cols-1 rounded-md border border-stroke py-2.5 shadow-sm ">
            <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 xsm:flex-row">
              <span className="text-sm">Address: </span>
              <span className="font-semibold text-black ">{user?.address}</span>
            </div>
          </div>

          <div className="mx-auto mt-4 mb-5 grid max-w-96 grid-cols-1 rounded-md border border-stroke py-2.5 shadow-sm ">
            <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 xsm:flex-row">
              <span className="text-sm">Phone: </span>
              <span className="font-semibold text-black ">{user?.phoneNumber}</span>
            </div>
          </div>

          <div className="mx-auto mt-4 mb-5 grid max-w-96 grid-cols-1 rounded-md border border-stroke py-2.5 shadow-sm ">
            <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 xsm:flex-row">
              <span className="text-sm">Gender: </span>
              <span className="font-semibold text-black ">{user?.gender}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
