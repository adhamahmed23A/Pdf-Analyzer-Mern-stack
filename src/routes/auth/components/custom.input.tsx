/*
 * Imports
 */
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

/*
 * Types
 */
type Props<TFieldValues extends FieldValues> = {
  label: string;
  placeholder?: string;
  type: string;
  id: Path<TFieldValues>;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  htmlFor: string;
  register: UseFormRegister<TFieldValues>;
  error?: string;
};

export const CustomInput = <TFieldValues extends FieldValues>({
  label,
  placeholder,
  type,
  id,
  className,
  inputClassName,
  labelClassName,
  htmlFor,
  register,
  error,
}: Props<TFieldValues>) => {
  return (
    <>
      <Field className={cn("", className)}>
        <FieldLabel
          htmlFor={htmlFor}
          className={cn("text-gradient", labelClassName)}
        >
          {label}
        </FieldLabel>

        <Input
          id={id}
          type={type}
          placeholder={error ? error : placeholder}
          className={cn(
            "rounded-sm bg-zinc-100 dark:bg-zinc-900/60 ",
            inputClassName,
            `${error && "  placeholder:text-destructive/70 "}`,
          )}
          {...register(id)}
          aria-invalid={error ? "true" : "false"}
        />
      </Field>
    </>
  );
};
