import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated, isLoading }: any = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(user, isAuthenticated)
  return (
    
    isAuthenticated && (
      <div>
        <img src={user?.picture} alt={user?.name} />
        <h2>{user?.name}</h2>
        <p>Email: {user?.email}</p>
      </div>
    )
  );
};
