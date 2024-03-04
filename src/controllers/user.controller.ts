import { Request, Response } from "express";
import UserModel from "../models/user.model";


const UserController = {
    getallUsers: async (req: Request, res: Response) => {
        const users = await UserModel.getallUsers();
        res.send(users);
    },

    getUser: async (req: Request, res: Response) => {
        const user = await UserModel.getUser(req.body);
        res.send(user);
    },

    createUser: async (req: Request, res: Response) => {
        const user = await UserModel.createUser(req.body);
        res.send(user);
    },

    updateUser: async (req: Request, res: Response) => {
        const user = await UserModel.updateUser(req.body);
        res.send(user);
    },

    deleteUser: async (req: Request, res: Response) => {
        const user = await UserModel.deleteUser(req.body);
        res.send(user);
    }
    

}

export default UserController