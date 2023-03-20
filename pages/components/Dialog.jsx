import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dialog = ({ visible, onClose }) => {
  const [otpCode, setOtpCode] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [firstDiv, setFirstDiv] = useState(true);
  const [secondDiv, setSecondDiv] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleClose = (e) => {
    if (e.target.id === "Container") {
      onClose();
    }
  };

  const handleOTP = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (firstDiv === false) {
      setFirstDiv(true);
      setSecondDiv(false);
    }
    if (otpCode) {
      const codeString = otpCode.toString();
      if (codeString.length === 6) {
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
            toast.success("Verified ", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              progress: undefined,
              theme: "light",
            });
            setIsLoading(false);
            if (firstDiv === true) {
              setSecondDiv(true);
              setFirstDiv(false);
            }
          } else {
            toast.error("Invalid Verification Code", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              progress: undefined,
              theme: "light",
            });
            setIsLoading(false);
          }
        } catch (error) {
          setIsLoading(false);
          console.log(error);
        }
      } else {
        toast.error("Invalid Verification Code", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          progress: undefined,
          theme: "light",
        });
        setIsLoading(false);
      }
    }
    else{
      toast.error("Please Enter the Verification Code", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        progress: undefined,
        theme: "light",
      });
      setIsLoading(false);
    }
  };

  const handleAdminChange = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      if (!email || !password || !confirmpassword) {
        toast.error("Please Enter All Fields", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          progress: undefined,
          theme: "light",
        });
        setIsLoading(false);
        return;
      }
      if (password !== confirmpassword) {
        toast.error("Passwords not Matched", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          progress: undefined,
          theme: "light",
        });
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
        toast.success("Admin Id Password Updated !!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          progress: undefined,
          theme: "light",
        });
        setIsLoading(false);
        handleClose();
      } else {
        toast.error("Admin Not Updated !!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          progress: undefined,
          theme: "light",
        });
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
        toast.success("Verfication Code Sent", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Could'nt Send Verification Code", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          progress: undefined,
          theme: "light",
        });
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
                <div className="flex items-center justify-center mt-2 mb-4">
                  <img
                    src="/images/AdminOtp.png"
                    alt="..."
                    className="w-36 h-32 select-none"
                  />
                </div>
                <h1 className="text-center text-2xl font-bold select-none">
                  Enter the Verification Code
                </h1>
                <form className="flex justify-center items-center flex-col my-5">
                  <div className="flex">
                    <input
                      type="number"
                      className="w-32 font-bold ring-1 ring-black focus:ring-2 mx-2 outline-none h-11 rounded text-lg text-center select-none"
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
