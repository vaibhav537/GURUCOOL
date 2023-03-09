import mongoose from "mongoose";

const GuruCool = mongoose.createConnection(process.env.DBADMIN);

export default GuruCool;