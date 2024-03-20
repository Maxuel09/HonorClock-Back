import Order from "../schema/order";

const OrderModel = {
    getallOrder: () => {
        return Order.find();
    },

    getOrderById: (id: any) => {
        return Order.findById(id);
    },

    createOrder: (products: string, total: number) => {
        const newOrder = new Order({
            products,
            total
        });
        return newOrder.save();
    }
}

export default OrderModel