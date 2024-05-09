import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
  const { loginWithPopup } = useAuth0();
  return (
    <div>
      <button className="m-3" onClick={() => loginWithPopup()}>
        Login
      </button>
    </div>
  );
};
