import { InferAttributes } from "sequelize";
import User, { UserRole } from "../models/User.models";

// Get all users
export const findAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

// Create new user
export const createNewUser = async (
  email: string,
  userName: string,
  password: string,
) => {
  const user = await User.create({ email, userName, password});
  return user;
};

// Get user by id
export const getUserById = async (id: number): Promise<User | null> => {
  const user = await User.findByPk(id);
  return user;
};

// Get user by email
export const getUserByEmail = async (email: string): Promise<User | null> => {
  const user = await User.findOne({ where: { email } });
  return user;
};

// Update user by id
export const updateUserById = async (
  id: number,
  userDataToUpdate: Partial<InferAttributes<User>>
): Promise<[number, User[]]> => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error("User not found");
  }

  const [affectedCount, updatedUsers] = await User.update(userDataToUpdate, {
    where: { id },
    returning: true,
  });
  console.log("Test");
  return [affectedCount, updatedUsers];
};

// Update user by userName
export const updateUserByUsername = async (
  userName: string,
  userDataToUpdate: Partial<InferAttributes<User>>
): Promise<[number, User[]]> => {
  const user = await User.findOne({ where: { userName } });
  if (!user) {
    throw new Error("User not found");
  }

  const [affectedCount, updatedUsers] = await User.update(userDataToUpdate, {
    where: { userName },
    returning: true,
  });
  return [affectedCount, updatedUsers];
};

// Delete user by id
export const deleteUserById = async (id: number): Promise<number> => {
  const deletedCount = await User.destroy({ where: { id } });

  if (deletedCount === 0) {
    throw new Error("User not found");
  }

  return deletedCount;
};
