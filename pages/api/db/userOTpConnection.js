import mongoose from "mongoose";

const UserOtp = mongoose.createConnection(process.env.DBREGG);

export default UserOtp;