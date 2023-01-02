import generateTeacherToken from './tokens/generateTeacherToken';

require('./db/regg')
const StudentSchema = require('./models/studentSchema')

const handler =  async(req, res)  => {
    if(req.method === 'POST'){
      const { name, email, phone, gender, password, confirmpassword, pic} = req.body;
      if (!name || !email || !phone || !gender || !password || !confirmpassword) {
        throw new Error('Please Fill all fields');
      }
      const userExists = await StudentSchema.findOne({ email });
      if (userExists) {
        res.status(400)
        throw new Error('User already exists');
      }

      const student = await StudentSchema.create({
        name,
        email,
        phone,
        gender,
        password,
        confirmpassword,
        pic,
    });

    if (student) {
        res.status(201).json({
            _id : student._id,
            name : student.name,
            email : student.email,
            phone : student.phone,
            gender : student.gender,
            pic : student.pic,
            token : generateTeacherToken(student._id),
        });
    }else{
        res.status(400);
        throw new Error("Failed to create the teacher")
    }

    }
  }

export default handler;