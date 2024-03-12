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
const mongoose_1 = __importDefault(require("mongoose"));
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const server_1 = require("../server");
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = require("express");
dotenv_1.default.config();
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect(process.env.ENDPOINT || 'mongodb://127.0.0.1:27017/test');
}));
test('Get /users', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, supertest_1.default)(index_1.default).get('/HC/users');
        expect(response.status).toBe(200);
    }
    catch (error) {
        expect(express_1.response.status).toBe(500);
    }
}));
test('Get /users/:id', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = '65e722b81137a5683dd7e0d6';
        const response = yield (0, supertest_1.default)(index_1.default).get('/HC/users');
        const resp = yield JSON.parse(response.text)[0]._id;
        expect(resp).toEqual(id);
    }
    catch (error) {
        expect(express_1.response.status).toBe(500);
    }
}));
test('post /users', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, supertest_1.default)(index_1.default).post('/HC/users');
        expect(response.status).toBe(200);
    }
    catch (error) {
        expect(express_1.response.status).toBe(500);
    }
}));
test('put /users/:id', () => __awaiter(void 0, void 0, void 0, function* () {
    const id = '65e722b81137a5683dd7e0d6';
    const response = yield (0, supertest_1.default)(index_1.default).put('/HC/users');
    const resp = yield JSON.parse(response.text)[0]._id;
    console.log("la resp es:" + resp);
    expect(resp).toBe(200);
}));
test('delete /users/:id', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = '65e722b81137a5683dd7e0d6';
        const response = yield (0, supertest_1.default)(index_1.default).delete('/HC/users');
        const resp = yield JSON.parse(response.text)[0]._id;
        expect(resp).toEqual(id);
    }
    catch (error) {
        expect(express_1.response.status).toBe(500);
    }
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    server_1.server.close();
    yield mongoose_1.default.disconnect();
}));
