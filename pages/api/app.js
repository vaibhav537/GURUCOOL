// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const User = require('./models/userSchema')
require('./db/conn')



export default function handler(req, res) {
  if(req.method === 'POST'){
    const { name, phone, email, desc } = req.body;
    if( !name || !phone || !email || !desc ){
      return res.status(422).json({ error: "Please fill all the fields first" });
    }else{
      const user = new User({ name, phone, email, desc });

      user.save().then(()=>{
        res.status(201).json({msg: "Sent"});
      }).catch((err)=> console.log(err));
    }
  }
}
