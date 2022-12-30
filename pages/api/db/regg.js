const mongoose = require('mongoose');

const DB = "mongodb+srv://vaibhavMali:sciencemaths10@cluster0.z2kuugj.mongodb.net/register?retryWrites=true&w=majority"


mongoose.connect(DB).then(()=>{
    console.log("Connection Successful");
}).catch((err)=>console.log("No Connection"))