import mongoose from "mongoose";
import GuruCool from "../db/adminConnection";

const adminSchema = mongoose.Schema({
    email: {
        type: String
    },
    passsword: {
        type: String
    }
});

const AdminLogin = GuruCool.models.LOGIN || GuruCool.model("LOGIN", adminSchema);

module.exports = AdminLogin;