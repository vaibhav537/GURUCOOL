import nc from "next-connect";
const addCategorySchema = require("./models/addCategorySchema");
require("./db/addCate");

const handler = nc();

handler.get((req, res) => {
  addCategorySchema.find({}, function (err, data) {
    if (err) console.log("NOT FETCHED");
    res.status(201).json(data);
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
