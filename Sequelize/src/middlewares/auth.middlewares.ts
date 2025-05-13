import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import { TokenPayLoad, verifyJWT } from "./JWTAction.middlewares";
import { User, UserRole } from "../models/User.models";

dotenv.config();

declare global {
  namespace Express {
    interface Request {
      user?: TokenPayLoad;
    }
  }
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Token not found" });
    return;
  }

  try {
    const decodedUser = verifyJWT(token);

    if (!decodedUser) {
      res.status(401).json({ message: "Cannot verify token" });
      return;
    }

    req.user = decodedUser;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthenticated" });
    return;
  }
};

export const authorizeRole = (allowedRoles: UserRole[])  => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !req.user.role) {
      res.status(401).json({ message: "Forbidden" });
      return;
    }

    if (!allowedRoles.includes(req.user.role)) {
      res.status(403).json({ message: "Forbidden" });
      return;
    }

    next();
  }
}