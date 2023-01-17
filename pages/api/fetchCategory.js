const addCategorySchema = require("./models/addCategorySchema");
require("./db/addCate");

export default function handler(req, res) {
  if (req.method === "GET") {
    addCategorySchema.find({}, function (err, data) {
      if (err) console.log("NOT FETCHED");
      res.status(201).json(data);
    });
  }
}
