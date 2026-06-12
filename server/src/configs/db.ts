import mongoose from "mongoose";
import { env } from "./env.js";

const { MONGOOSE_URL } = env;

export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("[DB] ✅ Connected to MongoDB"),
    );
    mongoose.connection.on("error", (error) =>
      console.log("[DB] ❌ Error connecting to MongoDB:", error),
    );

    await mongoose.connect(MONGOOSE_URL);
  } catch (error) {
    console.error("[DB] ❌ Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export const getMongoClient = () => mongoose.connection.getClient();
