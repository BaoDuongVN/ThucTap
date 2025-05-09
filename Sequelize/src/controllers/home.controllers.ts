import {
  findAllUsers,
  createNewUser,
  getUserById,
  updateUserById,
  deleteUserById,
  updateUserByUsername,
} from "../services/user.services";
import { Request, Response } from "express";

export const findAllUsersController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await findAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createNewUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, userName, password } = req.body;
    const user = await createNewUser(email, userName, password);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const user = await getUserById(Number(id));
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUserByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { email, userName, password } = req.body;
    const [affectedCount, updatedUsers] = await updateUserById(Number(id), {
      email,
      userName,
      password,
    });
    res.status(200).json(updatedUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUserByUsernameController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userName } = req.params;
    const { email, password, role } = req.body;
    const [affectedCount, updatedUsers] = await updateUserByUsername(userName, {
      email,
      password,
      role
    });
    res.status(200).json(updatedUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteUserByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedCount = await deleteUserById(Number(id));
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
