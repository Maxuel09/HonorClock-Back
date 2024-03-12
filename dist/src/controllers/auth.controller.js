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
const user_1 = __importDefault(require("../schema/user"));
const crypt_1 = require("../helpers/crypt");
<<<<<<< HEAD
// import { createToken } from "../helpers/jwt";
=======
>>>>>>> dev
const AuthController = {
    login: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const user = yield user_1.default.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: "user not exists" });
            }
            if (user.password) {
                const match = (0, crypt_1.ComparePassword)(password, user.password);
                !match ? res.status(404).json({ message: "user not exists" }) : res.status(200).json({ message: "login success", user });
            }
            // const token = createToken(user._id + "");
            //  const data = {
            //     token: token,
            //     user: {
            //         _id: user._id,
            //         name: user.name,
            //         email: user.email
            //         }
            // }
            //     res.status(200).json({ message: "User logged in", data: data });
        }
        catch (error) {
            res.status(500).json({ message: 'Error logging in' });
        }
    }),
    register: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield user_1.default.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ message: "user already exists" });
            }
            const { name, email, password } = req.body;
            const registeredUser = yield user_1.default.create({ name, email, password: (0, crypt_1.encryptPassword)(password) });
            registeredUser ? res.status(400).json({ message: "user create exists" }) : res.status(201).json(registeredUser);
        }
        catch (error) {
            res.status(500).json({ message: 'Error registering', error });
        }
    })
};
exports.default = AuthController;
