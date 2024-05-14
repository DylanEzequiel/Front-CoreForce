import { ChangeEvent, useState } from "react";

type FormEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

interface inputProps {
  name?: string;
  email?: string;
  address?:string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
  birthdate?: string;
  gender?: string
  height?: string;
  weight?: string,
  profile_image?: string;
  signup_date?: string;
  
}




export const useForm = ( initialForm = {}  ) => {

  const [formState, setFormState] = useState<inputProps>( initialForm );
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});


  const onInputChange = (event: FormEvent) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });

    setTouched({ ...touched, [event.target.name]: true });
  };



  const onResetForm = () => {
    setFormState( initialForm )
  }


  return {
    ...formState, // => const username, const password
    formState,  // => { username:, password:  }
    onInputChange, // => 
    onResetForm,
    touched
  };
};