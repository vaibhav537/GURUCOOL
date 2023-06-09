import nc from "next-connect";
const StudentSchema = require("./models/studentSchema");
require("./db/regg");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

const handler = nc();

handler.post(async (req, res) => {
  const { email, password } = req.body;
  try {
    const student = await StudentSchema.findOne({ email });

    const bytes = CryptoJS.AES.decrypt(
      student.password,
      process.env.CRYPTO_SECRET
    );
    const decryptedPassword = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    if (student && password === decryptedPassword) {
      const studentID = student._id
      const token = jwt.sign({ studentID }, process.env.JWT_SECRET, {
        expiresIn: "2d",
      });
      res.status(222).json({ success: true, token });
    } else {
      res.status(444).json({ success: false, message: "ERROR" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: "timeout", message: "Error Occured" });
  }
});



export default handler;
