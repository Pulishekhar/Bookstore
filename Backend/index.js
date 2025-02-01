import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
dotenv.config();

// Allow only your frontend URL
const frontendURL = process.env.FRONTEND_URL || "http://localhost:3000";  // Add your frontend deployed link in .env
app.use(cors({
  origin: frontendURL,
}));

app.use(express.json());

const PORT = process.env.PORT || 4000;
const MongoDBURI = process.env.MongoDBURI;

// Connect to MongoDB
try {
  mongoose.connect(MongoDBURI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error:", error);
}

// Your routes
app.use("/books", bookRoute);
app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
