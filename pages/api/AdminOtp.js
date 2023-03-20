// importing a package called next-connect to handle the api req request from the front end
import nc from "next-connect";

//importing the schema to save the otp and verify
import otp from "./models/otpSchema"

import mailer from "./mail/mail"

//initializing the next-connect as nc to the handler function
const handler = nc();

//if the request is get request then the end point will send the hello
handler.post(async(req,res)=>{
  let email = "vaibhavmali537@gmail.com"; //email of the trusted person
  if(email){
    let otpCode  = Math.floor((Math.random()*1000000)+1); //generate 4 digit random number
    let optData = new otp({                             // creating new document in mongo db
        email: "vaibhavmali537@gmail.com",                           // demo email sending 
        code: otpCode,                                  // saving the opt code to mongo db
        expireIn: new Date().getTime() + 300*1000       // setting the  expiry time of the otp
    });
    let otpResponse = await optData.save();              // saving the document created above
    if (otpResponse){    
        res.status(201).json("OTP GENERATED");        // if document is generated then sending success
        await mailer(email, otpCode)
    }else{
        res.status(404).json("OTP NOT FOUND");           // any error ocuurs then it woll show this error
    }8
    .69
  }

})

//exporting default the function handler 
export default handler;