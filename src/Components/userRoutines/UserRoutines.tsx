import React  from 'react'
import { useAuthStore } from '../../store/auth/authStore';
import PDFViewer from '../routineComp/RoutineComp';

function UserRoutines():React.ReactElement {
    const { user } = useAuthStore((state) => ({
        userId: state.userId,
        user: state.userData,
        token: state.token,
      }));
      const routines = user?.user_routines
      console.log(routines)
  return (
    <div>
        <h2 className="font-semibold text-5xl text-center text-slate-700">
            My Routines
        </h2>
        <p className="my-2 font-semibold text-3xl text-center text-gray-500">
            What are you working on?    
        </p>
        <div className=''>
            {user?
            user.user_routines.map((routine,index)=><PDFViewer {...routine.routine} key={index}></PDFViewer>
            ):null}
        </div>
    
    </div>
  )
}

export default UserRoutines