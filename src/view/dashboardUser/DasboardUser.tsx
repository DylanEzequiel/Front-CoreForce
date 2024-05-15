
import UserCard from '../../Components/UserCard/UserCard'
import DataUserCard from '../../Components/UserCard/DataUserCard'

import { useAuthStore } from '../../store/auth/authStore'



function DasboardUser():React.ReactElement {


const { user } = useAuthStore((state) => ({
  userId: state.userId,
  user: state.userData,
}));

 

  return (
    <div className='flex flex-row flex-wrap justify-center my-24 h-screen'>
        <UserCard {...user!}></UserCard>
        <DataUserCard {...user!}></DataUserCard>
    </div>
  )
}

export default DasboardUser