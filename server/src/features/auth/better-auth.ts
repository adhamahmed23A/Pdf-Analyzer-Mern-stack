import { betterAuth } from "better-auth";
import { env } from "../../configs/env.js";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
const {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  BETTER_AUTH_SECRET,
  BETTER_AUTH_URL,
  CLIENT_URL,
} = env;

export const createAuth = (mongoClient: MongoClient) => {
  const db = mongoClient.db();

  return betterAuth({
    baseURL: BETTER_AUTH_URL,
    secret: BETTER_AUTH_SECRET,

    trustedOrigins: [CLIENT_URL],

    database: mongodbAdapter(db, { client: mongoClient }),

    emailAndPassword: {
      enabled: true,
    },

    socialProviders: {
      google: {
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
      },
      github: {
        clientId: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
      },
    },

    session: {
      expiresIn: 60 * 60 * 24 * 30,
      updateAge: 60 * 60 * 24,
    },

    onAPIError: {
      onError(error) {
        console.error("[BETTER-AUTH] API Error:", error);
      },
    },
    account: {
      accountLinking: {
        enabled: false,
      },
    },
  });
};

export type Auth = ReturnType<typeof createAuth>;
