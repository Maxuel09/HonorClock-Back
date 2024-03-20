import { Request, Response } from "express";
import ProductModel from "../models/product.model";
import OrderModel from "../models/order.model";

const OrderController = {

    getallOrder: async (req: Request, res: Response) => {
        try {
            const orders = await OrderModel.getallOrder();
            res.json(orders).status(200);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching orders', error });
        }
    },

    getOrderById: async (req: Request, res: Response) => {
        try {
            const order = await OrderModel.getOrderById(req.params.id);
            res.json(order).status(200);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching order', error });
        }
    },
  
    createOrder: async (req: Request, res: Response) => {
        try {
            const { products, total } = req.body;
            const order = await OrderModel.createOrder(products, total);
            res.json({message : 'Order created'}).status(200);

        } catch (error) {
            res.status(500).json({ message: 'Error creating order', error });
        }
    },

}

export default OrderController