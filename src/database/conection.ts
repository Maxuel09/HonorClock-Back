import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const endpoint = process.env.ENDPOINT || "mongodb://127.0.0.1:27017/test";

export const connect = async () => {
    try {
        await mongoose.connect(endpoint);
        console.log("🚀Connected to MongoDB")
    }
    catch (error) {
        console.log(error)
    }
}
