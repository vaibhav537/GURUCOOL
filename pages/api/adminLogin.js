import AdminLogin from "./models/adminSchema";
import nc from "next-connect";
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
require("./db/adminConnection");

const handler = nc();

handler.post(async (req, res) => {
  const { email, password } = req.body;

  try {
     const admin = await AdminLogin.findOne({ email: email });

     

    const bytes = CryptoJS.AES.decrypt(
      admin.password,
      process.env.CRYPTO_SECRET
    );
    const decryptedPassword = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  if (admin && password === decryptedPassword) {
    const token = jwt.sign({ admin }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });
    res.status(201).json({ success: true, token });
  } else {
    res.status(401).json({ success: false, msg: "ID PASSWORD NOT MATCHED !!" });
  }
  } catch (error) {
   console.log(error) 
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
