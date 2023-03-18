import nc from "next-connect";

import AdminLogin from "./models/adminSchema"

const changeAdminIdPassword = nc();

changeAdminIdPassword.get((req, res)=>{
    res.status(404).json({message:"Wrong Request"})
})


changeAdminIdPassword.post((req, res)=>{
    res.status(404).json({message:"Wrong Request"})
})

changeAdminIdPassword.delete((req, res)=>{
    res.status(404).json({message:"Wrong Request"})
})

changeAdminIdPassword.put(async(req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password){
            res.status(400).json({ Error: "Please fill in the email" });
        }
        const admin = await AdminLogin.findOne({_id: "6409e5a5a9300e3830675a79"});
        admin.email = email;
        admin.password = password; 
    
        const done = await admin.save(); 
        if(done){
            res.status(201).json({success:true, message: "Successfully updated !!"});
        }
        else{
            res.status(404).json({success:false, message: "Error updating !!"});
        }
    } catch (error) {
       console.log(error); 
    }
} );

module.exports = changeAdminIdPassword;