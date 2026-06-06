import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import { env } from "./env.js";

const { MONGOOSE_URL } = env;

let mongoClient: MongoClient | null = null;

export const connectDB = async () => {
  try {
    // Setup mongoose connection listeners
    mongoose.connection.on("connected", () => {
      console.log("[DB] ✅ Mongoose connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("[DB] ❌ Mongoose connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("[DB] ⚠️ Mongoose disconnected");
    });

    // Connect mongoose
    await mongoose.connect(MONGOOSE_URL);

    // Create and connect MongoDB client for better-auth
    mongoClient = new MongoClient(MONGOOSE_URL);
    await mongoClient.connect();
    console.log("[DB] ✅ MongoDB client for auth connected successfully");

    return mongoClient;
  } catch (error) {
    console.error("[DB] ❌ Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export const getMongoClient = (): MongoClient => {
  if (!mongoClient) {
    throw new Error("MongoDB client not initialized. Call connectDB() first.");
  }
  return mongoClient;
};
