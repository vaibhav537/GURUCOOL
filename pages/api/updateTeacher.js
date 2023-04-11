import nc from "next-connect";
const TeacherSchema = require("./models/teacherSchema");

const handler = nc();

handler.put(async (req, res) => {
  try {
    const { email, name, password, phone, gender } = req.body;

    if (!email || !password || !phone || !name || !gender) {
      res.status(400).json({ Error: "Please fill all fields" });
    }
    const teacher = await TeacherSchema.findOne({ email: email });

    if (teacher) {
      teacher.name = name;
      teacher.password = password;
      teacher.phone = phone;
      teacher.gender = gender;
      const done = await teacher.save();

      if (done) {
        res
          .status(201)
          .json({ success: true, message: "Successfully updated !!" });
      } else {
        res.status(404).json({ success: false, message: "Error updating !!" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, message: "Error updating !!" });
  }
});

//handling the get request
handler.get((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

//handling the post request
handler.post((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

//handling the delete request
handler.delete((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

export default handler;
