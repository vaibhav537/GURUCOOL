import nc from "next-connect";
const TeacherSchema = require("../models/teacherSchema");
require("../db/regg");

const handler = nc();

handler.post(async (req, res) => {
  const { room } = req.body;

  try {
    const teacher = await TeacherSchema.findOne({ room });

    if (teacher) {
      res.status(404).json({success: false, message: "ROOM IS ALREADY TAKEN er"});
    }
    else{
      res.status(201).json({success: true, message: "ROOM IS UNIQUE"});
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({success: false, message: "ROOM IS ALREADY TAKEN"})
  }


});

export default handler;
