import express from "express"
import {connect} from "./database/conection"
import dotenv from "dotenv";
dotenv.config();


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

const connectDB = async () => await connect();


const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

export {app, server, connectDB}