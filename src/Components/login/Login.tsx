
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
const {loginWithRedirect} =  useAuth0()

return <button className="m-3" onClick={()=> loginWithRedirect()}>Login</button>}

