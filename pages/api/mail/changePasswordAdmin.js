// importing the nc from the next-connect package
import nc from "next-connect";

//importing the otp function from the otp schema
import otp from "../models/otpSchema";

// initializing the nc to the function
const changeIdPassword = nc();

// defing the method of request
changeIdPassword.post(async (req, res) => {
  let data = await otp.findOne({ email: "vaibhavmali537@gmail.com", code: req.body.otpCode }); //finding that otp that user enters is available in db or not
  if (data) {  //If the otp will found then this if will run

    let currentTime = new Date().getTime(); //Getting the current time from the system

    let diff = data.expireIn - currentTime; //Checking the otp expire time

    if (diff < 0) { //if expire time is over the this if will run
      res.status(400).json({success:false, msg: "Otp is Expired" }); //If otp is expired then this msg will log to console
      const delOtp = await otp.findOneAndDelete({code: req.body.otpCode})
      if(delOtp){
        res.status(200).json({success:true, msg:"Otp deleted"});
      }else{
        res.status(404).json({success:false, msg:"Otp not Deleted"});
      }
    } else { //if otp doesnot expires then this else statement will run
      res.status(200).json({success:true, msg: "Otp Founded You will Be redirect soon" }); //This will redirect to another page for changing the id password
    }
  } else { //If otp not found in db then this else will run
    res.status(404).json({success:false, msg: "Your Otp is Wrong" }); // This statement will run with status code of 404
  }
});

//exporting the changeIdPasssword  Function to the whole GuruCool enviroment
module.exports = changeIdPassword;
