/*
 * Imports
 */
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

/*
 * Types
 */
type Props = {
  className?: string;
  type: "login" | "signup";
  disabled?: boolean;
};

const labels = {
  login: { idle: "Log in", loading: "Logging in" },
  signup: { idle: "Sign up", loading: "Signing up" },
};
export const SubmitButton = ({ className, type, disabled = false }: Props) => {
  const label = disabled ? labels[type].loading : labels[type].idle;
  return (
    <Button
      type="submit"
      variant={"default"}
      disabled={disabled}
      size={"lg"}
      className={cn(
        "w-full rounded-sm bg-brand-color hover:bg-brand-color/90 font-normal text-sm text-white cursor-pointer",
        "flex items-center justify-center gap-2",
        className,
      )}
    >
      {disabled && <Spinner data-icon="inline-start" />}
      {label}
    </Button>
  );
};
