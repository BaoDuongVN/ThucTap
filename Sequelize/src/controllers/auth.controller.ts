import { PayLoadToken } from "../middlewares/JWTAction.middlewares";
import { User } from "../models/User.models";
import { Request, Response } from "express";
import { createJWT, verifyJWT } from "../middlewares/JWTAction.middlewares";

async function findUserByUsername(identifier: string): Promise<User | null> {
  const user = await User.findOne({ where: { userName: identifier } });
  return user;
}

export const login = async (req: Request, res: Response) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    res.status(400).json({ message: "Missing username or password" });
    return;
  }

  try {
    const user = await findUserByUsername(userName);
    if (!user) {
      res.status(401).json({ message: "Invalid username" });
      return;
    }

    const payload: PayLoadToken = {
      id: user.id,
      email: user.email,
      userName: user.userName,
      password: user.password,
      role: user.role,
    };

    const token = createJWT(payload);

    if (token) {
      res.status(200).json({
        id: user.id,
        email: user.email,
        userName: user.userName,
        token: token,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Can't login" });
  }
};
