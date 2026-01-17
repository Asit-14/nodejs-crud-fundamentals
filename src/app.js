// Import required modules
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Import routes
import userRoutes from "./routes/user.route.js";

// Load environment variables FIRST
dotenv.config();

// Create express app
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Read env variables
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

// Routes
app.use("/api/user", userRoutes);

// Connect MongoDB and start server
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database connected successfully.");

    app.listen(PORT, () => {
      console.log(`Server is running on port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database connection failed:", error.message);
  });
