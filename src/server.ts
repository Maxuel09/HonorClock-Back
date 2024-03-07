import express,{ Application} from "express"
import {connect} from "./database/conection"
import dotenv from "dotenv";
dotenv.config();


const app : Application = express();
const port = process.env.PORT || 3000;

app.use(express.json())

const connectDB = async () => await connect();
const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

export {app, server, connectDB}