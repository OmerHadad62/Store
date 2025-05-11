import {Schema, model} from 'mongoose';

const user = new Schema({
    password: {type: String, required: true, },
    email: {type: String, required: true, unique: true},
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    age: Number
})

export default model('user', user);