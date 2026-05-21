/*
 * Imports
 */
import { FieldGroup } from "@/components/ui/field";
import { WrapperForm } from "../wrapper.form";
import { motion } from "motion/react";
import { CustomInput } from "../custom.input";
import type {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import type { TLoginFormInputs } from "../../types/form.type";
import { MotionVariants } from "@/constants/MotionVariants";
import { SubmitButton } from "../submit.button";

/*
 * Types
 */

type Props = {
  register: UseFormRegister<TLoginFormInputs>;
  handleSubmit: UseFormHandleSubmit<TLoginFormInputs, TLoginFormInputs>;
  Submit: SubmitHandler<TLoginFormInputs>;
  isLoading?: boolean;
  errors: FieldErrors<TLoginFormInputs>;
};

/*
 * Constants
 */
const {
  staggerAuthPageAnimation: { item },
} = MotionVariants;

export const LoginForm = ({
  register,
  handleSubmit,
  Submit,
  isLoading,
  errors,
}: Props) => {
  return (
    <>
      <WrapperForm type="login">
        {/* Login Form */}
        <div className="w-full">
          <form noValidate onSubmit={handleSubmit(Submit)}>
            <motion.div variants={item} className="w-full">
              <FieldGroup className="flex flex-col gap-2">
                <CustomInput
                  register={register}
                  type="email"
                  placeholder="@example.com"
                  id="email"
                  htmlFor="email"
                  label="Email"
                  error={errors.email?.message}
                />
                <div className="flex flex-col gap-2">
                  <CustomInput
                    register={register}
                    type="password"
                    id="password"
                    htmlFor="password"
                    label="Password"
                    error={errors.password?.message}
                  />
                  <a
                    href="#"
                    className="ml-auto text-sm text-muted-foreground/60 underline-offset-4 hover:underline hover:text-muted-foreground duration-200"
                  >
                    Forgot your password?
                  </a>
                </div>
              </FieldGroup>
            </motion.div>

            {/* Login Button */}
            <motion.div variants={item} className="w-full mt-4">
              <SubmitButton type="login" disabled={isLoading} />
            </motion.div>
          </form>
        </div>
      </WrapperForm>
    </>
  );
};
