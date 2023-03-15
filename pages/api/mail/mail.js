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
    from: "g80561390@gmail.com", //From where we send the email
    to: email, //Here we enter where we have to send the email
    subject: "Sending Email using Node.js", //This the Subject of the Email
    text: `We Are Sending the opt that is ${otp}`, //Here we sending the opt to reciver here it is vaibhav`s email
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
