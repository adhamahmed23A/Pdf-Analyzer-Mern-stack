import type { Variants } from "motion/react";

interface IStaggerVariant {
  parentVariants: Variants;
  childVariants: Variants;
}

export const staggerVariant: IStaggerVariant = {
  parentVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        duration: 0.5,
      },
    },
    exit: { opacity: 0 },
  },
  childVariants: {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      filter: "blur(10px)",
    },
  },
};
