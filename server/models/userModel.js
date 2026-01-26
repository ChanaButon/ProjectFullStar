import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 2
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user"
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
