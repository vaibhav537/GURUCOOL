import nc from "next-connect";
require('./db/regg')
const TeacherSchema = require('./models/teacherSchema')

const handler = nc()
.put(async(req,res)=>{
    try{
        const teacher = await TeacherSchema.findOne({_id: req.query.id})
        teacher.category = req.body.category;
        console.log(req.body.category);
        await teacher.save();
        res.status(201).json({success:"Category Added"})
    }catch(error){
        console.log(error);
    }
})

export default handler;