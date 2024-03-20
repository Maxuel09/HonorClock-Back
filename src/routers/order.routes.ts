import { Router } from "express";
import OrderController from "../controllers/order.controller";
import { router } from "./user.routes";
import { Request, Response } from "express";

export const routerOrder = Router();

routerOrder.route("/order")
    .get(OrderController.getallOrder)
    .post(OrderController.createOrder)
routerOrder.route("/order/:id")
    .get(OrderController.getOrderById)


