import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

// ✅ yaha pe .models.User check karo, na ki function call karo
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
