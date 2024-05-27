import { userModel } from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  const { name, email, password, age, gender } = req.body;
  try {
    if (!name || !email || !password || !age || !gender)
      return res.status(403).json({ error: "Incomplete input fields" });

    const user = await userModel.findOne({ email });
    if (user) return res.status(403).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      age,
      gender,
    });

    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.SECRET_KEY
    );
    await newUser.save();
    return res
      .status(201)
      .cookie("token", token)
      .json({ message: "Registration Successful", user: newUser, token });
  } catch (error) {
    return res.status(500).json({ error: "internal server error" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      return res.status(403).json({ error: "Incomplete input fields" });

    const user = await userModel.findOne({ email });
    if (!user) return res.status(401).json({ error: "User does not exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ error: "Invalid email and password" });

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.SECRET_KEY
    );

    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({ user, token, message: "user login successful" });
  } catch (error) {
    return res.status(500).json({ error: "internal server error" });
  }
};

export const getUserById = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await userModel.findById(userId);
    if (!user) return res.status(404).json({ error: "user not found" });

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: "internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const deletedUser = await userModel.findByIdAndDelete(userId);
    if (!deletedUser) return res.status(404).json({ error: "user not found" });
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "internal server error" });
  }
};
