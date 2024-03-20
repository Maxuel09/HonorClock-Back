import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({ path: ".env" });

const endpoint = process.env.ENDPOINT || "";

const connect = async () => {
    try {
        await mongoose.connect(endpoint);
        console.log("🚀Connected to MongoDB")
    }
    catch (error) {
        console.log(error)
    }
}
export { connect }