"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = __importDefault(require("../schema/order"));
const OrderModel = {
    getallOrder: () => {
        return order_1.default.find();
    },
    getOrderById: (id) => {
        return order_1.default.findById(id);
    },
    createOrder: (products, total) => {
        const newOrder = new order_1.default({
            products,
            total
        });
        return newOrder.save();
    }
};
exports.default = OrderModel;
