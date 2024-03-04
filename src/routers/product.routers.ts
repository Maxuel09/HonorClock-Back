import { Router } from "express"
import ProductController from "../controllers/product.controller"


export const router = Router()

router.route("/product")
    .get(ProductController.getallUsers)
    .post(ProductController.createUser)
router.route("/product/:id")
    .get(ProductController.getUser)
    .delete(ProductController.deleteUser)
    .put(ProductController.updateUser)
