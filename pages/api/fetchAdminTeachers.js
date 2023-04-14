import nc from "next-connect";
const TeacherSchema = require("./models/teacherSchema");

require("./db/regg");

const handler = nc();

handler.get((req, res) => {
  TeacherSchema.find({}, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(data);
    }
  });
});

handler.post((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

handler.put((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

handler.delete((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

export default handler;
