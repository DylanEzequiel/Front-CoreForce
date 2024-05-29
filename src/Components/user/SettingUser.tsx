import { useEffect, useState } from "react";
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
  useEffect(()=>{
    fetchUserData()
  },[])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { user_membership, user_routines, ...resto } = userInfo;
    console.log(user_membership);
    console.log(user_routines)

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
                    onChange={(e) =>{
                      const selectedDate = e.target.value;
                      const [year, month, day] = selectedDate.split('-');
                      const birth = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day) +1))
                      setUserInfo({
                        ...userInfo,
                        birthdate: birth,
                      })
                    }
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
            {/* <div className="p-7">
              <form action="#">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full w-14 h-14">
                    <img src={user?.profile_image} alt="User" />
                  </div>
                  <div>
                    <span className="mb-1.5 text-black">Edit your photo</span>
                  </div>
                </div>

                <div
                  id="FileUpload"
                  className="block relative border-primary bg-gray mb-5 px-4 py-4 sm:py-7 border border-dashed rounded w-full cursor-pointer appearance-none"
                >
                  <input
                    type="file"
                    accept="image/*"
                    className="z-50 absolute inset-0 opacity-0 m-0 p-0 w-full h-full cursor-pointer outline-none"
                    
                  />
                  <div className="flex flex-col justify-center items-center space-y-3">
                    <span className="flex justify-center items-center border-stroke dark:border-strokedark bg-white dark:bg-boxdark border rounded-full w-10 h-10">
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
                  <button className="bg-primary px-6 py-2 rounded-sm w-full md:w-auto text-white" >
                    Save
                  </button>
                </div>
              </form> 
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
