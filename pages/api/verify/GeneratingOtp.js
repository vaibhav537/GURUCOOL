// importing a package called next-connect to handle the api req request from the front end
import nc from "next-connect";

//importing the schema to save the otp and verify
import userOtp from "../models/userOtpSchema";

import OtpSending from "./OtpSending";

//initializing the next-connect as nc to the handler function
const handler = nc();

//if the request is get request then the end point will send the hello
handler.post(async (req, res) => {
  const { email, name } = req.body; // destructring the email and name of the user that comes from frontend

  if (email) {
    // a function for the generating the otp message
    function generateOTP() {
      // Generate a random 6-digit OTP
      let otpCode = "";
      for (let i = 0; i < 6; i++) {
        otpCode += Math.floor(Math.random() * 10);
      }
      //if somehow the otp doesn't generated then it will recall the function;
      if (otpCode === undefined) {
        generateOTP();
      }

      //returning the otp
      return otpCode;
    }

    // another function for generating the expriy time for the otp
    function generateOTPWithExpiry() {
      // Generate a random OTP with an expiration time of 5 minutes
      const otpCode = generateOTP(); //calling the otp generate function
      const expiryTime = Date.now() + 300000; // 5 minutes from now in milliseconds
      //returning the otp and its expiry time
      return { otpCode, expiryTime };
    }
    //destructring the otp code and its expiry time
    const { otpCode, expiryTime } = generateOTPWithExpiry();

    let optData = new userOtp({
      // creating new document in mongo db
      email: email, // user email sending
      code: otpCode, // saving the opt code to mongo db
      expireIn: new Date(expiryTime), // setting the  expiry time of the otp
    });

    let otpResponse = await optData.save(); // saving the document created above

    if (otpResponse) {
      res.status(201).json({success: true, msg:"OTP GENERATED"}); // if document is generated then sending success
      await OtpSending(email, otpCode, name);
    } else {
      res.status(404).json({success :false, msg:"OTP NOT FOUND"}); // any error ocuurs then it woll show this error
    }
  }
});

handler.get((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

handler.put((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

handler.delete((req, res) => {
  res.status(404).json({ message: "Wrong Request" });
});

//exporting default the function handler
export default handler;
