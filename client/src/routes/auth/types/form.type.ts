import type z from "zod";
import type { loginSchema, signupSchema } from "../schemas/form.schema";

export type TLoginFormInputs = z.infer<typeof loginSchema>;
export type TSignupFormInputs = z.infer<typeof signupSchema>;
