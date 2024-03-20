import { Router } from "express"
import UserController from "../controllers/user.controller"
import Adminauth from "../middlewares/admin.mdw"

export const router = Router()

router.route("/users")
    .get(Adminauth,UserController.getallUsers)
router.route("/users/:id")
    .get(Adminauth,UserController.getUser)
    .delete(UserController.deleteUser)
    .put(UserController.updateUser)

   