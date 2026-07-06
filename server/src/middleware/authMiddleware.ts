import { Request, Response, NextFunction } from "express";

import { verifyAccessToken } from "../config/jwt";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        role: string;
      };
    }
  }
}

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "No token provided",
    });
  }

  const token = authHeader.replace("Bearer ", "");

  {
    /**try {
    req.user = verifyAccessToken(token);

    next();
  } catch {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }*/
  }

  try {
    console.log("Incoming token:", token);

    const decoded = verifyAccessToken(token);

    console.log("Decoded:", decoded);

    req.user = decoded;

    next();
  } catch (error) {
    console.error("JWT ERROR:", error);

    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
}
