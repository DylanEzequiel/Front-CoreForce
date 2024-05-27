import { useState } from "react";
import { useAuthStore } from "../../store/auth/authStore";
import { fornatDateEdit } from "../../helpers/date/formatDate";
import clienteAxios from "../../service/axiosService";
import Swal from "sweetalert2";
import MembershipUCard from "../UserCard/MembershipUCard";

export const SettingUser = () => {
  const { user, userId, token } = useAuthStore((state) => ({
    userId: state.userId,
    user: state.userData,
    token: state.token,
  }));
  const { fetchUserData } = useAuthStore();

  const [userInfo, setUserInfo] = useState(user!);
console.log(  user!.user_membership[0].membership.name!
)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { user_membership, ...resto } = userInfo;
    console.log(user_membership);

    try {
      await clienteAxios.put(`/users/${userId}`, resto, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "User update successfully!",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        fetchUserData();
      }, 1600);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto container min-h-screen">
      <div className="flex flex-col justify-center md:flex-row gap-5 flex-wrap items-center py-6">
        <div>
          <h2 className="text-center text-5xl text-slate-700 font-semibold">
            Welcome to Your Dashboard
          </h2>
          <p className="text-gray-500 mt-2 font-semibold">
            Here you can manage your routines, track your progress, and stay
            updated with your fitness plan.
          </p>
        </div>

      </div>

      <div className="grid grid-cols-5 gap-8 mt-4">
        <div className="col-span-5 xl:col-span-3">
          <div className="rounded-sm border border-stroke bg-white shadow-md">
            <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
              <h3 className="font-medium text-black">Personal Information</h3>
            </div>

            <div className="p-7">
              <form onSubmit={handleSubmit}>
                <div className="mb-5 flex flex-col gap-5 sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm font-medium text-black"
                    >
                      Full Name
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-stroke py-3 pl-11 pr-4 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="your name"
                      value={userInfo?.name}
                      onChange={(e) =>
                        setUserInfo({
                          ...userInfo,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="phoneNumber"
                      className="mb-3 block text-sm font-medium text-black"
                    >
                      Phone Number
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-stroke py-3 pl-11 pr-4 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="123456"
                      value={userInfo?.phoneNumber}
                      onChange={(e) =>
                        setUserInfo({
                          ...userInfo,
                          phoneNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm font-medium text-black"
                  >
                    Email
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-stroke py-3 pl-11 pr-4 text-black focus:border-primary focus-visible:outline-none"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="example@mail.com"
                    value={userInfo?.email}
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        email: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="address"
                    className="mb-3 block text-sm font-medium text-black"
                  >
                    Address
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-stroke py-3 pl-11 pr-4 text-black focus:border-primary focus-visible:outline-none"
                    type="text"
                    name="address"
                    id="address"
                    placeholder="street 992"
                    value={userInfo?.address}
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        address: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="birthdate"
                    className="mb-3 block text-sm font-medium text-black"
                  >
                    Birthdate
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-stroke py-3 pl-11 pr-4 text-black focus:border-primary focus-visible:outline-none"
                    type="date"
                    name="birthdate"
                    id="birthdate"
                    value={fornatDateEdit(userInfo!.birthdate)}
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        birthdate: new Date(e.target.value),
                      })
                    }
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="address"
                    className="mb-3 block text-sm font-medium text-black"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className={`w-full rounded border border-stroke bg-stroke py-3 pl-11 pr-4 text-black focus:border-primary focus-visible:outline-none`}
                    value={userInfo?.gender}
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        gender: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-5 flex flex-col gap-5 sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="weight"
                      className="mb-3 block text-sm font-medium text-black"
                    >
                      Weight
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-stroke py-3 pl-11 pr-4 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="weight"
                      id="weight"
                      placeholder="120kg"
                      value={userInfo?.weight ? userInfo?.weight : ""}
                      onChange={(e) =>
                        setUserInfo({
                          ...userInfo,
                          weight: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="height"
                      className="mb-3 block text-sm font-medium text-black"
                    >
                      Height
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-stroke py-3 pl-11 pr-4 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="height"
                      id="height"
                      placeholder="150cm"
                      value={userInfo?.height ? userInfo.height : ""}
                      onChange={(e) =>
                        setUserInfo({
                          ...userInfo,
                          height: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-10">
                  <button className="px-6 py-2 bg-primary text-white rounded-sm w-full md:w-auto">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-span-5 xl:col-span-2">
          <div className="rounded-sm border border-stroke bg-white shadow-sm mb-2">
            <MembershipUCard name={user!.user_membership[0].membership.name!} />
          </div>

          <div className="rounded-sm border border-stroke bg-white shadow-sm">
            <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
              <h3 className="font-medium text-black">Your Photo</h3>
            </div>
            <div className="p-7">
              <form action="#">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-14 w-14 rounded-full">
                    <img src={userInfo?.profile_image} alt="User" />
                  </div>
                  <div>
                    <span className="mb-1.5 text-black ">Edit your photo</span>
                  </div>
                </div>

                <div
                  id="FileUpload"
                  className="relative mb-5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4  sm:py-7"
                >
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                  />
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                          fill="#3C50E0"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                          fill="#3C50E0"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                          fill="#3C50E0"
                        />
                      </svg>
                    </span>
                    <p>
                      <span className="text-primary">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                    <p>(max, 800 X 800px)</p>
                  </div>
                </div>

                <div className="flex justify-end mt-10">
                  <button className="px-6 py-2 bg-primary text-white rounded-sm w-full md:w-auto">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
