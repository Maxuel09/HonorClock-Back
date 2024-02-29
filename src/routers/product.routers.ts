import { Router } from "express"
import { createproduct, getallproduct } from "../models/product.models";


export const router = Router()

router.route("/product")
    .get(getallproduct)
    .post(createproduct)