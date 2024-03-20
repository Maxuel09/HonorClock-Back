"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const UserController = {
    getallUsers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const users = yield user_model_1.default.getallUsers();
            res.json(users).status(200);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching users', error });
        }
    }),
    getUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield user_model_1.default.getUser(req.params.id);
            res.json(user).status(200);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching user', error });
        }
    }),
    updateUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield user_model_1.default.updateUser(req.body);
            res.json({ message: 'User updated' }).status(201);
        }
        catch (error) {
            res.status(500).json({ message: 'Error updating user', error });
        }
    }),
    deleteUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield user_model_1.default.deleteUser(req.params.id);
            res.status(200).json({ message: 'User deleted' });
        }
        catch (error) {
            res.status(500).json({ message: 'Error deleting user', error });
        }
    })
};
exports.default = UserController;
