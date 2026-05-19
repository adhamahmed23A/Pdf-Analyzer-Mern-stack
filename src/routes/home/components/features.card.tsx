/*
 * Imports
 */
import { cn } from "@/lib/utils";
import { MotionVariants } from "@/constants/MotionVariants";
import { motion } from "motion/react";
import type { LucideProps } from "lucide-react";
const { cardAnimation } = MotionVariants;

/*
 * Types
 */
type Props = {
  feature: {
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    description: string;
    title: string;
  };
  index: number;
};
export const FeatureCard = ({ feature, index }: Props) => {
  return (
    <>
      <motion.div
        key={feature.title}
        variants={cardAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: "some", margin: "-60px" }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
        }}
        className={cn(
          "group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer",
          "bg-[#0d1230]/80 backdrop-blur-xl",
          "border border-[#3852b4]/20 hover:border-[#3852b4]/45",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
          "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_32px_rgba(56,82,180,0.12)]",
        )}
      >
        {/* Icon */}
        <div
          className={cn(
            "w-11 h-11 rounded-xl flex items-center justify-center mb-4",
            "bg-[#3852b4]/15 border border-[#3852b4]/25",
            "shadow-[0_0_12px_rgba(56,82,180,0.15)]",
            "group-hover:shadow-[0_0_20px_rgba(56,82,180,0.35)] transition-all duration-300",
          )}
        >
          <feature.icon size={20} className="text-[#6278cc]" />
        </div>

        {/* Text */}
        <h3 className="text-sm font-semibold text-white mb-2 tracking-tight">
          {feature.title}
        </h3>
        <p className="text-xs text-zinc-500 leading-relaxed">
          {feature.description}
        </p>
      </motion.div>
    </>
  );
};
