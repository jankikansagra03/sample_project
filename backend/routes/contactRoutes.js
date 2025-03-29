const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

// Insert data into MongoDB
router.post("/add-contact", async (req, res) => {
  try {
    const { name, email, mobile, subject, message, isAnswered, answer } =
      req.body;

    if (!name || !email || !mobile || !subject || !message) {
      return res
        .status(400)
        .json({ error: "All required fields must be provided." });
    }

    // Create new user
    const newInquiry = new Contact({
      name,
      email,
      mobile,
      subject,
      message,
      isAnswered: isAnswered || false,
      answer: answer || null,
    });

    // Save user to database
    await newInquiry.save();
    res
      .status(201)
      .json({ message: "Inquiry added successfully", inquiry: newInquiry });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// Retrieve all inquiries
router.get("/all-inquiries", async (req, res) => {
  try {
    const inquiries = await Contact.find();
    res.status(200).json({ inquiries });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
