import React, { useState } from "react";
import { MembershipsStyles } from "../../helpers/MembershipsStyles/MembershipsStyles";
import { useAuthStore } from "../../store/auth/authStore";
import clienteAxios from "../../service/axiosService";
import { MdCancelPresentation } from "react-icons/md";

function MembershipUCard(props: { name: string }): React.ReactNode {
  //obtengo el nombre de la membresia desde FatherComp
  const [memberName,setMemberName]=useState(props.name)
  //!Mostrar historial de pagos
  const { user } = useAuthStore((state) => ({
    user: state.userData,
  }));
  const { fetchUserData } = useAuthStore();
  const getStyles = (name: string) => {
    return MembershipsStyles.find((element) => element.name === name);
  };

  const style = getStyles(memberName);

  function handleCancel(){
    clienteAxios.put(`/payments/${user?.id}` )
    .then(res=>{setMemberName(res.data.membership_Name)
      fetchUserData()
    })
    .catch(err=>console.log(err))
  }

  return (
    <div
      className={` rounded-sm border border-stroke bg-white h-auto transition-all duration-100 ${style?.styles}`}
    >
      <div className="flex justify-between border-stroke dark:border-strokedark px-7 py-4 border-b">

        <h3 className="font-medium text-black text-lg">Your Membership</h3>
        {memberName!=="Free"?<div className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded-md">
          <MdCancelPresentation className="" size={25} onClick={handleCancel}> Cancel</MdCancelPresentation>
        </div>:null}
      </div>
      <img
            src={user?.profile_image}
            alt=""
            className="dark:bg-gray-500 mx-auto rounded-full w-32 h-32 aspect-square"
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
