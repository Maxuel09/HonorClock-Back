"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerOrder = void 0;
const express_1 = require("express");
const order_controller_1 = __importDefault(require("../controllers/order.controller"));
exports.routerOrder = (0, express_1.Router)();
exports.routerOrder.route("/order")
    .get(order_controller_1.default.getallOrder)
    .post(order_controller_1.default.createOrder);
exports.routerOrder.route("/order/:id")
    .get(order_controller_1.default.getOrderById);
