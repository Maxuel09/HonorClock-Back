import Product from "../schema/product";
import { Request, Response } from "express";

const UserProduct = {
    getallUsers: async () => {
        return await Product.find();
    },

    getUser: async (user: any) => {
        return await Product.findOne(user)
    },

    createUser: async (user: any) => {
        return await Product.create(user)
    },

    updateUser: async (user: any) => {
        return await Product.findOneAndUpdate({ _id: user._id }, user, { new: true })
    },

    deleteUser: async (user: any) => {
        return await Product.findOneAndDelete({ _id: user._id })
    }
}

export default UserProduct