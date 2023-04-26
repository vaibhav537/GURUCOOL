const jwt = require("jsonwebtoken");
import nc from "next-connect";
const TeacherSchema = require("./models/teacherSchema");
const CryptoJS = require("crypto-js");
require("./db/regg");

const handler = nc();

handler.post(async (req, res) => {
  const { email, password } = req.body;
  try {
    const teacher = await TeacherSchema.findOne({ email });

    const bytes = CryptoJS.AES.decrypt(
      teacher.password,
      process.env.CRYPTO_SECRET
    );
    const decryptedPassword = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    if (teacher && password === decryptedPassword) {
      const teacherID = teacher._id;
      const token = jwt.sign({ teacherID }, process.env.JWT_SECRET, {
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

handler.get((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

handler.put((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

handler.delete((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

export default handler;
