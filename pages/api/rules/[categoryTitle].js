import nc from "next-connect";
require("../db/addCate");
const AddCategory = require("../models/addCategorySchema");

const handler = nc();

handler.delete(async (req, res) => {

  const { categoryTitle } = req.query;

  try {
    const category = await AddCategory.findOne({ categoryTitle });

    if (category) {
      const categoryDelete = await AddCategory.deleteOne({
        categoryTitle: req.query.categoryTitle,
      });
      if (categoryDelete) {
        res.status(200).json({ success: true, message: "Category Deleted" });
      } else {
        res.status(404).json({ success: false, message: "Category Not Found" });
      }
    } else {
      res.status(404).json({ success: false, message: "Category Not Found" });
    }
  } catch (error) {
    res.status(422).json({ success: false, message: "Category Not Deleted" });
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
