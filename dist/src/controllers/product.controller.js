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
const product_model_1 = __importDefault(require("../models/product.model"));
const ProductController = {
    getallProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const products = yield product_model_1.default.getallProduct();
            res.json(products);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching products', error });
        }
    }),
    getProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const product = yield product_model_1.default.getProduct(req.params.id);
            res.json(product);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching product', error });
        }
    }),
    createProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const product = yield product_model_1.default.createProduct(req.body);
            res.json(product);
        }
        catch (error) {
            res.status(500).json({ message: 'Error creating product', error });
        }
    }),
    updateProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const product = yield product_model_1.default.updateProduct(req.body);
            res.json(product);
        }
        catch (error) {
            res.status(500).json({ message: 'Error updating product', error });
        }
    }),
    deleteProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const product = yield product_model_1.default.deleteProduct(req.body);
            res.json(product);
        }
        catch (error) {
            res.status(500).json({ message: 'Error deleting product', error });
        }
    })
};
exports.default = ProductController;
