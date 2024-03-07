import { Request, Response } from "express";
import UserProduct from "../models/product.model";
import product from "../schema/product";


const ProductController = {
    getallProduct: async (req: Request, res: Response) => {
        try {
            const products = await UserProduct.getallProduct();
            res.json(products);
            
        }catch (error) {
            res.status(500).json({ message: 'Error fetching products', error });
        }
    },

    getProduct: async (req: Request, res: Response) => {
        try {
            const product = await UserProduct.getProduct(req.params.id);
            res.json(product);
        }catch(error) {
            res.status(500).json({ message: 'Error fetching product', error });
        }
    },

    createProduct: async (req: Request, res: Response) => {
        try {
            const product = await UserProduct.createProduct(req.body);
            res.json(product);
        }catch(error) {
            res.status(500).json({ message: 'Error creating product', error });
        }
    },

    updateProduct: async (req: Request, res: Response) => {
        try {
            const product = await UserProduct.updateProduct(req.params.id);
            res.json(product);
        }catch(error) {
            res.status(500).json({ message: 'Error updating product', error });
        }
    },

    deleteProduct: async (req: Request, res: Response) => {
        try {
            const product = await UserProduct.deleteProduct(req.params.id);
            res.json(product);
        }catch(error) {
            res.status(500).json({ message: 'Error deleting product', error });
        }    
    }


}



export default ProductController