import mongoose from "mongoose";
import validator from "validator";
const UserSchema = new mongoose({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    minlength: 5,
    maxlength: 20,
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Please enter your name"],
    minlength: 5,
    maxlength: 20,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter your name"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide the valid email",
    },
  },
  password: {
    type: String,
    trim: true,
    required: [true, "Please enter your password"],
    minlength: 6,
  },
  location: {
    type: String,
    trim: true,
    required: [true, "Please enter your name"],
    maxlength: 20,
    default: "my city",
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
