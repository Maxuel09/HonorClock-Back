"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const createToken = (payload) => {
    const token = (0, jsonwebtoken_1.sign)(payload, JWT_SECRET, {
        expiresIn: '1h'
    });
    return token;
};
exports.createToken = createToken;
const verifyToken = (token) => {
    const decoded = (0, jsonwebtoken_1.verify)(token, JWT_SECRET);
    return decoded;
};
exports.verifyToken = verifyToken;
