const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  phone: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  czxpassword: {
    type: String,
    required: true,
    min: 8,
  },
  imgpath: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
});

const RegisterUser =
  mongoose.models.REGISTER || mongoose.model("REGISTER", registerSchema);

module.exports = RegisterUser;
