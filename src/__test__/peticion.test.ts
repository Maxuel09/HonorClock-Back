import mongoose from 'mongoose';
import request from 'supertest';
import app from '../index';
import { server } from '../server';
import { connect } from '../database/conection';

import dotenv from 'dotenv';
dotenv.config();


beforeAll(async () => {
    await mongoose.connect(process.env.ENDPOINT || 'mongodb://127.0.0.1:27017/test');
});

test('Get /users', async () => {
    const response = await request(app).get('/HC/users');
    expect(response.status).toBe(200);
})

test('Get /users/:id', async () => {
    const response = await request(app).get('/HC/users/1');
    expect(response.status).toBe(200);
})

test('post /users', async () => {
    const response = await request(app).post('/HC/users');
    expect(response.status).toBe(200);
})

afterAll(async () => {
    server.close();
    await mongoose.disconnect();
});