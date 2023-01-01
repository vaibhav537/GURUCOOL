require('./db/regg')
const TeacherSchema = require('./models/teacherSchema')

const handler =  async(req, res)  => {
    if(req.method === 'POST'){
      const { name, email, phone, gender, password, confirmpassword, pic} = req.body;
      if (!name || !email || !phone || !gender || !password || !confirmpassword) {
        throw new Error('Please Fill all fields');
      }
      const userExists = await TeacherSchema.findOne({ email });
      if (userExists) {
        res.status(400)
        throw new Error('User already exists');
      }

      const teacher = await TeacherSchema.create({
        name,
        email,
        phone,
        gender,
        password,
        confirmpassword,
        pic,
    });

    if (teacher) {
        res.status(201).json({
            _id : teacher._id,
            name : teacher.name,
            email : teacher.email,
            phone : teacher.phone,
            gender : teacher.gender,
            pic : teacher.pic,
            token : generateTeacherToken(teacher._id),
        });
    }else{
        res.status(400);
        throw new Error("Failed to create the teacher")
    }

    }
  }

export default handler;