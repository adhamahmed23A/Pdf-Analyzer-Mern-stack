/*
 * Imports
 */
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { AuroraText } from "@/components/ui/aurora-text";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, ArrowUpRight, UploadIcon } from "lucide-react";
import { motion } from "motion/react";
import { NavLink } from "react-router";
import { MotionVariants } from "@/constants/MotionVariants";
import { Mockup } from "./mockup";

const {
  staggerAnimation: { container, item },
} = MotionVariants;

export const HeroSection = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-6xl mx-auto flex flex-col items-center gap-6 "
    >
      {/* Animated Shiny Text */}
      <motion.div variants={item}>
        <div
          className={cn(
            "group rounded-full border text-base text-white transition-all ease-in hover:cursor-pointer  border-brand-color bg-brand-color/20 hover:bg-brand-color/40",
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span className="text-sm text-black/50 dark:text-white/50">
              ✨ Get answers in seconds
            </span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </motion.div>

      {/* Hero Title */}
      <motion.div variants={item}>
        <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-linear-120 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-500 from-zinc-700 via-zinc-800 to-zinc-900 text-center">
          Talk to your PDF using
          <br />
          AI-Powered{" "}
          <AuroraText
            colors={["#2a3d99", "#6278cc", "#8fa3e8", "#4f6fd4", "#2a3d99"]}
          >
            PDF Intelligence
          </AuroraText>
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.div variants={item}>
        <TextAnimate
          animation="fadeIn"
          by="line"
          as="p"
          className="text-base lg:text-lg text-zinc-500 dark:text-zinc-400 leading-tight max-w-lg mb-6 text-center"
        >
          Upload a document — ask questions in plain English — and get accurate
          answers powered by AI — in seconds.
        </TextAnimate>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        variants={item}
        className="flex justify-center items-center gap-2"
      >
        <Button
          className="bg-brand-color hover:bg-brand-color/90 px-4 font-normal text-sm text-white cursor-pointer"
          variant={"default"}
          size={"lg"}
        >
          <NavLink to={"/upload"} className={"flex gap-2 items-center"}>
            <UploadIcon />
            Upload Your PDF Now
          </NavLink>
        </Button>
        <Button
          variant={"link"}
          className="flex gap-0.5 hover:text-zinc-300 duration-200"
        >
          <NavLink to={"/login"}>About Us</NavLink>
          <ArrowUpRight className="mb-2" />
        </Button>
      </motion.div>
      <motion.div variants={item} className="w-full relative ">
        <Mockup />
      </motion.div>
    </motion.div>
  );
};
