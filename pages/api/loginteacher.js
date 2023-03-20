const jwt = require('jsonwebtoken');
const TeacherSchema = require("./models/teacherSchema");
require("./db/regg");

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const teacher = await TeacherSchema.findOne({ email });
    const token = teacher.generateAuthToken();
     
    if(teacher && (await teacher.matchPassword(password))){
        res.status(222).json(token);
    }else{
      res.status(444).json({message:"ERROR"})
    }
  }
};
export default handler;
