// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect";
const User = require("./models/userSchema");
require("./db/conn");

const handler = nc();

handler.post(async (req, res) => {
  const { name, phone, email, desc } = req.body;
  try {
    if (!name || !phone || !email || !desc) {
      return res
        .status(422)
        .json({ error: "Please fill all the fields first" });
    } else {
      const user = new User({ name, phone, email, desc });

      const result = await user.save();
      if (result) {
        return res.status(201).json({
          message: "User created successfully",
          success: true,
        });
      } else {
        return res.status(500).json({
          message: "Something went wrong",
          success: false,
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
});

handler.get((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

handler.put((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

handler.delete((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});
export default handler;
