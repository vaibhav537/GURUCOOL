import nc from "next-connect";
const User = require("./models/userSchema");
require("./db/conn");

const handler = nc();

handler.get(async (req, res) => {
  const userData = await User.find({});

  try {
    if (userData) {
      res.status(200).json(userData);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

export default handler;
