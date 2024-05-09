import { useEffect, useState } from "react";
import {
  RegisterErrors,
  validateRegister,
} from "../../helpers/ValidateRegister";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  const {
    onInputChange,
    formState,
    email,
    password,
    name,
    address,
    phoneNumber,
    confirmPassword,
    birthdate,
    gender,
    touched,
  } = useForm({
    name: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
    confirmPassword: "",
    birthdate: "",
    gender: "",
  });

  const [errors, setErrors] = useState<RegisterErrors>({});
  const validationErrors = validateRegister(formState);

  useEffect(() => {
    // Validar solo cuando el campo ha sido tocado
    if (Object.keys(touched).length > 0) {
      setErrors(validationErrors);
    }
  }, [formState, touched]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      return;
    }

    console.log(formState);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign up to your account
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div className="w-full relative">
            <input
              id="name"
              type="text"
              name="name"
              placeholder=" "
              className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
                errors.name ? "border-red-500" : "border-neutral-500"
              }`}
              onChange={onInputChange}
              value={name}
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
            <label
              htmlFor="name"
              className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Name
            </label>
          </div>

          <div className="w-full relative">
            <input
              id="email"
              type="email"
              name="email"
              placeholder=" "
              className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
                errors.email ? "border-red-500" : "border-neutral-500"
              }`}
              value={email}
              onChange={onInputChange}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
            <label
              htmlFor="email"
              className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Email
            </label>
          </div>

          <div className="w-full relative">
            <input
              id="address"
              type="text"
              name="address"
              placeholder=" "
              className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
                errors.address ? "border-red-500" : "border-neutral-500"
              }`}
              onChange={onInputChange}
              value={address}
            />
            {errors.address && (
              <span className="text-red-500">{errors.address}</span>
            )}
            <label
              htmlFor="address"
              className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Address
            </label>
          </div>

          <div className="w-full relative">
            <input
              id="phoneNumber"
              type="number"
              name="phoneNumber"
              placeholder=" "
              className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
                errors.phoneNumber ? "border-red-500" : "border-neutral-500"
              }`}
              onChange={onInputChange}
              value={phoneNumber}
            />
            {errors.phoneNumber && (
              <span className="text-red-500">{errors.phoneNumber}</span>
            )}
            <label
              htmlFor="phoneNumber"
              className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Phone
            </label>
          </div>

          <div className="w-full relative">
            <input
              id="birthdate"
              type="date"
              name="birthdate"
              placeholder=" "
              className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
                errors.birthdate ? "border-red-500" : "border-neutral-500"
              }`}
              onChange={onInputChange}
              value={birthdate}
            />
            {errors.birthdate && (
              <span className="text-red-500">{errors.birthdate}</span>
            )}
            <label
              htmlFor="birthdate"
              className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Birthdate
            </label>
          </div>

          <select
            id="gender"
            name="gender"
            className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4 ${
              errors.gender ? "border-red-500" : "border-neutral-500"
            }`}
            onChange={onInputChange}
            value={gender}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <span className="text-red-500">{errors.gender}</span>
          )}
          <label
            htmlFor="gender"
            className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Gender
          </label>

          <div className="w-full relative">
            <input
              id="password"
              type="password"
              name="password"
              placeholder=" "
              className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
                errors.password ? "border-red-500" : "border-neutral-500"
              }`}
              onChange={onInputChange}
              value={password}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password}</span>
            )}
            <label
              htmlFor="password"
              className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Password
            </label>
          </div>

          <div className="w-full relative">
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder=" "
              className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${
                errors.confirmPassword ? "border-red-500" : "border-neutral-500"
              }`}
              onChange={onInputChange}
              value={confirmPassword}
            />
            {errors.confirmPassword && (
              <span className="text-red-500">{errors.confirmPassword}</span>
            )}
            <label
              htmlFor="confirmPassword"
              className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Repeat password
            </label>
          </div>

          <button
            type="submit"
            className="transition duration-200 bg-secondary focus:shadow-sm  focus:ring-opacity-50 text-white w-full py-3 rounded-sm text-lg shadow-sm hover:shadow-md font-semibold text-center inline-block"
          >
            Register
          </button>

          <div className="text-neutral-500 text-center mt-4 font-light">
            <div className="flex flex-row justify-center items-center gap-2">
              <p>Already have an account?</p>
              <Link
                to={"/auth/login"}
                className="text-neutral-100 cursor-pointer hover:underline"
              >
                Log in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
