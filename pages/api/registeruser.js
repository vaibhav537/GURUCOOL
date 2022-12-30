import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

const  multer  = require('multer')
const RegisterUser = require('./models/registerSchema')
require('./db/regg');


export default function handler(req, res) {

  //img storage path
  const imgconfig = multer.diskStorage({
    destination: (req,file,callback)=>{
      callback(null,"./uploads")
    },
    filename:(req, file, callback)=>{
      callback(null,`image-${Date.now()}.${file.originalname}`)
    }
  })

  // img filter
  const isImage = (req, file, callback)=>{
    if(file.mimetype.startwith("image")){
      callback(null, true)
    }else{
      callback(new Error("only Image is allowed"))
    }
  }
  const upload = multer({
    storage: imgconfig,
    fileFilter: isImage
  })

  // register user
    if(req.method === 'POST'){
      upload.single("file")
      const {filename} = req.file.

    }
    else{
        res.send("NOT FOUND")
    }
  }
  