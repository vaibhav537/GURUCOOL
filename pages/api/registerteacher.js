import nc from "next-connect";
require("./db/regg");
const TeacherSchema = require("./models/teacherSchema");
const CryptoJS = require("crypto-js");

const handler = nc();

handler.post(async (req, res) => {
  const { name, email, phone, gender, password, confirmpassword, pic } =
    req.body;
  if (!name || !email || !phone || !gender || !password || !confirmpassword) {
    throw new Error("Please Fill all fields");
  }

  try {
    const userExists = await TeacherSchema.findOne({ email });
    if (userExists) {
      res.status(400).json({ success: "already", message: "Already Exist" });
    }
    const encryptedPassword = CryptoJS.AES.encrypt(
      JSON.stringify(password),
      process.env.CRYPTO_SECRET
    ).toString();
    const teacher = await TeacherSchema.create({
      name,
      email,
      phone,
      gender,
      password: encryptedPassword,
      pic,
    });
    if (teacher) {
      res.status(222).json({ success: true, teacher });
    } else {
      res.status(400);
      throw new Error("Failed to create the teacher");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: "Error Occured TimeOUt" });
  }
});

export default handler;
