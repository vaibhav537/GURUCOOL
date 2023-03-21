import nc from "next-connect";
const StudentSchema = require("./models/studentSchema");
require("./db/regg");

const handler = nc();

handler.post(async (req, res) => {
  const { email, password } = req.body;
  const student = await StudentSchema.findOne({ email });
  if (student && (await student.matchPassword(password))) {
    res.json({
      _id: student._id,
      name: student.name,
      email: student.email,
      pic: student.pic,
      // token: generateTeacherToken(student._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
  if (student && (await student.matchPassword(password))) {
    res.json({
      _id: student._id,
      name: student.name,
      email: student.email,
      pic: student.pic,
      token: generateTeacherToken(student._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

export default handler;
