//Importing the mongood=se package to defint the schema
import mongoose from "mongoose";

//importing the connection 
import UserOtp from "../db/userOTpConnection"; 

//Defining the schema 
const UserOtpSchema = mongoose.Schema({
    email: String,
    code : String,
    expireIn : Number
}, {
    timestamps: true
})

// Creating the documents in the database
let userOtp =  UserOtp.models.USEROTPSCHEMA || UserOtp.model("USEROTP", UserOtpSchema);

module.exports = userOtp;