import express from "express";
import {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser
} from "../controllers/user.controller.js";

const router = express.Router();

// Routes
router.post("/create", createUser);
router.get("/getallusers", getAllUsers);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;
