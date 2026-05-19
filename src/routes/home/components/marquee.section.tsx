/*
 * Imports
 */
import { DotPattern } from "@/components/ui/dot-pattern";
import { Marquee } from "@/components/ui/marquee";
import { TrustedByData } from "@/constants/MarqueeData";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
export const MarqueeSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{
          amount: "some",
          margin: "0px 0px -40px 0px",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full relative overflow-hidden"
      >
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)] opacity-10",
          )}
        />
        <Marquee pauseOnHover className="[--duration:40s]">
          {TrustedByData.map((card) => (
            <div
              key={card.label}
              className={cn(
                "group w-[150px] h-[150px] rounded-2xl transition-all duration-300 hover:cursor-pointer hover:-translate-y-1",
                "bg-[#0d1230]/80 backdrop-blur-xl",
                "border border-[#3852b4]/60 hover:border-[#3852b4]",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
              )}
            >
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-4">
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    "bg-[#3852b4]/15 border border-[#3852b4]/25",
                    "shadow-[0_0_12px_rgba(56,82,180,0.15)]",
                    "group-hover:shadow-[0_0_18px_rgba(56,82,180,0.3)] transition-all duration-300",
                  )}
                >
                  <card.icon size={20} className="text-[#6278cc]" />
                </div>

                <span className="text-xs font-medium text-center text-[#8fa3e8] leading-tight px-1">
                  {card.label}
                </span>

                <span className="text-sm font-semibold text-center text-[#8fa3e8] leading-tight">
                  {card.count}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </motion.div>
    </>
  );
};
