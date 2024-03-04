import { Request, Response } from "express";
import {createUser, getAllUsers} from "../models/user.model";
export const getAllUsersControler = async (req : Request, res : Response) => {
    const users = await getAllUsers();
    console.log(users)
    return res.send(users)
}

export const createUserController = async (req : Request, res : Response) => {
    const user = req.body;
    const newUser = await createUser(user);
    return res.send(newUser)
}