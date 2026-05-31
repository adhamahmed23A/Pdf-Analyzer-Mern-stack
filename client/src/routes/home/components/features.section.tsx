/*
 * Imports
 */
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { FeaturesData } from "@/constants/FeaturesData";
import { FeatureCard } from "./features.card";

export const FeaturesSection = () => {
  return (
    <div className="relative w-full min-h-screen ">
      {/* Grid Pattern */}
      <GridPattern
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_70%)] opacity-[8%]",
        )}
      />
      {/* Content sits on top */}
      <div className="relative z-10 h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: "some", margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center gap-2 mb-12"
        >
          <h2 className="text-3xl font-semibold tracking-tight bg-clip-text text-transparent bg-linear-120 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 from-zinc-700 via-zinc-800 to-zinc-900">
            Everything you need to understand any PDF
          </h2>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            From students to legal professionals{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-linear-120 from-brand-color to-brand-color/90">
              Sonorous
            </span>{" "}
            makes reading documents effortless.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FeaturesData.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
