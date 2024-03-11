import { Schema, model } from 'mongoose';

const User = new Schema({
    "name": String,
    "password": String,
    "email":  String,
    "role": String
}, {
    required: true,
    timestamps: true,
    unique: true
})

export default model('User', User)