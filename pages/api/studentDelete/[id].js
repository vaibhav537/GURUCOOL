import nc from "next-connect";
require("../db/regg");
const StudentSchema = require('../models/studentSchema')

const handler = nc();

handler.delete(async (req, res) => {
  try {
    const student = await StudentSchema.findOne({ _id: req.query.id });
    if (student) {
      const studentDelete = await StudentSchema.deleteOne({ _id: req.query.id });
      if(studentDelete){
        res.status(200).json({success:true, message: "Student Deleted" });
      }else{
        res.status(404).json({success:false, message: "Student Not Found" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

handler.get((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

handler.put((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

handler.post((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

export default handler;
