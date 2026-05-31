/*
 * Imports
 */
import { useForm, type SubmitHandler } from "react-hook-form";
import { SignupForm } from "./components/forms/signup.form";
import type { TSignupFormInputs } from "./types/form.type";
import { signupSchema } from "./schemas/form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "./lib/auth-client";
import { toast } from "sonner";
import { useState } from "react";

export const SignupRoute = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignupFormInputs>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const Submit: SubmitHandler<TSignupFormInputs> = async ({
    email,
    password,
    username,
  }) => {
    await authClient.signUp.email(
      {
        email,
        password,
        name: username,
      },

      {
        onRequest: () => setIsPending(true),
        onResponse: () => setIsPending(false),
        onSuccess: () => {
          toast.success("Signup successful. Please verify your account.", {
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
    <SignupForm
      register={register}
      handleSubmit={handleSubmit}
      Submit={Submit}
      isLoading={isPending}
      errors={errors}
    />
  );
};
