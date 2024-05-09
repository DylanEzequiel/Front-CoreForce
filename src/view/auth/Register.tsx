import { RegisterForm } from "../../Components/form/RegisterForm";

export const Register = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center justify-start pt-18 px-6 py-8 mx-auto">
        <div className={"text-center py-3"}>
          <h1 className="font-bold text-5xl">Welcome to CoreForce</h1>
          <p className="font-light text-neutral-500 mt-2">Create an account!</p>
        </div>

        <RegisterForm />
      </div>
    </div>
  );
};
