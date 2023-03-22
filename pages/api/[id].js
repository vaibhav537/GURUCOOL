import nc from "next-connect";
require("./db/regg");
const jwt = require('jsonwebtoken');
const TeacherSchema = require("./models/teacherSchema");

const handler = nc().put(async (req, res) => {
  try {
    const teacher = await TeacherSchema.findOne({ _id: req.query.id });
    if (teacher) {
      teacher.category = req.body.category;
      console.log(req.body.category);
      const teacherCategory = await teacher.save();
      if (teacherCategory) {
        const token = jwt.sign({ teacher }, process.env.JWT_SECRET, {
          expiresIn: "2d",
        });
        res.status(201).json({ success: true, token });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

export default handler;
