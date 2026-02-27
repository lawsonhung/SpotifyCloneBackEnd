// Imports
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/conn.js";
import { globalErr, logReq } from "./middleware/middleware.js";
import userRoutes from "./routes/userRoutes.js";

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
connectDB();

// Middleware
app.use(express.json());
app.use(logReq);

// Routes
app.use("/api/users", userRoutes);

// Global middleware
app.use(globalErr);

// Listener
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));