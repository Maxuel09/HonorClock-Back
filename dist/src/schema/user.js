"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const User = new mongoose_1.Schema({
    "name": String,
    "password": String,
    "email": String,
    "role": String
}, {
    required: true,
    timestamps: true,
    unique: true
});
exports.default = (0, mongoose_1.model)('User', User);
