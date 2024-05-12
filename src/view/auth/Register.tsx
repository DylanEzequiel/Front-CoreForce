import { useAuth0 } from "@auth0/auth0-react";
import { RegisterForm } from "../../Components/form/RegisterForm";

export const Register = () => {
  const { loginWithPopup } = useAuth0();
  return (
    <div className="py-20">
      <div className="flex flex-col justify-start items-center mx-auto px-6 py-8 pt-18">
        <div className={"text-center py-3"}>
          <h1 className="font-bold text-5xl">Welcome to CoreForce</h1>
          <p className="mt-2 font-light text-neutral-500">Create an account!</p>
        </div>

        <RegisterForm />
        <button className="m-3 text-black" onClick={() => loginWithPopup()}>
        Login with Auth0
      </button>
      </div>
    </div>
  );
};
