"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
exports.router = (0, express_1.Router)();
exports.router.route("/users")
    .get(user_controller_1.default.getallUsers)
    .post(user_controller_1.default.createUser);
exports.router.route("/users/:id")
    .get(user_controller_1.default.getUser)
    .delete(user_controller_1.default.deleteUser)
    .put(user_controller_1.default.updateUser);
