const jwt = require('jsonwebtoken');
import nc from "next-connect";
const TeacherSchema = require("./models/teacherSchema");
require("./db/regg");

const handler = nc();

handler.post( async(req, res)=>{

  const { email, password } = req.body;
  try {
    const teacher = await TeacherSchema.findOne({ email });

    if(teacher && (await teacher.matchPassword(password))){
      const token = jwt.sign({teacher}, process.env.JWT_SECRET,{
        expiresIn:'2d'
      });
      res.status(222).json({success: true, token});
    }else{
      res.status(444).json({message:"ERROR"})
    }
  } catch (error) {
    console.log(error);
  }

});

export default handler;
