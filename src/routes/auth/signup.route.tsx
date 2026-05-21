/*
 * Imports
 */
import { useForm, type SubmitHandler } from "react-hook-form";
import { SignupForm } from "./components/forms/signup.form";
import type { TSignupFormInputs } from "./types/form.types";

export const SignupRoute = () => {
  const {
    register,
    handleSubmit,
    formState: { isLoading },
  } = useForm<TSignupFormInputs>();

  const Submit: SubmitHandler<TSignupFormInputs> = (data) => {
    console.log(data);
  };
  return (
    <SignupForm
      register={register}
      handleSubmit={handleSubmit}
      Submit={Submit}
      isLoading={isLoading}
    />
  );
};
