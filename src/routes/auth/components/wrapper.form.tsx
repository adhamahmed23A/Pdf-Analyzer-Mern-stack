/*
 * Imports
 */
import { MotionVariants } from "@/constants/MotionVariants";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { HeaderAuth } from "./header.auth";
import { SocialButtons } from "./social.buttons";
import Divider from "@/components/ui/divider";
import { FooterAuth } from "./footer.auth";

/*
 * Constants
 */
const {
  staggerAuthPageAnimation: { container, item },
} = MotionVariants;

/*
 * Types
 */
type Props = {
  className?: string;
  children: React.ReactNode;
  type: "login" | "signup";
};
export const WrapperForm = ({ className, children, type }: Props) => {
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
            <HeaderAuth type={type} />
          </motion.div>

          {/* Social Buttons */}
          <motion.div variants={item} className="w-full">
            <SocialButtons />
          </motion.div>

          {/* Divider */}
          <motion.div variants={item} className="w-full">
            <Divider variant="solid" className="mt-1 mb-1">
              Or continue with
            </Divider>
          </motion.div>
          {/* Rendering the form */}
          {children}
          {/* Footer */}
          <motion.div variants={item}>
            <FooterAuth type={type} />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
