"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const admin_mdw_1 = __importDefault(require("../middlewares/admin.mdw"));
exports.router = (0, express_1.Router)();
exports.router.route("/users")
    .get(admin_mdw_1.default, user_controller_1.default.getallUsers);
exports.router.route("/users/:id")
    .get(admin_mdw_1.default, user_controller_1.default.getUser)
    .delete(user_controller_1.default.deleteUser)
    .put(user_controller_1.default.updateUser);
