const mongoose = require('mongoose');

mongoose.connect(process.env.DBADDCATE).then(()=>{
    console.log("Connection Successful");
}).catch((err)=>console.log("No Connection"))