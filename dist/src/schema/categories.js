"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Categories = new mongoose_1.Schema({
    "name": String,
});
exports.default = (0, mongoose_1.model)('Category', Categories);
