"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// const imageUrl: string = "https://res.cloudinary.com/dc6snm7m6/image/upload/v1709117758/reloj_img/tr0n.shop-product-smartwatch-shark5-blue-tronshop_001-300x300_p8pyjg.jpg"
const Product = new mongoose_1.Schema({
    "name": String,
    "description": String,
    "price": Number,
    "stock": Number,
    "category": String,
    "image": String
}, {
    required: true,
    timestamps: true
});
// Call the function with the extracted string
// model(imageUrl); // Assuming this is the correct call
exports.default = (0, mongoose_1.model)('Product', Product);
