import { Request, Response } from "express";
import UserModel from "../models/user.model";


const UserController = {
    getallUsers: async (req: Request, res: Response) => {
        try {
            const users = await UserModel.getallUsers();
            res.json(users).status(200);
        }catch (error) {
            res.status(500).json({ message: 'Error fetching users', error });
        }
    },

    getUser: async (req: Request, res: Response) => {
        try {
           const user = await UserModel.getUser(req.body); 
           res.json(user);
        }catch (error) {
            res.status(500).json({ message: 'Error fetching user', error });
        }
    },

    createUser: async (req: Request, res: Response) => {
        try {
            const user = await UserModel.createUser(req.body);
            res.json(user);
            
        }catch (error) {
            res.status(500).json({ message: 'Error creating user', error });
        }
    },

    updateUser: async (req: Request, res: Response) => {
        try {
            const user = await UserModel.updateUser(req.body);
            res.json({ message : 'User updated'}).status(201);
            
        }catch (error) {
            res.status(500).json({ message: 'Error updating user', error });
        }
    },

    deleteUser: async (req: Request, res: Response) => {
        try {
            const user = await UserModel.deleteUser(req.body);
            res.status(200).json({ message : 'User deleted' });
            
        }catch(error) {
            res.status(500).json({ message: 'Error deleting user', error });
        }
    }
    

}

export default UserController