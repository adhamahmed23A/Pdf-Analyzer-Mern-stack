import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { getMongoClient } from "../../../configs/db.js";
import mongoose from "mongoose";
import { MongoClient } from "mongodb";

export const createAuth = (client: MongoClient) => {
  const db = client.db();
  return betterAuth({
    database: mongodbAdapter(db, { client }),
    emailAndPassword: {
      enabled: true,
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
