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
import type { TSignupFormInputs } from "../../types/form.type";
import { MotionVariants } from "@/constants/MotionVariants";
import { SubmitButton } from "../submit.button";

/*
 * Types
 */

type Props = {
  register: UseFormRegister<TSignupFormInputs>;
  handleSubmit: UseFormHandleSubmit<TSignupFormInputs, TSignupFormInputs>;
  Submit: SubmitHandler<TSignupFormInputs>;
  isLoading?: boolean;
  errors: FieldErrors<TSignupFormInputs>;
};

/*
 * Constants
 */
const {
  staggerAuthPageAnimation: { item },
} = MotionVariants;

export const SignupForm = ({
  register,
  handleSubmit,
  Submit,
  isLoading,
  errors,
}: Props) => {
  return (
    <>
      <WrapperForm type="signup">
        {/* Form */}
        <div className="w-full">
          <form noValidate onSubmit={handleSubmit(Submit)}>
            {/* Form */}
            <motion.div variants={item} className="w-full">
              <FieldGroup className="flex flex-col gap-2">
                <CustomInput
                  register={register}
                  type="text"
                  id="username"
                  htmlFor="username"
                  label="Username"
                  error={errors.username?.message}
                />
                <CustomInput
                  register={register}
                  type="email"
                  placeholder="@example.com"
                  id="email"
                  htmlFor="email"
                  label="Email"
                  error={errors.email?.message}
                />
                <CustomInput
                  register={register}
                  type="password"
                  id="password"
                  htmlFor="password"
                  label="Password"
                  error={errors.password?.message}
                />
              </FieldGroup>
            </motion.div>

            {/* Signup Button */}
            <motion.div variants={item} className="w-full mt-4">
              <SubmitButton type="signup" disabled={isLoading} />
            </motion.div>
          </form>
        </div>
      </WrapperForm>
    </>
  );
};
