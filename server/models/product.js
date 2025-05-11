import {Schema, model} from 'mongoose';

const product = new Schema({
    name: String,
    price: Number,
    description: String
})

export default model('Product', product);