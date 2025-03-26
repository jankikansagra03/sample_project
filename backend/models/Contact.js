const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true }, // Changed from Number to String
  subject: { type: String, required: true },
  message: { type: String, required: true },
  isAnswered: { type: Boolean, default: false, required: false },
  answer: { type: String, default: null, required: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", ContactSchema);
