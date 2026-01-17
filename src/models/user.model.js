import mongoose from "mongoose";

// Define the schema for the user
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  }
});

// Export model (collection name: users)
const User = mongoose.model("users", userSchema);
export default User;
