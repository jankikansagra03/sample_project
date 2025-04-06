import express from "express";
const router = express.Router();

// Importing route files
import userRoutes from "./userRoutes.js"; // User-related routes
import contactRoutes from "./contactRoutes.js"; // Contact inquiries

// Use the routes
router.use("/users", userRoutes);
router.use("/contacts", contactRoutes);

// Handle 404 errors for unknown routes
router.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

export default router;
