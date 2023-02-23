const StudentSchema = require('./models/studentSchema')

require('./db/regg');

export default function handler (req, res) {
    if(req.method === "GET"){
        StudentSchema.find({},function(err, data){
            if(err){
                console.log(err);
            }else{
                res.status(200).json(data)
            }
        })
    }else{
        console.log("This is not a get req")
    }
}