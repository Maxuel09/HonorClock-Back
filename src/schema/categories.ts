import { Schema, model } from 'mongoose';

const Categories = new Schema({
    "name": String,
})

export default model('Category', Categories)