/*
 * Imports
 */
import { useForm, type SubmitHandler } from "react-hook-form";
import { LoginForm } from "./components/forms/login.form";
import type { TLoginFormInputs } from "./types/form.types";

export const LoginRoute = () => {
  const {
    register,
    handleSubmit,
    formState: { isLoading },
  } = useForm<TLoginFormInputs>();

  const Submit: SubmitHandler<TLoginFormInputs> = (data) => {
    console.log(data);
  };
  return (
    <>
      <LoginForm
        register={register}
        handleSubmit={handleSubmit}
        Submit={Submit}
        isLoading={isLoading}
      />
    </>
  );
};
