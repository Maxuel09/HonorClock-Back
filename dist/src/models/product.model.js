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
const product_1 = __importDefault(require("../schema/product"));
const UserProduct = {
    getallProduct: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield product_1.default.find();
    }),
    getProduct: (user) => __awaiter(void 0, void 0, void 0, function* () {
        return yield product_1.default.findById(user);
    }),
    createProduct: (user) => __awaiter(void 0, void 0, void 0, function* () {
        return yield product_1.default.create(user);
    }),
    updateProduct: (user) => __awaiter(void 0, void 0, void 0, function* () {
        return yield product_1.default.findOneAndUpdate({ _id: user._id }, user, { new: true });
    }),
    deleteProduct: (user) => __awaiter(void 0, void 0, void 0, function* () {
        return yield product_1.default.findOneAndDelete({ _id: user._id });
    })
};
exports.default = UserProduct;
