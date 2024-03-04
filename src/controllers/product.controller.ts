import { Request, Response } from "express";
import UserProduct from "../models/product.model";
import product from "../schema/product";


const ProductController = {
    getallProduct: async (req: Request, res: Response) => {
        const products = await UserProduct.getallProduct();
        res.send(products);
    },

    getProduct: async (req: Request, res: Response) => {
        const product = await UserProduct.getProduct(req.body);
        res.send(product);
    },

    createProduct: async (req: Request, res: Response) => {
        const product = await UserProduct.createProduct(req.body);
        res.send(product);
    },

    updateProduct: async (req: Request, res: Response) => {
        const product = await UserProduct.updateProduct(req.body);
        res.send(product);
    },

    deleteProduct: async (req: Request, res: Response) => {
        const product = await UserProduct.deleteProduct(req.body);
        res.send(product);
    }


}

export default ProductController