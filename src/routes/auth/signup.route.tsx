/*
 * Imports
 */
import { useForm, type SubmitHandler } from "react-hook-form";
import { SignupForm } from "./components/forms/signup.form";
import type { TSignupFormInputs } from "./types/form.type";
import { signupSchema } from "./schemas/form.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const SignupRoute = () => {
  const {
    register,
    handleSubmit,
    formState: { isLoading, errors },
  } = useForm<TSignupFormInputs>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const Submit: SubmitHandler<TSignupFormInputs> = (data) => {
    console.log(data);
  };
  return (
    <SignupForm
      register={register}
      handleSubmit={handleSubmit}
      Submit={Submit}
      isLoading={isLoading}
      errors={errors}
    />
  );
};
