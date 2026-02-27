// Imports
import express from "express";
import dotenv from "dotenv";

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware

// Routes

// Global middleware

// Listener
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));