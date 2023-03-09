import generateTeacherToken from "./tokens/generateTeacherToken";

const TeacherSchema = require("./models/teacherSchema");
require("./db/regg");

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const teacher = await TeacherSchema.findOne({ email });
     
    if(teacher && (await teacher.matchPassword(password))){
        res.json({
            _id: teacher._id,
            name: teacher.name,
            email: teacher.email,
            pic: teacher.pic,
            token: generateTeacherToken(teacher._id)
        });
    }else{
      res.status(401)
      throw new Error("Invalid Email or Password")
    }
  }
};
export default handler;
