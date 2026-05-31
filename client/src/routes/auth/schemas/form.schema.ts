import { z } from "zod";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),

  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signupSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must not exceed 20 characters"),

  email: z.string().min(1, "Email is required").email("Invalid email address"),

  password: z.string().min(6, "Password must be at least 6 characters"),
});
export { loginSchema, signupSchema };
