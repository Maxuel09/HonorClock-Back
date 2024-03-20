"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_model_1 = __importDefault(require("../models/order.model"));
const OrderController = {
    getallOrder: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const orders = yield order_model_1.default.getallOrder();
            res.json(orders).status(200);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching orders', error });
        }
    }),
    getOrderById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const order = yield order_model_1.default.getOrderById(req.params.id);
            res.json(order).status(200);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching order', error });
        }
    }),
    createOrder: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { products, total } = req.body;
            const order = yield order_model_1.default.createOrder(products, total);
            res.json({ message: 'Order created' }).status(200);
        }
        catch (error) {
            res.status(500).json({ message: 'Error creating order', error });
        }
    }),
};
exports.default = OrderController;
