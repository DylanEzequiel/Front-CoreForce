import { useState } from "react";
import { useAuthStore } from "../../store/auth/authStore";
import { fornatDateEdit } from "../../helpers/date/formatDate";
import clienteAxios from "../../service/axiosService";
import Swal from "sweetalert2";
import MembershipUCard from "../UserCard/MembershipUCard";
import { GetUserMembership } from "../../helpers/getactivemembership/getMembership";
import UploadPFP from "../UploadPFP/UploadPFP";

export const SettingUser = () => {
  const { user, userId, token } = useAuthStore((state) => ({
    userId: state.userId,
    user: state.userData,
    token: state.token,
  }));
  const userMembership=GetUserMembership(user!)
  sessionStorage.setItem("UserMembership",JSON.stringify(userMembership))
  const { fetchUserData } = useAuthStore();

  const [userInfo, setUserInfo] = useState(user!);
console.log(  user!.user_membership[0].membership.name!
)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { user_membership, user_routines, ...resto } = userInfo;
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
    <div className="mx-auto min-h-screen container">
      <div className="flex md:flex-row flex-col flex-wrap justify-center items-center gap-5 py-6">
        <div>
          <h2 className="font-semibold text-5xl text-center text-slate-700">
            Welcome to Your Dashboard
          </h2>
          <p className="mt-2 font-semibold text-gray-500">
            Here you can manage your routines, track your progress, and stay
            updated with your fitness plan.
          </p>
        </div>

      </div>

      <div className="gap-8 grid grid-cols-5 mt-4">
        <div className="col-span-5 xl:col-span-3">
          <div className="border-stroke bg-white shadow-md border rounded-sm">
            <div className="border-stroke dark:border-strokedark px-7 py-4 border-b">
              <h3 className="font-medium text-black">Personal Information</h3>
            </div>

            <div className="p-7">
              <form onSubmit={handleSubmit}>
                <div className="flex sm:flex-row flex-col gap-5 mb-5">
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="name"
                      className="block mb-3 font-medium text-black text-sm"
                    >
                      Full Name
                    </label>
                    <input
                      className="border-stroke focus:border-primary bg-stroke py-3 pr-4 pl-11 border rounded w-full text-black focus-visible:outline-none"
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
                      className="block mb-3 font-medium text-black text-sm"
                    >
                      Phone Number
                    </label>
                    <input
                      className="border-stroke focus:border-primary bg-stroke py-3 pr-4 pl-11 border rounded w-full text-black focus-visible:outline-none"
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
                    className="block mb-3 font-medium text-black text-sm"
                  >
                    Email
                  </label>
                  <input
                    className="border-stroke focus:border-primary bg-stroke py-3 pr-4 pl-11 border rounded w-full text-black focus-visible:outline-none"
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
                    className="block mb-3 font-medium text-black text-sm"
                  >
                    Address
                  </label>
                  <input
                    className="border-stroke focus:border-primary bg-stroke py-3 pr-4 pl-11 border rounded w-full text-black focus-visible:outline-none"
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
                    className="block mb-3 font-medium text-black text-sm"
                  >
                    Birthdate
                  </label>
                  <input
                    className="border-stroke focus:border-primary bg-stroke py-3 pr-4 pl-11 border rounded w-full text-black focus-visible:outline-none"
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
                    className="block mb-3 font-medium text-black text-sm"
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

                <div className="flex sm:flex-row flex-col gap-5 mb-5">
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="weight"
                      className="block mb-3 font-medium text-black text-sm"
                    >
                      Weight
                    </label>
                    <input
                      className="border-stroke focus:border-primary bg-stroke py-3 pr-4 pl-11 border rounded w-full text-black focus-visible:outline-none"
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
                      className="block mb-3 font-medium text-black text-sm"
                    >
                      Height
                    </label>
                    <input
                      className="border-stroke focus:border-primary bg-stroke py-3 pr-4 pl-11 border rounded w-full text-black focus-visible:outline-none"
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
                  <button className="bg-primary px-6 py-2 rounded-sm w-full md:w-auto text-white">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-span-5 xl:col-span-2">
          <div className="border-stroke bg-white shadow-sm mb-2 border rounded-sm">
            <MembershipUCard name={userMembership!.membership!.name!} />
          </div>

          <div className="border-stroke bg-white shadow-sm border rounded-sm">
            <div className="border-stroke dark:border-strokedark px-7 py-4 border-b">
              <h3 className="font-medium text-black">Your Photo</h3>
              <UploadPFP></UploadPFP>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
