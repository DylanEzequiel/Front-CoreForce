import { useAuth0 } from "@auth0/auth0-react";
import LoginForm from "../../Components/form/LoginForm";

export const Login = () => {
  const { loginWithPopup } = useAuth0();
  return (
      <div className="py-20">
      <div className="flex flex-col justify-start items-center mx-auto px-6 py-8 pt-18">
        <div className={"text-center py-3"}>
          <h1 className="font-bold text-5xl">Welcome Back to CoreForce</h1>
          <p className="mt-2 font-light text-neutral-500">Log In With your account!</p>
        </div>

        <LoginForm></LoginForm>
      <button className="m-3 text-black" onClick={() => loginWithPopup()}>
        Login with Auth0
      </button>
        
      </div>
    </div>
    
  );
};
