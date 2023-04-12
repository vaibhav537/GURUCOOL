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
      "W7iPZDaEWV46arHl8v5EFV1tYaSZagYC"
    );
    const decryptedPassword = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    if (teacher && password === decryptedPassword) {
      res.status(222).json({ success: true, msg:"Founded !!" });
    } else {
      res.status(444).json({ success: false, message: "ERROR" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: "timeout", message: "Error Occured" });
  }
});

//handling the get request
handler.get(async (req, res) => {
  res.status(404).json({ message: "Wrong request !!" });
});

//handling the delete request
handler.delete(async (req, res) => {
  res.status(404).json({ message: "Wrong request !!" });
});


//handling the put request
handler.put(async (req, res) => {
  res.status(404).json({ message: "Wrong request !!" });
});

export default handler;
