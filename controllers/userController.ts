import { type RequestHandler } from "express";
import User from "../models/userSchema.js";

const createUser: RequestHandler = async (req, res) => {
  let newUser = await User.insertOne(req.body);

  res.json(newUser);
}

const getAll: RequestHandler = async (_req, res) => {
  let allUsers = await User.find({});

  res.json(allUsers);
}

const patchOne: RequestHandler = async (req, res) => {
  let updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedUser) return res.status(404).json({ error: "User not found" });

  res.json(updatedUser);
}

const deleteOne: RequestHandler = async (req, res) => {
  let deletedUser = await User.findByIdAndDelete(req.params.id);

  if (!deletedUser) return res.status(404).json({ error: "User not found" });

  res.json(deletedUser);
}

const getOne: RequestHandler = async (req, res) => {
  let foundUser = await User.findById(req.params.id);

  if (!foundUser) return res.status(404).json({ error: "User not found" });

  res.json(foundUser);
}

export default { createUser, getAll, patchOne, deleteOne, getOne };