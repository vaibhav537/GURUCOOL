// importing the nodemailer  package
const nodemailer = require("nodemailer");

const OtpSending = (email,name, otpCode) => {

  let nameUpperCase = name.toUpperCase();

  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false, //the secure true is only works at 465
    auth: {
      user: "g80561390@gmail.com", //Here is the email from where we send the email
      pass: "mwwymmngfdhbrcnx", // Here is app password of above email
    },
  });

  let mailOptions = {
    from: 'Guru Cool "g80561390@gmail.com"', //From where we send the email
    to: email, //Here we enter where we have to send the email
    subject: "Verify Your Email", //This the Subject of the Email
    html: `<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">
  </head>
  <div style="font-family: 'Josefin Sans',sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:50px auto;width:70%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="" style="font-size:1.4em;color: black;text-decoration:none;font-weight:400; font-family:josefin sans;">${nameUpperCase}</a>
      </div>
      <p style="font-size:1.1em">Hi,</p>
      <p>Thank you for choosing the GURUCOOL. Use the following OTP to complete your Sign Up procedures. <span style = "color:red;"> OTP is valid for only <span style="font-weight:bold;" >3 minutes!!</span> </span> </p>
      <h2 style="background: #475569;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otpCode}</h2>
      <p style="font-size:0.9em;">Regards,<br />GURUCOOL TEAM</p>
      <hr style="border:none;border-top:1px solid #eee" />
      <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
        <p>GuruCool Inc</p>
        <p>VBPC, Udaipur</p>
        <p>India</p>
      </div>
    </div>
  </div>`, //Here we sending the opt to reciver here it is vaibhav`s email
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error); //If there any error occurs then we print that error
    } else {
      console.log("email Sent: " + info.response); //If we send the email successfully the this message will be log to the console
    }
  });
};

//Exporting the OtpSending function
module.exports = OtpSending; 
