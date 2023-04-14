import nc from "next-connect";
const addCategorySchema = require("./models/addCategorySchema");
require("./db/addCate");

const handler = nc();

handler.post((req, res) => {
  const { categoryTitle, categoryDescription, categoryLabel } = req.body;

  if (!categoryTitle || !categoryDescription || !categoryLabel) {
    return res.status(422).json({ error: "Please fill all the fields first" });
  } else {
    const category = new addCategorySchema({
      categoryTitle,
      categoryDescription,
      categoryLabel,
    });
    category
      .save()
      .then(() => {
        console.log("Success");
        res.status(201).json({ msg: "Category Added successfully" });
      })
      .catch((err) => res.status(500).json({ error: "Category Not Added" }));
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
