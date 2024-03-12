"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComparePassword = exports.encryptPassword = void 0;
const bcrypt_1 = require("bcrypt");
const encryptPassword = (password) => {
    const salt = (0, bcrypt_1.hashSync)(password, 10);
    return salt;
};
exports.encryptPassword = encryptPassword;
const ComparePassword = (password, hashPassword) => {
    return (0, bcrypt_1.compareSync)(password, hashPassword);
};
exports.ComparePassword = ComparePassword;
