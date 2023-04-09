// importing a package called next-connect to handle the api req request from the front end
import nc from "next-connect";

//importing the schema to save the otp and verify
import userOtp from "../models/userOtpSchema";

import OtpSending from "./OtpSending"

//initializing the next-connect as nc to the handler function
const handler = nc();

//if the request is get request then the end point will send the hello
handler.post(async(req,res)=>{
  
  const { email, name }  = req.body;  // destructring the email and name of the user that comes from frontend

  if(email){
    let otpCode  = Math.floor((Math.random()*1000000)+1); //generate 4 digit random number
    let currentDate = new Date();  // get the current date and time
    let optData = new userOtp({ // creating new document in mongo db
        email: email, // email of the user
        code: otpCode,  // saving the opt code to mongo db
        expireIn: new Date(currentDate.getTime() + (3 * 60000)) // setting the  expiry time of the otp
    });
    let otpResponse = await optData.save();              // saving the document created above
    if (otpResponse){    
        res.status(201).json({success:true, msg:"OTP GENERATED"});        // if document is generated then sending success
        await OtpSending(email,name, otpCode)
    }else{
        res.status(404).json({success:false,msg: "OTP NOT FOUND"});           // any error ocuurs then it woll show this error
    }
  }

})

//exporting default the function handler 
export default handler;