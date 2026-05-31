/*
 * Imports
 */
import { useForm, type SubmitHandler } from "react-hook-form";
import { LoginForm } from "./components/forms/login.form";
import type { TLoginFormInputs } from "./types/form.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./schemas/form.schema";
import { authClient } from "./lib/auth-client";
import { useState } from "react";
import { toast } from "sonner";
export const LoginRoute = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const Submit: SubmitHandler<TLoginFormInputs> = async ({
    email,
    password,
  }) => {
    await authClient.signIn.email(
      {
        email,
        password,
      },

      {
        onRequest: () => setIsPending(true),
        onResponse: () => setIsPending(false),
        onSuccess: () => {
          toast.success("Logged in successfully", {
            position: "top-center",
          });
        },

        onError: (ctx) => {
          toast.error(ctx.error.message, {
            position: "top-center",
          });
        },
      },
    );
  };
  return (
    <>
      <LoginForm
        register={register}
        handleSubmit={handleSubmit}
        Submit={Submit}
        isLoading={isPending}
        errors={errors}
      />
    </>
  );
};
