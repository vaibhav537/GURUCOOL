import nc from "next-connect";
const StudentSchema = require("./models/studentSchema");

const handler = nc();

handler.delete(async (req, res) => {
  const { studentEmail } = req.body;

  const student = await StudentSchema.findOne({ studentEmail });

  if (student) {
    const DelStudent = await StudentSchema.deleteOne({ studentEmail });
    if (DelStudent) {
      res.status(200).json({ success: true, message: "Student Deleted" });
    } else {
      res.status(404).json({ success: false, message: "Student Not Deleted" });
    }
  } else {
    console.log(studentEmail);
    res.status(400).json({ success: false, message: "Student Not Found" });
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