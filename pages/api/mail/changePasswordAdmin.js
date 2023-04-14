// importing the nc from the next-connect package
import nc from "next-connect";

//importing the otp function from the otp schema
import otp from "../models/otpSchema";

// initializing the nc to the function
const changeIdPassword = nc();

// defing the method of request
changeIdPassword.post(async (req, res) => {
  let otpDoc = await otp.findOne({
    email: "vaibhavmali537@gmail.com",
    code: req.body.otpCode,
  }); //finding that otp that user enters is available in db or not

  if (!otpDoc) {
    console.log("OTP not found");
    res.status(401).json({ success: false, msg: "NO otp" });
    return false;
  }

  res.status(200).json({ success: true, msg: "Found otp" });
  console.log("OTP is valid");

  let deleteOtp = await otp.deleteOne({
    code: req.body.otpCode,
  });
  if (deleteOtp) {
    console.log("OTP DELETED");
  } else {
    console.log("OTP NOT DELETED");
  }
});

//exporting the changeIdPasssword  Function to the whole GuruCool enviroment
module.exports = changeIdPassword;
