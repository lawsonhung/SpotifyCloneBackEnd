import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionStr = process.env.MONGO_URI || "";

async function connectDB() {
  try {
    await mongoose.connect(connectionStr);

    console.log("MongoDB connected...");
  } catch (error: any) {
    console.error(error.message);
    process.exit(1);
  }
}

export default connectDB;