import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { getMongoClient } from "../../../configs/db.js";
import mongoose from "mongoose";
import { MongoClient } from "mongodb";

export const createAuth = (client: MongoClient) => {
  const db = client.db();
  return betterAuth({
    database: mongodbAdapter(db, { client }),
    user: {
      additionalFields: {
        role: {
          type: ["USER", "ADMIN"],
          input: false,
          defaultValue: "USER",
        },
      },
    },

    emailAndPassword: {
      enabled: true,
    },
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      },
      github: {
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      },
    },
    emailVerification: {},
    session: {
      expiresIn: 60 * 60 * 24 * 5,
      updateAge: 60 * 60 * 24,
    },
    account: {
      accountLinking: {
        enabled: false,
      },
    },
    advanced: {
      database: {
        generateId: () => new mongoose.Types.ObjectId().toString(),
      },
    },
    trustedOrigins: ["http://localhost:4000"],
  });
};

export type Auth = ReturnType<typeof createAuth>;
