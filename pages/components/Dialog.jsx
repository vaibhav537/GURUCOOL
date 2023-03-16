import React, { useState } from "react";

const Dialog = ({ visible, onClose }) => {
  const [code, setCode] = useState();

  const handleClose = (e) => {
    if(e.target.id === "Container"){onClose();}

  }

  const handleOTP = (e) => {
    e.preventDefault();
    let codeString = code.toString();
    if(!code){
      alert("Enter the Code");
    }else if(codeString.length< 6){
      alert("Are you mad, sahi code dalna b.n...d")
    }else if(codeString.length > 6){
      alert("Abey 6 se digit jyda ka daal ra h,  email me bheja wo dalna l..de")

    }
  }

  if (!visible) {
    return null;
  } else {
    return (
      <div onClick={handleClose} id="Container" className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-5 rounded flex flex-col ">
          <div className="flex items-center justify-center mt-2 mb-4"> <img src="/images/AdminOtp.png" alt="..." className="w-36 h-32 select-none" /> </div>
          <h1 className="text-center text-2xl font-bold select-none">Enter the Verification Code</h1>
          <form className="flex justify-center items-center flex-col my-5">
            <div className="flex">
            <input type="number" className="w-32 font-bold ring-1 ring-black focus:ring-2 mx-2 outline-none h-11 rounded text-lg text-center select-none" onChange={(e)=>{setCode(e.target.value)}}/>
            </div>
            <div className="mt-8">
              <input type="submit" value="Confirm" className="bg-teal-600 p-2 text-white font-bold rounded hover:shadow-3xl hover:bg-teal-800 hover:text-teal-300 transition-all duration-500 cursor-pointer select-none" onClick={handleOTP}/>
            </div>
            <span className="mt-5 text-teal-800 font-semibold hover:text-teal-400 cursor-pointer transition-all duration-500 select-none">Resend verification code</span>
          </form>
        </div>
      </div>
    );
  }
};

export default Dialog;
