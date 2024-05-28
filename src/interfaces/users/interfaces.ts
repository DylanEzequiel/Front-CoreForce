export interface Users {
  id: string;
  name: string;
  email: string;
  profile_image: null;
  phoneNumber: string;
  birthdate: Date;
  signup_date: string;
  gender: string;
  address: string;
  height: string;
  weight: string;
  role: string;
  isActive: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profile_image: undefined;
  phoneNumber: string;
  birthdate: Date;
  signup_date: string;
  gender: string;
  address: string;
  height: string;
  weight: string;
  role: string;
  user_membership: any[];
  user_routines: any[];
}
