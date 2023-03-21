import mongoose from "mongoose";

const GuruCool = mongoose.createConnection(process.env.DBADMIN).then(()=>{console.log("Connection Established")})

export default GuruCool;