import React from "react";
import { MembershipsStyles } from "../../helpers/MembershipsStyles/MembershipsStyles";
import { useAuthStore } from "../../store/auth/authStore";

function MembershipUCard(props: { name: string }): React.ReactNode {
  //obtengo el nombre de la membresia desde FatherComp
  const memberName = props.name;
  //!Mostrar historial de pagos
  const { user } = useAuthStore((state) => ({
  
    user: state.userData,
   
  }));
  const getStyles = (name: string) => {
    return MembershipsStyles.find((element) => element.name === name);
  };

  const style = getStyles(memberName);
  return (
    <div
      className={` rounded-sm border border-stroke bg-white h-auto transition-all duration-100 ${style?.styles}`}
    >
      <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">

        <h3 className="font-medium text-black">Your Membership</h3>
      </div>
      <img
            src={user?.profile_image}
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
      <div>
        <h1 className="p-3 h-7 font-semibold text-xl"> {style?.name}</h1>
        <p className="p-3">
          <b>{style?.description}</b>
        </p>
      </div>
    </div>
  );
}

export default MembershipUCard;
