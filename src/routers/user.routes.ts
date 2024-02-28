import { Router } from "express"
import { createuser, getallusers } from "../models/user.model";


export const router = Router()

router.route("/users")
    .get(getallusers)
    .post(createuser)
   