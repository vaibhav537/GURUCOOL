import React, { useState } from "react"; //importing the state from react
import { ToastContainer, toast } from "react-toastify";//importing the toast from react-toastify
import "react-toastify/dist/ReactToastify.css";//importing the css of the ReactToast

const Dialog = ({ visible, onClose }) => {  // reciving the props from the parent component
  const [otpCode, setOtpCode] = useState(); // state for the storing otp code
  const [email, setEmail] = useState(""); // state for the storing email
  const [password, setPassword] = useState(""); // state for the storing password
  const [confirmpassword, setConfirmpassword] = useState(""); // state for the storing confirm password
  const [firstDiv, setFirstDiv] = useState(true); // state for the hide and show the first div
  const [secondDiv, setSecondDiv] = useState(false);  // state for hide and show the second div
  const [isLoading, setIsLoading] = useState(false); // state for showing the loader
  // defing the function for hiding the dialog 
  const handleClose = (e) => { 
    if (e.target.id === "Container") {
      onClose();
    }
  };

  // toast configurations
  const toastConfig = {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    progress: undefined,
    theme: "dark",
    bodyClassName: "font-bold select-none font-Nunito",
    closeButton: false,
  };
 // send int otp caode to backend and showing the first div
  const handleOTP = async (e) => {
    setIsLoading(true); // shoeing the loader
    e.preventDefault(); // prevent default behavior 
    // if the firstdiv is not showing then  this if will run
    if (firstDiv === false) { 
      setFirstDiv(true);
      setSecondDiv(false);
    }

    // if user enter the otp code then this if will run
    if (otpCode) {
      const codeString = otpCode.toString(); // converting the otpcode datatype number to string datatype
      // check the lenght of the code 
      if (codeString.length === 6) {
        // if code lenghr is 6 then try catch will run
        try {
          const data = await fetch("/api/mail/changePasswordAdmin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              otpCode,
            }),
          });
          const response = await data.json();
          if (response.success === true) {
            toast.success("Verified ", toastConfig);
            setIsLoading(false);
            if (firstDiv === true) {
              setSecondDiv(true);
              setFirstDiv(false);
            }
          } else {
            toast.error("Invalid Verification Code", toastConfig);
            setIsLoading(false);
          }
        } catch (error) {
          setIsLoading(false);
          console.log(error);
        }
      } else {
        toast.error("Invalid Verification Code", toastConfig);
        setIsLoading(false);
      }
    }
    else{
      toast.error("Please Enter the Verification Code", toastConfig);
      setIsLoading(false);
    }
  };

  const handleAdminChange = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      if (!email || !password || !confirmpassword) {
        toast.error("Please Enter All Fields", toastConfig);
        setIsLoading(false);
        return;
      }
      if (password !== confirmpassword) {
        toast.error("Passwords not Matched", toastConfig);
        setIsLoading(false);
        return;
      }
      const updated = await fetch("/api/changeAdminIdPassword", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (updated) {
        toast.success("Admin Id Password Updated !!", toastConfig);
        setIsLoading(false);
        handleClose();
      } else {
        toast.error("Admin Not Updated !!", toastConfig);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleResend = async (e) => {
    e.preventDefault();
    try {
      const data = fetch("/api/AdminOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (data) {
        toast.success("Verfication Code Sent",toastConfig);
      } else {
        toast.error("Could'nt Send Verification Code", toastConfig);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!visible) {
    return null;
  } else {
    return (
      <>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          theme="light"
        />
        <div
          onClick={handleClose}
          id="Container"
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        >
          <div className="bg-white p-5 rounded flex flex-col ">
            {firstDiv && (
              <>
                <div className="flex items-center justify-center ml-5 mt-2 ">
                  <img
                    src="/images/AdminOtp.png"
                    alt="..."
                    className="w-36 h-32 select-none"
                  />
                </div>
                <h1 className="text-center text-2xl text-black font-bold select-none my-4">
                  Enter the Verification Code
                </h1>
                <form className="flex justify-center items-center flex-col my-5">
                  <div className="flex">
                    <input
                      type="number"
                      className="w-32 font-bold ring-1 text-black ring-black focus:ring-2 mx-2 outline-none h-11 rounded text-lg text-center select-none"
                      onChange={(e) => {
                        setOtpCode(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="bg-teal-600 p-2 w-[5.5rem] flex items-center justify-center  text-white font-bold rounded hover:shadow-3xl hover:bg-teal-800 hover:text-teal-300 transition-all duration-500 cursor-pointer select-none"
                      onClick={handleOTP}
                    >
                      {isLoading ? (
                        <img
                          src="/adminIdPass.gif"
                          alt="..."
                          className="w-5 h-5"
                        />
                      ) : (
                        "Confirm"
                      )}
                    </button>
                  </div>
                  <span
                    className="mt-5 text-teal-800 font-semibold hover:text-teal-400 cursor-pointer transition-all duration-500 select-none"
                    onClick={handleResend}
                  >
                    Resend verification code
                  </span>
                </form>
              </>
            )}
            {secondDiv && (
              <>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="select-none text-3xl my-5">
                    Change ID Password
                  </h1>
                  <form method="post" className="flex flex-col">
                    <div className="relative">
                      <div className="relative mb-4 ">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i className="fa-solid fa-envelope  text-teal-400"></i>
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="text-teal-800 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-teal-300 block w-full pl-10 p-2.5  dark:placeholder:text-teal-300 dark:text-teal-200 outline-none"
                          placeholder="New Email"
                          autoComplete="off"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="relative mt-2">
                      <div className="relative mb-6">
                        <div className="text-xl absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i className="fa-solid fa-lock text-teal-400"></i>
                        </div>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="text-teal-800 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-teal-300 block w-full pl-10 p-2.5  dark:placeholder:text-teal-300 dark:text-teal-200 outline-none"
                          placeholder="New Password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <div className="relative mb-6 ">
                        <div className="text-xl absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i className="fa-solid fa-key text-teal-400"></i>
                        </div>
                        <input
                          type="password"
                          id="cpassword"
                          name="cpassword"
                          className="text-teal-800 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-teal-300 block w-full pl-10 p-2.5   dark:placeholder:text-teal-300 dark:text-teal-200 outline-none"
                          placeholder="Confirm Your Password"
                          autoComplete="off"
                          onChange={(e) => {
                            setConfirmpassword(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-5 flex items-center justify-center">
                      <button
                        type="submit"
                        onClick={handleAdminChange}
                        className="bg-teal-600 flex items-center justify-center p-2 w-[5.5rem] text-white font-bold rounded hover:shadow-3xl hover:bg-teal-800 hover:text-teal-300 transition-all duration-500 cursor-pointer select-none"
                      >
                        {isLoading ? (
                          <img
                            src="/adminIdPass.gif"
                            alt="..."
                            className="w-5 h-5"
                          />
                        ) : (
                          "Change"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
};

export default Dialog;
