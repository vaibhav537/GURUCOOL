import nc from "next-connect";
const TeacherSchema = require("./models/teacherSchema");

const handler = nc();

handler.delete(async (req, res) => {
  const { email } = req.body;

  const teacher = await TeacherSchema.findOne({ email });

  if (teacher) {
    const DelTeacher = await TeacherSchema.deleteOne({ email });
    if (DelTeacher) {
      res.status(200).json({ success: true, message: "Teacher Deleted" });
    } else {
      res.status(404).json({ success: false, message: "Teacher Not Deleted" });
    }
  } else {
    console.log(email);
    res.status(404).json({ success: false, message: "Teacher Not Found" });
  }
});

handler.get((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

handler.post((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

handler.delete((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

export default handler;
