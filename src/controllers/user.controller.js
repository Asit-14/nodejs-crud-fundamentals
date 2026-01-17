import User from "../models/user.model.js";

// CREATE USER
export const createUser = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        message: "User already exists."
      });
    }

    // Create and save user
    const user = new User(req.body);
    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error"
    });
  }
};

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (users.length === 0) {
      return res.status(404).json({
        message: "Users not found."
      });
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error"
    });
  }
};

// UPDATE USER
export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;

    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({
        message: "User not found."
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error"
    });
  }
};

// DELETE USER
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({
        message: "User not found."
      });
    }

    await User.findByIdAndDelete(id);

    res.status(200).json({
      message: "User deleted successfully."
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error"
    });
  }
};
