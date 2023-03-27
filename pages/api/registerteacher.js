import nc from "next-connect";
require("./db/regg");
const TeacherSchema = require("./models/teacherSchema");

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
      res.status(400);
      throw new Error("User already exists");
    }

    const teacher = await TeacherSchema.create({
      name,
      email,
      phone,
      gender,
      password,
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
    res.status(500).json({ success: false, msg:"Error Occured TimeOUt" });
  }
});

export default handler;
