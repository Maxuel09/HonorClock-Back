import Categories from "../schema/categories";
import { Request, Response } from "express";

export const getallcategories = async (req : Request, res : Response) => {
     const categories = await Categories.find();
     res.send(categories)
}

export const createcategory = async (req : Request, res : Response) => {
    const category = new Categories(req.body);
    await category.save();
    res.send(category)
}