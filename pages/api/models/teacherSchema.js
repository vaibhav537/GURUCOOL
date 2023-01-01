import mongoose from "mongoose";

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
    cpassword: {
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

const TeacherRegister =
  mongoose.models.TEACHER || mongoose.model("TEACHER", teacherSchema);

module.exports = TeacherRegister;
