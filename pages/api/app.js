// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mongoose = require('mongoose');
const User = require('./models/userSchema')

const DB = "mongodb+srv://vaibhavMali:sciencemaths10@cluster0.z2kuugj.mongodb.net/contact?retryWrites=true&w=majority"

mongoose.connect(DB).then(()=>{
    console.log("Connection Successful");
}).catch((err)=>console.log("No Connection"))

export default function handler(req, res) {
  if(req.method === 'POST'){
    const { name, phone, email, desc } = req.body;
    if( !name || !phone || !email || !desc ){
      return res.status(422).json({ error: "Please fill all the fields first" });
    }else{
      const user = new User({ name, phone, email, desc });

      user.save().then(()=>{
        res.status(201).json({msg: "Sent"});
      }).catch((err)=> res.status(500).json({error: "Not Sent"}))
    }
  }
}
