import mongoose from "mongoose";
import category from "../db/addCate"

const addCategorySchema = mongoose.Schema({
    categoryTitle : {
        type: String
    },
    categoryDescription : {
        type: String
    },
    categoryLabel: {
        type: String
    }
});

const AddCategory =
  category.models.CATEGORYJSON || category.model("CATEGORYJSON", addCategorySchema);

module.exports = AddCategory;

