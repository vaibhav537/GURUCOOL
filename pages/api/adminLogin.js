import AdminLogin from "./models/adminSchema"
require("./db/adminConnection")

const handler =  async(req,res) => {
    if(req.method === "POST"){
        const {email, password} = req.body;
        const adminEmail = await AdminLogin.findOne({ email });
        const adminPassword = await AdminLogin.findOne({ password });

        if(adminEmail && adminPassword){
            res.status(201).json({msg : "ID PASSWORD MATCHED !!"})
        }
        else{
            res.status(201).json({msg: "ID PASSWORD NOT MATCHED"})

        }
    }
    else
    {
        res.status(400).json({error : "WRONG REQUEST"})
    }
}

export default handler;