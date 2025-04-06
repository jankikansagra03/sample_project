/* eslint-disable no-undef */
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

// Serve static files (for profile pictures, etc.)
app.use('/public', express.static(path.join(__dirname, 'public')));
// app.use("/public", express.static(path.join(path.dirname(new URL(import.meta.url).pathname), "public")));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => console.error("❌ MongoDB Connection Error:", error));

// Import Main Router (Ensure `routes/index.js` exists)
import mainRouter from "./routes/index.js";
app.use("/api", mainRouter); // All routes will be prefixed with `/api`

// Default Route
app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
