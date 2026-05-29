import LogoWithoutText from "@/assets/svg/logo-without-text";
import { AuroraText } from "@/components/ui/aurora-text";

export const EmptyConversation = () => {
  const gradientText =
    "bg-clip-text text-transparent bg-gradient-to-r dark:from-zinc-200 dark:via-zinc-300 dark:to-zinc-300 from-zinc-700 via-zinc-800 to-zinc-900";

  return (
    <div className="max-w-full mt-16 text-center flex gap-2 justify-center items-center">
      <div>
        <LogoWithoutText />
      </div>
      <h1 className={`text-lg  font-semibold  ${gradientText}`}>
        Now you can ask any{" "}
        <AuroraText
          className="text-lg  font-bold"
          colors={["#2a3d99", "#6278cc", "#8fa3e8", "#4f6fd4", "#2a3d99"]}
        >
          question
        </AuroraText>{" "}
      </h1>
    </div>
  );
};
