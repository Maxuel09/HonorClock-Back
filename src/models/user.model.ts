import User from "../schema/user";
import { Request, Response } from "express";

export const getallusers = async (req : Request, res : Response) => {
     const users = await User.find();
     res.send(users)
}

export const createuser = async (req : Request, res : Response) => {
    const user = new User(req.body);
    await user.save();
    res.send(user)
}