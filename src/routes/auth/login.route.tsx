/*
 * Imports
 */
import { useForm, type SubmitHandler } from "react-hook-form";
import { LoginForm } from "./components/forms/login.form";
import type { TLoginFormInputs } from "./types/form.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./schemas/form.schema";
export const LoginRoute = () => {
  const {
    register,
    handleSubmit,
    formState: { isLoading, errors },
  } = useForm<TLoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

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
        errors={errors}
      />
    </>
  );
};
