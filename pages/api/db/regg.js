const mongoose = require('mongoose');

mongoose.connect(process.env.DBREGG).then(()=>{
    console.log("Connection Successful");
}).catch((err)=>console.log("No Connection"))