import { Request, Response } from "express";
import User from "../schema/user";
import { hashPassword, vertifyPassword } from "../utils/crypt";


const AuthController = {
    login: async (req: Request, res: Response) => {
        try {
        res.send('soy el login')    
        } catch (error) {
            res.status(500).json({ message: 'Error logging in', error })
        }

    },


    register: async (req: Request, res: Response) => {
        try {
            res.send('soy el register')
        } catch (error) {
            res.status(500).json({ message: 'Error registering', error })
        }
        
    }
}

export default AuthController