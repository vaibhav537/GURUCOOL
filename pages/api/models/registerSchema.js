const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
})