const express = require("express");
const multer = require("multer");
const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const User = require("../models/User");
const router = express.Router();
require("dotenv").config();

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/profile_pictures"); // Save images here
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});
const upload = multer({ storage: storage });

// Email Transporter Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your password or app password
  },
});

// Register User & Send Email
router.post("/add-user", upload.single("profilePic"), async (req, res) => {
  try {
    const {
      fullname,
      email,
      mobile,
      password,
      gender,
      hobbies,
      state,
      role,
      status,
    } = req.body;

    if (!fullname || !email || !mobile || !password || !gender || !state) {
      return res.status(400).json({ error: "All required fields must be provided." });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered." });
    }

    // Hash Password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Generate Verification Token
    const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Create User
    const newUser = new User({
      fullname,
      email,
      mobile,
      password, //:hashedPassword,
      gender,
      hobbies: hobbies || [],
      state,
      profilePic: req.file ? req.file.filename : null,
      role: role || "user",
      status: status || "Inactive",
      verificationToken,
    });

    await newUser.save();

    // Send Verification Email
    const verificationLink = `http://localhost:5000/api/users/verify-email/${verificationToken}`;
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Verify Your Email",
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
    <h2 style="color: #333; text-align: center;">Welcome to Our Platform, ${fullname}!</h2>
    
    <p style="color: #555; font-size: 16px;">
      Thank you for signing up! Please verify your email to activate your account.
    </p>

    <div style="text-align: center; margin: 20px 0;">
      <a href="${verificationLink}" 
         style="display: inline-block; padding: 12px 20px; background-color: #007bff; color: #fff; 
                text-decoration: none; font-size: 16px; border-radius: 5px;">
      Verify Your Email
      </a>
    </div>

    <p style="color: #777; font-size: 14px;">
      If you did not sign up, you can safely ignore this email. This verification link will expire in 24 hours.
    </p>

    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">

    <p style="text-align: center; color: #666; font-size: 14px;">
      Regards, <br> <strong>Your Company Team</strong>
    </p>
  </div>
`,
    });

    res.status(201).json({
      message: "User added successfully. Check your email to verify your account.",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Email Verification Route
router.get("/verify-email/:token", async (req, res) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      return res.redirect(
        "http://localhost:5173/login?status=error&message=Invalid or expired token."
      );
    }

    user.status = "Active";
    user.verificationToken = null;
    await user.save();

    return res.redirect(
      "http://localhost:5173/login?status=success&message=Email verified successfully! You can now log in."
    );
  } catch (error) {
    return res.redirect(
      "http://localhost:5173/login?status=error&message=Verification failed or token expired."
    );
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ status: "error", message: "Email is not registered!" });
    }

    // Verify password
    if (password !== user.password) {
      return res.status(400).json({ status: "error", message: "Incorrect password!" });
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    // Send token & user details
    res.status(200).json({
      message: "Login successful",
      status: "success",
      token,
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
});

// Retrieve all users
router.get("/all-users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// View User by ID (GET)
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user details",error:error.message});
  }
});

// Update User by ID (PUT)
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error updating user",error:error.message });
  }
});

// Delete User by ID (DELETE)
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user" ,error:error.message});
  }
});

module.exports = router;
