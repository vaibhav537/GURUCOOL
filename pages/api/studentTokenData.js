import nc from "next-connect";
const jwt = require("jsonwebtoken");
require("./db/regg");

const handler = nc();

handler.post(async (req, res) => {
  const { token } = req.body;

  try {
    const student = jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err) {
        console.log(err);
        return "token Expired";
      }
      return data;
    });
    if (student === "token Expired") {
      return res.status(201).json({ status: false, data: "Token Expired !!" });
    }else{
        return res.status(201).json({ status: true, student})
    }
  } catch (error) {
    console.log(error);
  }
});

// Handling the get request
handler.get((req, res) => {
  res.status(404).json({ msg: "Wrong Request !!" });
});

//Handling the put request
handler.put((req, res) => {
  res.status(404).json({ msg: "Wrong Request !!" });
});

//Handling the delete request
handler.delete((req, res) => {
  res.status(404).json({ msg: "Wrong Request !!" });
});

export default handler;
