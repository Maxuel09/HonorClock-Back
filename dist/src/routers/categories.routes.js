"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const categories_model_1 = require("../models/categories.model");
exports.router = (0, express_1.Router)();
exports.router.route("/categories")
    .get(categories_model_1.getallcategories)
    .post(categories_model_1.createcategory);
