/*
 * Imports
 */

import { Button } from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { HeaderAuth } from "./components/header.auth";
import { SocialButtons } from "./components/social.buttons";
import { MotionVariants } from "@/constants/MotionVariants";
import { motion } from "motion/react";
import { FooterAuth } from "./components/footer.auth";

const {
  staggerAuthPageAnimation: { container, item },
} = MotionVariants;

export const SignupRoute = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "min-h-screen flex justify-center items-center px-4",
        className,
      )}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={cn(
          "w-full max-w-sm p-6",
          "bg-zinc-900/30 backdrop-blur-lg rounded-xl",
          "border border-white/10",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.5)]",
        )}
      >
        <div className="flex flex-col gap-3 items-center">
          {/* Header */}
          <motion.div variants={item} className="w-full ">
            <HeaderAuth type="signup" />
          </motion.div>

          {/* Social Buttons */}
          <motion.div variants={item} className="w-full">
            <SocialButtons />
          </motion.div>

          {/* Divider */}
          <motion.div variants={item} className="w-full">
            <Divider variant="solid" className="mt-1 mb-1">
              Or enter your info below
            </Divider>
          </motion.div>

          {/* Form */}
          <motion.div variants={item} className="w-full">
            <FieldGroup className="flex flex-col gap-4">
              <Field>
                <FieldLabel htmlFor="username" className="text-gradient">
                  Username
                </FieldLabel>

                <Input
                  id="username"
                  type="text"
                  className="rounded-sm bg-zinc-100 dark:bg-zinc-900/60"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email" className="text-gradient">
                  Email
                </FieldLabel>

                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  className="rounded-sm bg-zinc-100 dark:bg-zinc-900/60"
                />
              </Field>
              <div className="flex justify-between items-center gap-4">
                <Field>
                  <FieldLabel htmlFor="password" className="text-gradient">
                    Password
                  </FieldLabel>

                  <Input
                    id="password"
                    type="password"
                    className="rounded-sm bg-zinc-100 dark:bg-zinc-900/60"
                  />
                </Field>
                <Field>
                  <FieldLabel
                    htmlFor="confirmPassword"
                    className="text-gradient"
                  >
                    Confirm password
                  </FieldLabel>

                  <Input
                    id="confirmPassword"
                    type="password"
                    className="rounded-sm bg-zinc-100 dark:bg-zinc-900/60"
                  />
                </Field>
              </div>
            </FieldGroup>
          </motion.div>

          {/* Signup Button */}
          <motion.div variants={item} className="w-full mt-4">
            <Button
              type="submit"
              variant={"default"}
              size={"lg"}
              className="w-full rounded-sm bg-brand-color hover:bg-brand-color/90 font-normal text-sm text-white cursor-pointer"
            >
              Sign up
            </Button>
          </motion.div>

          {/* Footer */}
          <motion.div variants={item}>
            <FooterAuth type="signup" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
