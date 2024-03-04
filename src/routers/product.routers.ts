import { Router } from "express"
import ProductController from "../controllers/product.controller"


export const router = Router()

router.route("/product")
    .get(ProductController.getallProduct)
    .post(ProductController.createProduct)
router.route("/product/:id")
    .get(ProductController.getProduct)
    .delete(ProductController.deleteProduct)
    .put(ProductController.updateProduct)
