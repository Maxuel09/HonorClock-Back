import mongoose from 'mongoose';
import request from 'supertest';
import app from '../index';
import { server } from '../server';
import { connect } from '../database/conection';
import dotenv from 'dotenv';
import { response } from 'express';
dotenv.config();


beforeAll(async () => {
    await mongoose.connect(process.env.ENDPOINT || 'mongodb://127.0.0.1:27017/test');
});

test('Get /users', async () => {
    try {
        const response = await request(app).get('/HC/users');
        expect(response.status).toBe(200);
    }
    catch (error) {
        expect(response.status).toBe(500);
    }
})

test('Get /users/:id', async () => {
    try {
        const id = '65e722b81137a5683dd7e0d6'
        const response = await request(app).get('/HC/users');
        const resp = await JSON.parse(response.text)[0]._id    
        expect(resp).toEqual(id);
    }catch (error) {
        expect(response.status).toBe(500);
    }
    
})

test('post /users', async () => {
    try {
        const response = await request(app).post('/HC/users');
        expect(response.status).toBe(200);
    }
    catch (error) {
        expect(response.status).toBe(500);
    }
})

test('put /users/:id', async () => {
        const id = '65e722b81137a5683dd7e0d6'
        const response = await request(app).put('/HC/users');
        const resp = await JSON.parse(response.text)[0]._id
        console.log("la resp es:" + resp)
        expect(resp).toBe(200);
})

test('delete /users/:id', async () => {
    try {
        const id = '65e722b81137a5683dd7e0d6'
        const response = await request(app).delete('/HC/users');
        const resp = await JSON.parse(response.text)[0]._id
        expect(resp).toEqual(id);
    }
    catch (error) {
        expect(response.status).toBe(500);
    }
})

afterAll(async () => {
    server.close();
    await mongoose.disconnect();
});