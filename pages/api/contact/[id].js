import nc from "next-connect";
require("../db/regg");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const handler = nc();

handler.delete(async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.query.id });
    if (user) {
      const userDelete = await User.deleteOne({
        _id: req.query.id,
      });
      if (userDelete) {
        res.status(200).json({ success: true, message: "Concern Deleted" });
      } else {
        res.status(404).json({ success: false, message: "concern Not Found" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

handler.get((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

handler.post((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

handler.put(async (req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});
export default handler;
