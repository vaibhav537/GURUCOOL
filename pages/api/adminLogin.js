import AdminLogin from "./models/adminSchema";
require("./db/adminConnection");

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const adminEmail = await AdminLogin.findOne({ email });
    // const adminPassword = await AdminLogin.findOne({ password });

    if (adminEmail && (await adminEmail.matchPassword(password))) {
      res.status(201).json({ success: true, msg: "ID PASSWORD MATCHED !!" });
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
