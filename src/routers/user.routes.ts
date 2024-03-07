import { Router } from "express"
import UserController from "../controllers/user.controller"

export const router = Router()

router.route("/users")
    .get(UserController.getallUsers)
    .post(UserController.createUser)
router.route("/users/:id")
    .get(UserController.getUser)
    .delete(UserController.deleteUser)
    .put(UserController.updateUser)

   