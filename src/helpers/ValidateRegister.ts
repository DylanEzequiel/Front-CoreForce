export interface RegisterErrors {
  name?: string;
  email?: string;
  address?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
  birthdate?: string;
  gender?: string;
}

export interface EditErros {
  name?: string;
  email?: string;
  address?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
  birthdate?: string;
  gender?: string;
  role?: string;
  isActive?: boolean;
  id?: string;
}

export interface RegistrationForm {
  name?: string;
  email?: string;
  address?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
  birthdate?: string;
  gender?: string;
}

export const validateRegister = (input: RegistrationForm): RegisterErrors => {
  const errors: RegisterErrors = {};

  //* NAME
  if (!input.name!.trim()) {
    errors.name = "Please enter your name";
  } else if (input.name!.trim().length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  //* EMAIL
  if (!input.email!.trim()) {
    errors.email = "Please enter an email";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.email!.trim())) {
      errors.email = "Please enter a valid email";
    }
  }

  //* PASSWORD
  if (!input.password!.trim()) {
    errors.password = "Please enter a password";
  } else {
    if (input.password!.trim().length < 5) {
      errors.password = "Password must be at least 5 characters";
    }
  }

  //* ADDRESS
  if (!input.address!.trim()) {
    errors.address = "Please enter your address";
  } else if (input.address!.trim().length < 5) {
    errors.address = "Address must be at least 5 characters";
  }

  //* PHONE
  if (!input.phoneNumber!.trim()) {
    errors.phoneNumber = "Please enter your phone number";
  } else if (input.phoneNumber!.trim().length < 9) {
    errors.phoneNumber = "Phone number must be at least 9 characters";
  }

  //* GENDER
  if (!input.gender || input.gender.trim() === "") {
    errors.gender = "Please select your gender";
  }

  if (!input.birthdate || input.birthdate.trim() === "") {
    errors.birthdate = "Please enter your birthday";
  } else {
    // Puedes usar la librería Date de JavaScript para validar la fecha
    const birthdayDate = new Date(input.birthdate);
    const currentDate = new Date();
    if (isNaN(birthdayDate.getTime())) {
      errors.birthdate = "Please enter a valid date for your birthday";
    } else if (currentDate < birthdayDate) {
      errors.birthdate = "Birthday cannot be in the future";
    }
  }

  //* REPEAT PASSWORD
  if (!input.confirmPassword!.trim()) {
    errors.confirmPassword = "Please repeat your password";
  } else {
    if (input.confirmPassword!.trim() !== input.password!.trim()) {
      errors.confirmPassword = "Passwords do not match";
    }
  }

  return errors;
};
