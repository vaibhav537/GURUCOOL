import nc from "next-connect"
require("../db/addCate");
const addCategorySchema = require("../models/addCategorySchema");

const handler = nc()
.delete(async(req, res)=>{
    try {
        await addCategorySchema.findOneAndDelete({categoryTitle: req.query.title});
        res.status(201).json({message:"Category Deleted"})
    } catch (error) {
       res.status(422).json(error)

    }
})

export default handler;