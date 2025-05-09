import { NextFunction, Request, Response } from "express";
import { UserRole } from "../models/User.models";
import { PayLoadToken } from "./JWTAction.middlewares";
import { verifyJWT } from "./JWTAction.middlewares";
import dotenv from "dotenv";
dotenv.config();

declare global {
  namespace Express {
    interface Request {
      user?: PayLoadToken;
    }
  }
}

const secretKey = process.env.JWT_SECRET;

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({
      message: "Access token not found",
    });
    return;
  }

  const decodedUser = verifyJWT(token);

  if (!decodedUser) {
    res.status(401).json({
      message: "Access token is invalid",
    });
    return;
  }

  req.user = decodedUser;
  next();
};

export const authorizeRole = (allowedRoles: UserRole[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !req.user.role) {
      res.status(401).json({
        message: "Forbidden",
      });
      return;
    }

    if (!allowedRoles.includes(req.user.role)) {
      res.status(403).json({
        message: "Forbidden",
      });
      return;
    }

    next();
  };
};
