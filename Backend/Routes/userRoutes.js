import express from "express";
export const userRouter = express.Router();
import {
  createUser,
  loginUser,
  deleteUser,
  getUserById,
} from "../Controllers/userController.js";

userRouter.post("/signup", createUser);
userRouter.post("/login", loginUser);
userRouter.get("/:userId", getUserById);
userRouter.delete("/delete/:userId", deleteUser);
