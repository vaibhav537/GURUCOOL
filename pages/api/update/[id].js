import nc from "next-connect";
require("../db/regg");
const jwt = require("jsonwebtoken");
const TeacherSchema = require("../models/teacherSchema");

const handler = nc();

handler.put(async (req, res) => {
  try {
    const teacher = await TeacherSchema.findOne({ _id: req.query.id });
    if (teacher) {
      teacher.category = req.body.category;

      const teacherCategory = await teacher.save();

      if (teacherCategory) {

        const teacherID = teacher._id;

        const token = jwt.sign({ teacherID }, process.env.JWT_SECRET, {
          expiresIn: "2d",
        });
        res.status(201).json({ success: true, token });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

handler.delete(async (req, res) => {
  try {
    const teacher = await TeacherSchema.findOne({ _id: req.query.id });
    if (teacher) {
      const teacherDelete = await TeacherSchema.deleteOne({ _id: req.query.id });
      if(teacherDelete){
        res.status(200).json({success:true, message: "Teacher Deleted" });
      }else{
        res.status(404).json({success:false, message: "Teacher Not Found" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

handler.get((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

handler.post((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});




export default handler;
