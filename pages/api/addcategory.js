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

handler.put(async (req, res) => {
  const { currentTitle, newTitle, newLabel, newDescription } = req.body;

  if (!currentTitle) {
    return res
      .status(422)
      .json({ success: false, error: "Please fill all the fields first" });
  } else if (newTitle === "") {
    return res
      .status(422)
      .json({ success: false, error: "Please fill all the fields first" });
  } else if (newDescription === "") {
    return res
      .status(422)
      .json({ success: false, error: "Please fill all the fields first" });
  } else if (newLabel === "") {
    return res
      .status(422)
      .json({ success: false, error: "Please fill all the fields first" });
  } else {
    const category = await addCategorySchema.findOne({
      categoryTitle: currentTitle,
    });

    if (category) {
      category.categoryTitle = newTitle;
      category.categoryDescription = newDescription;
      category.categoryLabel = newLabel;

      const updateDone = await category.save();
      if (updateDone) {
        res.status(201).json({ success: true, msg: "Category Updated !!" });
      } else {
        res
          .status(422)
          .json({ success: false, error: "Category Not updated" });
      }
    }
  }
});

handler.delete((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

export default handler;
