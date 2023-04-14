import nc from "next-connect";
const StudentSchema = require("./models/studentSchema");
const CryptoJS = require("crypto-js");

const handler = nc();

handler.put(async (req, res) => {
  try {
    const { email, name, password, phone, gender } = req.body;

    if (!email || !password || !phone || !name || !gender) {
      res.status(400).json({ Error: "Please fill all fields" });
    }
    const student = await StudentSchema.findOne({ email: email });


    if (student) {
      const encryptedPassword = CryptoJS.AES.encrypt(
        JSON.stringify(password),
        process.env.CRYPTO_SECRET
      ).toString();
      student.name = name;
      student.password = encryptedPassword;
      student.phone = phone;
      student.gender = gender;
      const done = await student.save();

      if (done) {
        res
          .status(201)
          .json({ success: true, message: "Successfully updated !!" });
      } else {
        res.status(404).json({ success: false, message: "Error updating !!" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, message: "Error updating !!" });
  }
});

//handling the get request
handler.get((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

//handling the post request
handler.post((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

//handling the delete request
handler.delete((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

export default handler;
