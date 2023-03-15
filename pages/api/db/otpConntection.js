import mongoose from "mongoose";

const Otp = mongoose.createConnection(process.env.DBADMIN);

export default Otp;