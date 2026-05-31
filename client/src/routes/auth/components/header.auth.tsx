/*
 * Imports
 */
import { GlowingIcon } from "@/components/common/glowing.icon";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";

/*
 * Types
 */

type Props = {
  type: "login" | "signup";
};
export const HeaderAuth = ({ type }: Props) => {
  return (
    <>
      <div className="w-full flex flex-col items-center gap-2 ">
        <GlowingIcon Icon={User} />
        <div className="flex flex-col gap-0.5 text-center">
          <h1 className={cn("font-bold text-lg text-gradient ")}>
            {type === "login" ? "Welcome back" : "Create a new account"}
          </h1>
        </div>
      </div>
    </>
  );
};
