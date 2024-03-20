"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    products: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Product' }],
    user: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'User' }],
    shippingAddress: String,
    paymentInfo: String,
    total: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Product' }],
});
const Order = (0, mongoose_1.model)('Order', OrderSchema);
exports.default = Order;
