import express,{ Application} from "express"
import { connect } from "./database/conection"
import BodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();


const app : Application = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))
app.use(cors())

const connectDB = async () => await connect();
const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

export {app, server, connectDB}