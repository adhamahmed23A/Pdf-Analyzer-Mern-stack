import { cn } from "@/lib/utils";
import type { LucideProps } from "lucide-react";

/*
 * Types
 */
type Props = {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;

  wrapperClassName?: string;
  iconClassName?: string;
  size?: number;
};
export const GlowingIcon = ({
  Icon,
  iconClassName,
  wrapperClassName,
  size = 20,
}: Props) => {
  return (
    <div
      className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center",
        "bg-[#3852b4]/15 border border-[#3852b4]/25",
        "shadow-[0_0_12px_rgba(56,82,180,0.15)]",
        "group-hover:shadow-[0_0_18px_rgba(56,82,180,0.3)] transition-all duration-300",
        wrapperClassName,
      )}
    >
      <Icon size={size} className={cn("text-[#6278cc] ", iconClassName)} />
    </div>
  );
};
