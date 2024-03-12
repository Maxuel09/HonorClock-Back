"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
exports.router = (0, express_1.Router)();
exports.router.route("/product")
    .get(product_controller_1.default.getallProduct)
    .post(product_controller_1.default.createProduct);
exports.router.route("/product/:id")
    .get(product_controller_1.default.getProduct)
    .delete(product_controller_1.default.deleteProduct)
    .put(product_controller_1.default.updateProduct);
