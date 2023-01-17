import mongoose from "mongoose";

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
  mongoose.models.CATEGORYJSON || mongoose.model("CATEGORYJSON", addCategorySchema);

module.exports = AddCategory;

