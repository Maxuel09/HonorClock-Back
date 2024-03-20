import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../helpers/jwt";
import UserModel from "../models/user.model";

type JwtPayload = {
  id: string;
  iat: number;
  exp: number;
};

async function isAdmin(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization || "";
    const jwt = token.split(" ").pop() || "";
    const jwtPayload = await verifyToken(jwt) as JwtPayload;
    if (!jwtPayload) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const id = jwtPayload.id;
    const user = await UserModel.getUser(id);
    
    if (user?.role !== "admin") {
      return res.status(401).json({ message: "Unauthorized" });      
    }
    next();


  } catch (err) {
    res.status(500).json({ message: "Error" });
  }

}
export default isAdmin;
