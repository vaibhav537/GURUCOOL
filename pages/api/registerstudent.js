import nc from "next-connect";
require("./db/regg");
const StudentSchema = require("./models/studentSchema");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

const handler = nc();

handler.post(async (req, res) => {
  const { name, email, phone, gender, password, confirmpassword, pic } =
    req.body;
  if (!name || !email || !phone || !gender || !password || !confirmpassword) {
    throw new Error("Please Fill all fields");
  }

  try {
    const userExists = await StudentSchema.findOne({ email });
    if (userExists) {
      res.status(400).json({ success: "already", msg: "User Already Exist" });
    }
    const encryptedPassword = CryptoJS.AES.encrypt(
      JSON.stringify(password),
      process.env.CRYPTO_SECRET
    ).toString();

    const student = await StudentSchema.create({
      name,
      email,
      phone,
      gender,
      password: encryptedPassword,
      pic,
    });

    if (student) {
      const token = jwt.sign({ student }, process.env.JWT_SECRET, {
        expiresIn: "2d",
      });
      res.status(201).json({ success: true, token });
    } else {
      res.status(400).json({ success: false, msg: "Error Occured !!" });
    }
  } catch (error) {
    console.log(error);
  }
});

//handling the get request
handler.get((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

//handling the put request
handler.put((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

//handling the delete request
handler.delete((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

export default handler;
