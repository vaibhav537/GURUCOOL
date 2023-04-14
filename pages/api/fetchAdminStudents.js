import nc from "next-connect";
const StudentSchema = require("./models/studentSchema");

require("./db/regg");

const handler = nc();

handler.get((req, res) => {
  StudentSchema.find({}, function (err, data) {
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
