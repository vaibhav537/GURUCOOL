// importing the nodemailer  package
const nodemailer = require("nodemailer");

const mailer = (email, otp) => {
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
    subject: "Change the  Id And Password For Admin User", //This the Subject of the Email
    html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:50px auto;width:70%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">GURU COOL</a>
      </div>
      <p style="font-size:1.1em">Hi,</p>
      <p>Use the following Verification Code to reset the Id and Password and to Generate the new One. OTP is valid for 2 minutes</p>
      <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
      <p style="font-size:0.9em;">Regards,<br />Guru Cool Team</p>
      <hr style="border:none;border-top:1px solid #eee" />
      <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
        <p>Guru Cool Head Offices</p>
        <p>VBPC</p>
        <p>Salumbar, Udaipur</p>
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

//Exporting the mailer function
module.exports = mailer;  
