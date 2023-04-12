import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import register from "../db/regg"

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
  },
  {
    timestamps: true,
  }
);

studentSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
}

studentSchema.pre("save", async function(next) {
  if(!this.isModified){
    next()
  }else{
    const salt  = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
} )
const StudentRegister =
  register.models.STUDENT || register.model("STUDENT", studentSchema);

module.exports = StudentRegister;
