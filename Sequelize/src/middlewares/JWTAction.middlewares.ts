import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { User, UserRole } from "../models/User.models";

dotenv.config();

export interface TokenPayLoad {
  id: number,
  email: string,
  userName: string,
  role: UserRole
}

const secretKey = process.env.JWT_SECRET;

if (!secretKey) {
  throw new Error("JWT_SECRET is not defined");
}

export const createJWT = (payload: TokenPayLoad): string | null => {
  const spiresIn = Number(process.env.JWT_EXPIRES_IN);
  try {
    const token = jwt.sign(payload, secretKey, {
      expiresIn: spiresIn,
    });
    return token;
  } catch (error) {
    console.log('Cannot create token',error);
    return null;
  }
};

export const verifyJWT = (token: string): TokenPayLoad | null => {
  try {
    const decodedUser = jwt.verify(token, secretKey) as TokenPayLoad;
    return decodedUser;
  } catch (error) {
    console.log('Cannot verify token',error);
    return null;
  }
}