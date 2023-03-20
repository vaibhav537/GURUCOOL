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

adminSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

adminSchema.pre("save", async function(next){
    if(!this.isModified){
        next();
      }else{
        const salt  = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
      }
})

const AdminLogin = GuruCool.models.LOGIN || GuruCool.model("LOGIN", adminSchema);

module.exports = AdminLogin;