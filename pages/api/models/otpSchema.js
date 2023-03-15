//Importing the mongood=se package to defint the schema
import mongoose from "mongoose";

//importing the connection 
import Otp from "../db/otpConntection"; 

//Defining the schema 
const otpSchema = mongoose.Schema({
    email: String,
    code : String,
    expireIn : Number
}, {
    timestamps: true
})

// Creating the tabel in the database
let otp =  Otp.models.OTP || Otp.model("OTP", otpSchema);

module.exports = otp;