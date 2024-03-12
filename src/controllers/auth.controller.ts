import { Request, Response } from "express";
import User from "../schema/user";
import { encryptPassword, ComparePassword } from "../helpers/crypt";
import { createToken } from "../helpers/jwt";



const AuthController = {
    login: async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: "user not exists" })
            }

            if (user.password) {
                const match = ComparePassword(password, user.password);
               !match ? res.status(404).json({ message: "user not exists" }) : res.status(200).json({ message: "login success" ,user })
            } 
            // const token = createToken(user._id + "");
            //  const data = {
            //     token: token,
            //     user: {
            //         _id: user._id,
            //         name: user.name,
            //         email: user.email
            //         }
            // }
            //     res.status(200).json({ message: "User logged in", data: data });
            


        } catch (error) {
            res.status(500).json({ message: 'Error logging in'})
        }


    },


    register: async (req: Request, res: Response) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ message: "user already exists" })
            }

            const { name, email, password } = req.body;
            const registeredUser = await User.create({ name, email, password: encryptPassword(password) });
            registeredUser ? res.status(400).json({ message: "user create exists" }) : res.status(201).json(registeredUser)
        } catch (error) {
            res.status(500).json({ message: 'Error registering', error })
        }

    }
}

export default AuthController