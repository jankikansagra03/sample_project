import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true }, // Changed from Number to String
  password: { type: String, required: true },
  gender: { type: String, required: true },
  hobbies: { type: Array, required: false }, // Made optional
  state: { type: String, required: true },
  profilePic: { type: String, default: null },
  role: { type: String, default: "user" },
  status: { type: String, default: "Inactive" },
  token: { type: String, default: null, required: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", UserSchema);
