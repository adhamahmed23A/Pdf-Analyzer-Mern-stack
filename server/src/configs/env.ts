import { z } from "zod";
import "dotenv/config"; // ← load .env before parsing
const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  PORT: z.coerce.number().default(5000),

  // URLs should be validated as URLs, not plain strings
  CLIENT_URL: z.string().url().default("http://localhost:4000"),
  BETTER_AUTH_URL: z.string().url().default("http://localhost:5000"),
  MONGOOSE_URL: z.string().url(),

  // Secrets must never have defaults
  BETTER_AUTH_SECRET: z.string().min(32),

  // OAuth — plain string is fine, .min(1) makes the error clearer than a generic "Required"
  GOOGLE_CLIENT_ID: z.string().min(1),
  GOOGLE_CLIENT_SECRET: z.string().min(1),
  GITHUB_CLIENT_ID: z.string().min(1),
  GITHUB_CLIENT_SECRET: z.string().min(1),

  // Resend
  GMAIL_USER: z.string().email(),
  GMAIL_APP_PASSWORD: z.string().min(1), // validate it's actually an email

  // Supabase
  SUPABASE_URL: z.string().url(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
  SUPABASE_BUCKET: z.string().min(1),

  GOOGLE_EMBEDDING_API_KEY: z.string().min(1),
  EMBEDDING_MODEL: z.string().min(1),
});

const { success, data, error } = envSchema.safeParse(process.env);

if (!success) {
  console.error("❌ Invalid environment variables:");
  console.error(JSON.stringify(error.format(), null, 2));
  process.exit(1);
}
console.info("✅ Environment variables validated");

export const env = data;
