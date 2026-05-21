/*
 * Imports
 */
import { FieldGroup } from "@/components/ui/field";
import { WrapperForm } from "../wrapper.form";
import { motion } from "motion/react";
import { CustomInput } from "../custom.input";
import type {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import type { TSignupFormInputs } from "../../types/form.types";
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
}: Props) => {
  return (
    <>
      <WrapperForm type="signup">
        {/* Form */}
        <div className="w-full">
          <form onSubmit={handleSubmit(Submit)}>
            {/* Form */}
            <motion.div variants={item} className="w-full">
              <FieldGroup className="flex flex-col gap-4">
                <CustomInput
                  register={register}
                  type="text"
                  id="username"
                  htmlFor="username"
                  label="Username"
                />
                <CustomInput
                  register={register}
                  type="email"
                  id="email"
                  htmlFor="email"
                  label="Email"
                />
                <div className="flex justify-between items-center gap-4">
                  <CustomInput
                    register={register}
                    type="password"
                    id="password"
                    htmlFor="password"
                    label="Password"
                  />
                  <CustomInput
                    register={register}
                    type="password"
                    id="confirmPassword"
                    htmlFor="confirmPassword"
                    label="Confirm Password"
                  />
                </div>
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
