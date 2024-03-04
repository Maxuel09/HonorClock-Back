import { Router } from "express"
import { createUserController, getAllUsersControler } from "../controllers/user.controller"


export const router = Router()

router.route("/users")
    .get(getAllUsersControler)
    .post(createUserController)
   