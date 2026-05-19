import type { Variants } from "motion/react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.6, // waits for navbar animation
      staggerChildren: 0.15, // each child 150ms after previous
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut" as const, // smooth spring-like ease
    },
  },
};
export const MotionVariants = {
  staggerAnimation: {
    container,
    item,
  },
};
