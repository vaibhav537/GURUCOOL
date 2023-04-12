// importing the nc from the next-connect package
import nc from "next-connect";

//importing the otp function from the otp schema
import userOtp from "../models/userOtpSchema";

// initializing the nc to the function
const verifyOtpUSer = nc();

// defing the method of request
verifyOtpUSer.post(async (req, res) => {
  let data = await userOtp.findOne({ email: req.body.email, otp: req.body.otpCode }); //finding that otp that user enters is available in db or not

  
  if (!data) { //If the otp will not found then this if will run
    console.log("OTP not found");
    res.status(401).json({ success: false, msg: "NO otp" });
    return false;
  }
  res.status(200).json({ success: true, msg: "Found otp" });
  console.log("OTP is valid");
});


verifyOtpUSer.get((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

verifyOtpUSer.post((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

verifyOtpUSer.delete((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});


//exporting the changeIdPasssword  Function to the whole GuruCool enviroment
module.exports = verifyOtpUSer;
