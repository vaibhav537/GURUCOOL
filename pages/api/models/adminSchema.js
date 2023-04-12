import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import GuruCool from "../db/adminConnection";

const adminSchema = mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
});


const AdminLogin = GuruCool.models.LOGIN || GuruCool.model("LOGIN", adminSchema);

module.exports = AdminLogin;