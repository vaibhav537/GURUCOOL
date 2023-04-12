import AdminLogin from "./models/adminSchema";
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
require("./db/adminConnection");

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const adminEmail = await AdminLogin.findOne({ email });

    const bytes = CryptoJS.AES.decrypt(
      adminEmail.password,
      "W7iPZDaEWV46arHl8v5EFV1tYaSZagYC"
    );
    const decryptedPassword = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    if (adminEmail && password === decryptedPassword) {
      const token = jwt.sign({ adminEmail }, process.env.JWT_SECRET, {
        expiresIn: "2d",
      });
      res.status(201).json({ success: true, token });
    } else {
      res
        .status(401)
        .json({ success: false, msg: "ID PASSWORD NOT MATCHED !!" });
    }
  } else {
    res.status(400).json({ error: "WRONG REQUEST" });
  }
};

export default handler;
