import { MongoClient } from "mongodb";
import mongoose from "mongoose";

export const connectDB = async () => {
  const MONGOOSE_URL = process.env.MONGOOSE_URL;
  if (!MONGOOSE_URL) {
    console.error("MONGOOSE_URL is not defined in environment variables");
    process.exit(1);
  }
  try {
    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ MongoDB disconnected");
    });

    await mongoose.connect(MONGOOSE_URL);
    return mongoose.connection.getClient() as unknown as MongoClient;
  } catch (error) {
    console.error("❌Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
export const getMongoClient = () => {
  return mongoose.connection.getClient() as unknown as MongoClient;
};
