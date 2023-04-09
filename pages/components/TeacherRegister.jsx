import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";



const TeacherRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [pic, setPic] = useState("");
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [src, setSrc] = useState("/images/Blank.png");
  const [verify, setVerify] = useState(null);
  const [model, setModel] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpDisableButton, setOtpDisableButton] = useState(false);

  const router = useRouter();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSrc(URL.createObjectURL(e.target.files[0]));
    }
  };

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

  const postDetails = (pics) => {
    setLoading(true);
    setDisableButton(true);
    if (pics === undefined) {
      toast.warning("Please select an Image", toastConfig);
      setLoading(false);
      setDisableButton(true);
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "meetin");
      data.append("cloud_name", "dkut1is4d");
      fetch("https://api.cloudinary.com/v1_1/dkut1is4d/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setDisableButton(false);

          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setDisableButton(false);
        });
    } else {
      toast.warning("Please select an Image", toastConfig);
      setLoading(false);
      setDisableButton(false);
    }
  };

  //verifying the otp in this funvtion
  const handleOtpCode = async(e) => {
    e.preventDefault();
    setOtpLoading(true);
    setOtpDisableButton(true);

    if(!otp){
      toast.warning("Please Enter OTP", toastConfig);
      setOtpLoading(false);
      setOtpDisableButton(false);
      return;
    }else if(otp.toString().length > 6 || otp.toString().length < 6 ){
      toast.warning("Please Enter 6 Digits OTP Code", toastConfig);
      setOtpLoading(false);
      setOtpDisableButton(false);
      return;
    }else{
      try {
        const otpResult = await fetch("/api/verify/verifyOtpUSer",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            otp: otp,

          }),
        })
        const otpResponse = await otpResult.json();

        if(otpResponse.success=== true){
          toast.success("OTP Verified !!", toastConfig)
          setVerify(true);
          setOtpLoading(false);
          setOtpDisableButton(false);
          setModel(false)
        }else if(otpResponse.success === "exp"){
          toast.error("OTP Expired !!", toastConfig)
          setOtpLoading(false);
          setOtpDisableButton(false);
          setModel(false)
        }else {
          toast.warning("Wrong OTP !!", toastConfig);
          setOtpLoading(false);
          setOtpDisableButton(false);
          console.log(otpResponse)
        }
      } catch (error) {
        toast.warning("Error Occured !!", toastConfig);
        setOtpLoading(false);
        setOtpDisableButton(false);
        setModel(false);
      }
    }
  }


  //verifying the email Address field
  const verifyEmail = async (event) => {
    event.preventDefault(); // preventing  form from default action
    setModel(true); //Displaying the dailog/modal
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Regex for the email

    if (!email) {
      toast.warning("Please Fill Email Field", toastConfig);
      setLoading(false);
      setModel(false); //Removing model
      setDisableButton(false);
      return;
    } else if (!emailRegex.test(email)) {
      toast.warning("Invalid Email Address", toastConfig);
      setLoading(false);
      setModel(false);
      setDisableButton(false);
      return;
    } else {
      const VerifyResult = await fetch("/api/verify/GeneratingOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name,
        }),
      });
      const VerifyData = await VerifyResult.json();
      if (VerifyData.success === true) {
        toast.success("An Otp Has Send On Your Email Address !!", toastConfig);
        setLoading(false);
        setDisableButton(false);
      } else {
        toast.error("Otp Cannot Sent, Retry !!", toastConfig);
        setLoading(false);
        setDisableButton(false);
        setModel(false);
      }
    }
  };

  //Submitting the details to the backend
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDisableButton(true);
    if (!name || !email || !phone || !gender || !password || !confirmpassword) {
      toast.warning("Please Fill all the Fields", toastConfig);
      setLoading(false);
      setDisableButton(false);
      return;
    } else if (pic === undefined || pic === null || pic === "") {
      toast.warning("Please Choose a Profile Picture", toastConfig);
      setLoading(false);
      setDisableButton(false);
      return;
    }

    // validating the phone number
    const phoneRegex = /^[0-9]{10}$/; // regular expression for 10-digit phone number
    if (!phoneRegex.test(phone)) {
      toast.warning("Invalid Phone Number", toastConfig);
      setLoading(false);
      setDisableButton(false);
      return;
    }

    //validating the email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression for email
    if (!emailRegex.test(email)) {
      toast.warning("Invalid Email Address", toastConfig);
      setLoading(false);
      setDisableButton(false);
      return;
    }

    //verify Otp from the Email
    if (verify === null) {
      toast.warning("Please Verify Your Email Address", toastConfig);
      setLoading(false);
      setDisableButton(false);
      return;
    }

    if (password !== confirmpassword) {
      toast.warning("Passwords not Matched", toastConfig);
      setDisableButton(false);
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/registerteacher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          gender,
          password,
          confirmpassword,
          pic,
        }),
      });

      let response = await res.json();
      if (response.success === true) {
        toast.success("Registration Succesfull", toastConfig);
        setLoading(false);
        setDisableButton(true);
        localStorage.setItem("teacher-info", JSON.stringify(response.teacher));
        router.push("/teacher/selectcategory");
      } else if(response.success === "already"){
        toast.error("Your Id already Exist !!", toastConfig);
        setLoading(false);
        setDisableButton(false);
      }
      else {
        toast.error("Registration Failed !!", toastConfig);
        setLoading(false);
        setDisableButton(false);
      }
    } catch (error) {
      toast.error("Error Occured, Try Again Later", toastConfig);
      setLoading(false);
      setDisableButton(false);
    }
  };
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
      />
      <div className="flex justify-center items-center transition-all duration-1000 ">
        <div className="rounded-md p-20  shadow-lg dark:bg-green-900 mt-4 bg-green-100">
          <form
            method="post"
            className="flex flex-col"
            encType="multipart/form-data"
          >
            <div className="flex">
              <div className="mt-[23px]">
                <div className="relative">
                  <div className="relative mb-6 ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fa-solid fa-user  text-green-400"></i>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="text-green-800 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-green-300 bg-green-100 block w-full pl-10 p-2.5  dark:placeholder:text-green-300 dark:bg-green-900 dark:text-green-200 outline-none"
                      placeholder="Your Name"
                      autoComplete="off"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="relative">
                  <div className="relative mb-6 ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fa-solid fa-envelope  text-green-400"></i>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="text-green-800 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-green-300 bg-green-100 block w-full pl-10 p-2.5  dark:placeholder:text-green-300 dark:bg-green-900 dark:text-green-200 outline-none"
                      placeholder="Your Email"
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <div
                      onClick={verifyEmail}
                      className="h-5 w-[5.6rem] text-slate-400 dark:text-green-300 hover:text-slate-600 dark:hover:text-green-800 cursor-pointer absolute -right-[30px] top-[45px]"
                    >
                      Verify Email
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative mb-6 ">
                    <div className="text-xl absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fa-solid fa-phone  text-green-400"></i>
                    </div>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      className="text-green-800 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-green-300 bg-green-100 block w-full pl-10 p-2.5  dark:placeholder:text-green-300 dark:bg-green-900 dark:text-green-200 outline-none"
                      placeholder="Your Number"
                      autoComplete="off"
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="relative mt-6 flex flex-col">
                  <label
                    htmlFor="gender"
                    className="text-gray-600 dark:text-green-100"
                  >
                    Your Gender
                  </label>
                  <div className="flex">
                    <div className="flex items-center mr-4 mt-2">
                      <input
                        id="male"
                        type="radio"
                        value="male"
                        name="gender"
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                        className="w-4 h-4 dark:accent-green-300 text-blue-600 accent-green-700 bg-gray-100 border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                        required
                      />
                      <label
                        htmlFor="male"
                        className="ml-2 mt-1 text-sm font-medium text-gray-600 select-none  dark:text-green-100"
                      >
                        Male
                      </label>
                    </div>
                    <div className="flex items-center mr-4 mt-2">
                      <input
                        id="female"
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                        className=" dark:accent-green-300 w-4 h-4 accent-green-700 text-blue-600 bg-gray-100 border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                        required
                      />
                      <label
                        htmlFor="female"
                        className="ml-2 mt-1 text-sm font-medium text-gray-600 select-none dark:text-green-100"
                      >
                        Female
                      </label>
                    </div>
                    <div className="flex items-center mr-4 mt-2">
                      <input
                        id="other"
                        type="radio"
                        value="other"
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                        name="gender"
                        className="w-4 h-4 rounded-full dark:accent-green-300 accent-green-700 text-blue-600 bg-gray-100 border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                        required
                      />
                      <label
                        htmlFor="other"
                        className="ml-2 mt-1 text-sm font-medium text-gray-600 select-none dark:text-green-100"
                      >
                        Other
                      </label>
                    </div>
                  </div>
                </div>
                <div className="relative mt-4">
                  <div className="relative mb-6">
                    <div className="text-xl absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fa-solid fa-lock text-green-400"></i>
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className="text-green-800 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-green-300 bg-green-100 block w-full pl-10 p-2.5  dark:placeholder:text-green-300 dark:bg-green-900 dark:text-green-200 outline-none"
                      placeholder="Create Your Password"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="relative">
                  <div className="relative mb-6 ">
                    <div className="text-xl absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fa-solid fa-key text-green-400"></i>
                    </div>
                    <input
                      type="password"
                      id="confirmpassword"
                      name="confirmpassword"
                      onChange={(e) => {
                        setConfirmpassword(e.target.value);
                      }}
                      className="text-green-800 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-green-300 bg-green-100 block w-full pl-10 p-2.5   dark:placeholder:text-green-300 dark:bg-green-900 dark:text-green-200 outline-none"
                      placeholder="Confirm Your Password"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-2xl flex items-center   justify-center flex-col ml-12 shadow-md bg-white dark:bg-slate-600 p-5 w-[250px] h-[350px] mt-[40px]">
                <div className="border-4 overflow-hidden w-[10rem] h-[10rem] rounded-full  shadow-3xl border-green-300">
                  <img src={src} alt="..." className="h-full w-full" />
                </div>
                <label
                  htmlFor="pic"
                  className="mt-5 border-2 cursor-pointer text-black dark:border-white dark:hover:text-black dark:hover:bg-white border-black p-2 hover:bg-black transition-all rounded-lg hover:text-white"
                >
                  SET PROFILE
                </label>
                <input
                  type="file"
                  id="pic"
                  className="hidden"
                  accept="image/*"
                  name="file"
                  onChange={(e) => {
                    onImageChange(e);
                    postDetails(e.target.files[0]);
                  }}
                />
              </div>
            </div>
            <div className="mt-12 flex justify-evenly items-center">
              <button
                type="submit"
                onClick={submitHandler}
                className={` ${
                  disableButton
                    ? "cursor-not-allowed font-bold font-Crimson text-lg text-white bg-green-400 uppercase rounded  hover:bg-green-300  hover:text-green-500 transition-all duration-700 dark:text-white bg-transparent p-2 px-5 dark:bg-green-700 dark:hover:bg-green-900"
                    : "font-bold font-Crimson text-lg text-white bg-green-400 uppercase rounded  hover:bg-green-300  hover:text-green-500 transition-all duration-700 dark:text-white bg-transparent p-2 px-5 dark:bg-green-700 dark:hover:bg-green-900 cursor-pointer hover:shadow-3xl"
                }`}
                disabled={disableButton}
              >
                {loading ? (
                  <img src="/loader.gif" className="w-[20px] h-[20px]" />
                ) : (
                  "ReGister"
                )}
              </button>
            </div>
          </form>
          {model && (
            <div
              id="Container"
              className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
            >
              <div className="bg-green-100 p-5 rounded flex flex-col items-center justify-center text-black dark:text-white ">
                <h1 className="text-3xl text-slate-500 select-none">
                  Welcome to{" "}
                  <span className="uppercase font-bold text-slate-800">
                    gurucool
                  </span>
                </h1>
                <div className="bg-white rounded-full w-28 h-28 flex items-center justify-center select-none my-6">
                  <i className="fa-solid fa-shield-halved text-slate-800 text-[4rem]"></i>
                </div>
                <h2 className="text-xl font-medium select-none">
                  Enter Your Verification Code
                </h2>
                <div>
                  <input type="number" className="text-black ring-2 ring-green-100 outline-none p-2 my-3 pl-4 text-lg rounded focus:ring-green-500 transition-all duration-500" onChange={(event)=> setOtp(event.target.value)} placeholder="6 Digit Code"/>
                </div>
                <button type="submit" className="text-white w-40 rounded-md my-5 p-2 flex items-center justify-center bg-green-700 hover:shadow-3xl hover:bg-green-300 transition-all duration-500" onClick={handleOtpCode}>
                  Verify Code
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TeacherRegister;
