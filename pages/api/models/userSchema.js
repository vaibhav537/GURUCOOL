const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    desc:{
        type:String,
    }
})

const User = mongoose.models.USER || mongoose.model('USER', userSchema);

module.exports = User;