import { Schema, model } from 'mongoose';

// const imageUrl: string = "https://res.cloudinary.com/dc6snm7m6/image/upload/v1709117758/reloj_img/tr0n.shop-product-smartwatch-shark5-blue-tronshop_001-300x300_p8pyjg.jpg"


const Product = new Schema({
    "name": String,
    "description": String,
    "price": Number,
    "stock": Number,
    "category": String,
    "image": String
}, {
    required: true,
    timestamps: true
    })


// Call the function with the extracted string
// model(imageUrl); // Assuming this is the correct call

export default model('Product', Product)