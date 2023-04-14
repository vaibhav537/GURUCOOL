import nc from "next-connect";
require("../db/addCate");
const addCategorySchema = require("../models/addCategorySchema");

const handler = nc();

handler.delete(async (req, res) => {
  try {
    await addCategorySchema.findOneAndDelete({
      categoryTitle: req.query.title,
    });
    res.status(201).json({ message: "Category Deleted" });
  } catch (error) {
    res.status(422).json(error);
  }
});

handler.get((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

handler.put((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

handler.post((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});
export default handler;
