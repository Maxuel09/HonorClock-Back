import { Router } from "express"
import { createcategory, getallcategories } from "../models/categories.models";


export const router = Router()

router.route("/categories")
    .get(getallcategories)
    .post(createcategory)