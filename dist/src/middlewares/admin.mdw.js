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
const jwt_1 = require("../helpers/jwt");
const user_model_1 = __importDefault(require("../models/user.model"));
function Adminauth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = req.headers.authorization || "";
            const jwt = token.split(" ").pop() || "";
            const jwtPayload = yield (0, jwt_1.verifyToken)(jwt);
            if (!jwtPayload) {
                return res.status(401).json({ message: "token not valid" });
            }
            const id = jwtPayload.id;
            const user = yield user_model_1.default.getUser(id);
            if ((user === null || user === void 0 ? void 0 : user.role) !== "admin") {
                return res.status(401).json({ message: "user not valid" });
            }
            next();
        }
        catch (err) {
            res.status(500).json({ message: "Error" });
        }
    });
}
exports.default = Adminauth;
