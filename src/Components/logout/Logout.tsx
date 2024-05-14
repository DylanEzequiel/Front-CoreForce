import { useAuth0 } from "@auth0/auth0-react";


export const LogoutButton = ()=> {
      const {logout} = useAuth0()

      return <button className="m-3" onClick={()=> logout()}>Logout</button>
}