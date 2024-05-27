import { UserStore } from "../../store/auth/authStore"

export function GetUserMembership(user:UserStore){
    const membership=user?.user_membership.filter((membership)=>membership.is_active ===true)
    console.log(membership)
    return membership[0]
}