import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { AuroraText } from "@/components/ui/aurora-text";
import { cn } from "@/lib/utils";

const gradientText =
  "bg-clip-text text-transparent bg-gradient-to-r dark:from-zinc-200 dark:via-zinc-300 dark:to-zinc-300 from-zinc-700 via-zinc-800 to-zinc-900";

export const StartupHeader = () => {
  return (
    <div className="flex flex-col items-center gap-2 text-center max-w-3xl mx-auto">
      <div
        className={cn(
          "group rounded-full border text-base text-white transition-all ease-in hover:cursor-pointer  border-border bg-background/20 hover:bg-background/40 ",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span className="text-sm text-black/70 dark:text-white/50">
            🚀 Version 1.0 (still in development)
          </span>
        </AnimatedShinyText>
      </div>
      <h1
        className={`text-2xl md:text-3xl font-semibold leading-snug ${gradientText}`}
      >
        Got a{" "}
        <AuroraText
          className="text-2xl md:text-3xl font-bold"
          colors={["#2a3d99", "#6278cc", "#8fa3e8", "#4f6fd4", "#2a3d99"]}
        >
          question
        </AuroraText>{" "}
        about your PDF?
      </h1>
    </div>
  );
};
