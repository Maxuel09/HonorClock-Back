import Product from "../schema/product";
import { Request, Response } from "express";

export const getallproduct = async (req : Request, res : Response) => {
     const products = await Product.find();
     res.send(products)
}

export const createproduct = async (req : Request, res : Response) => {
    const productCreate = new Product(req.body);
    await productCreate.save();
    res.send(Product)
}
