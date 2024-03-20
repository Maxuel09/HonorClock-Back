import { model,Schema } from "mongoose";

const OrderSchema = new Schema({
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    shippingAddress: String,
    paymentInfo: String,
    total: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
});

const Order = model('Order', OrderSchema);

export default Order;