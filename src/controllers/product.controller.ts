import { Request, Response } from "express";
import UserProduct from "../models/user.model";


const ProductController = {
    getallUsers: async (req: Request, res: Response) => {
        const users = await UserProduct.getallUsers();
        res.send(users);
    },

    getUser: async (req: Request, res: Response) => {
        const user = await UserProduct.getUser(req.body);
        res.send(user);
    },

    createUser: async (req: Request, res: Response) => {
        const user = await UserProduct.createUser(req.body);
        res.send(user);
    },

    updateUser: async (req: Request, res: Response) => {
        const user = await UserProduct.updateUser(req.body);
        res.send(user);
    },

    deleteUser: async (req: Request, res: Response) => {
        const user = await UserProduct.deleteUser(req.body);
        res.send(user);
    }


}

export default ProductController