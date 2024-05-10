export interface Users {
  id:            string;
  name:          string;
  email:         string;
  profile_image: null;
  phoneNumber:   string;
  birthdate:     Date;
  signup_date:   string;
  gender:        string;
  address:       string;
  height:        string;
  weight:        string;
  role:          string;
}

export interface User {
  id:              string;
  name:            string;
  email:           string;
  profile_image:   null;
  phoneNumber:     string;
  birthdate:       Date;
  signup_date:     string;
  gender:          string;
  address:         string;
  height:          string;
  weight:          string;
  role:            string;
  user_membership: any[];
}
