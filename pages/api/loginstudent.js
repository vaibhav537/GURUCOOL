import generateTeacherToken from "./tokens/generateTeacherToken";

const StudentSchema = require("./models/studentSchema");
require("./db/regg");

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const student = await StudentSchema.findOne({ email });
     
    if(student && (await student.matchPassword(password))){
        res.json({
            _id: student._id,
            name: student.name,
            email: student.email,
            pic: student.pic,
            token: generateTeacherToken(student._id)
        });
    }else{
        res.status(401)
        throw new Error("Invalid Email or Password")
    }
  }
};
export default handler;
