import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const teacherSchema = mongoose.Schema(
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
    confirmpassword: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
    category: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

teacherSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
}

teacherSchema.pre("save", async function(next) {
  if(!this.isModified){
    next()
  }else{
    const salt  = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
} )
const TeacherRegister =
  mongoose.models.TEACHER || mongoose.model("TEACHER", teacherSchema);

module.exports = TeacherRegister;
