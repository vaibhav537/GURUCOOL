import nc from "next-connect";

const handler = nc();

handler.post(async(req,res)=>{
    res.status(200).json({msg: "success BROTHER!!"});
})

// Handling the get request
handler.get((req,res)=>{
    res.status(404).json({msg: "Wrong Request !!"});
})

//Handling the put request
handler.put((req,res)=>{
    res.status(404).json({msg: "Wrong Request !!"});
})

//Handling the delete request
handler.delete((req,res)=>{
    res.status(404).json({msg: "Wrong Request !!"});
})

export default handler;