import Product from "../schema/product";


const UserProduct = {
    getallProduct: async () => {
        return await Product.find();
    },

    getProduct: async (user: any) => {
        return await Product.findOne(user)
    },

    createProduct: async (user: any) => {
        return await Product.create(user)
    },

    updateProduct: async (user: any) => {
        return await Product.findOneAndUpdate({ _id: user._id }, user, { new: true })
    },

    deleteProduct: async (user: any) => {
        return await Product.findOneAndDelete({ _id: user._id })
    }
}

export default UserProduct