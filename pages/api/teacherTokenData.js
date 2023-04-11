import nc from "next-connect";
const jwt = require("jsonwebtoken");
const TeacherSchema = require("./models/teacherSchema");
require("./db/regg");

const handler = nc();

handler.post(async (req, res) => {
  const { token } = req.body;

  try {
    const teacher = jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err) {
        return "token Expired";
      }
      return data;
    });
    if (teacher === "token Expired") {
      return res.status(201).json({ status: false, data: "Token Expired !!" });
    }else{
      const teacherData = await TeacherSchema.findOne({ _id: teacher.teacher._id})
      res.status(201).json({ status: true, teacher: teacherData}) 
    }
  } catch (error) {
    console.log(error);
  }
});

// Handling the get request
handler.get((req, res) => {
  res.status(404).json({ msg: "Wrong Request !!" });
});

//Handling the put request
handler.put((req, res) => {
  res.status(404).json({ msg: "Wrong Request !!" });
});

//Handling the delete request
handler.delete((req, res) => {
  res.status(404).json({ msg: "Wrong Request !!" });
});

export default handler;
