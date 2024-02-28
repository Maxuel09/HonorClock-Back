import express from "express"
import { connect } from "./database/conection";
import dotenv from "dotenv";
dotenv.config();

export const app = express();
const port = process.env.PORT || 3000;

export const connectDB = async () => await connect();
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})