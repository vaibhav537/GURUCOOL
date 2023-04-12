import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const StudentRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const [pic, setPic] = useState("");
  const [loading, setLoading] = useState(false);
  const [src, setSrc] = useState("/images/Blank.png");
  const [verify, setVerify] = useState(null);
  const [model, setModel] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpDisableButton, setOtpDisableButton] = useState(false);

  const router = useRouter();

  const toastConfig = {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: false,
    progress: undefined,
    theme:"dark",
    bodyClassName: "font-bold font-Nunito",
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSrc(URL.createObjectURL(e.target.files[0]));
    }
  };

  const postDetails = (pics) => {
    setDisableButton(true);
    setLoading(true);
    if (pics === undefined) {
      toast.warning("Please select an Image", toastConfig);
      setLoading(false);
      setDisableButton(false);
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
          setLoading(false);
          setDisableButton(false);
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
  const handleOtpCode = async (e) => {
    e.preventDefault();
    setOtpLoading(true);
    setOtpDisableButton(true);

    if (!otp) {
      toast.warning("Please Enter OTP", toastConfig);
      setOtpLoading(false);
      setOtpDisableButton(false);
      return;
    } else if (otp.toString().length > 6 || otp.toString().length < 6) {
      toast.warning("Please Enter 6 Digits OTP Code", toastConfig);
      setOtpLoading(false);
      setOtpDisableButton(false);
      return;
    } else {
      try {
        const otpResult = await fetch("/api/verify/verifyOtpUSer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            otp: otp,
          }),
        });
        const otpResponse = await otpResult.json();

        if (otpResponse.success === true) {
          toast.success("OTP Verified !!", toastConfig);
          setVerify(true);
          setOtpLoading(false);
          setOtpDisableButton(false);
          setModel(false);
        } else if (otpResponse.success === "exp") {
          toast.error("OTP Expired !!", toastConfig);
          setOtpLoading(false);
          setOtpDisableButton(false);
          setModel(true);
        } else {
          toast.warning("Wrong OTP !!", toastConfig);
          setOtpLoading(false);
          setOtpDisableButton(false);
        }
      } catch (error) {
        toast.warning("Error Occured !!", toastConfig);
        setOtpLoading(false);
        setOtpDisableButton(false);
        setModel(false);
      }
    }
  };

  //verifying the email Address field
  const verifyEmail = async (event) => {
    event.preventDefault(); // preventing  form from default action
    setModel(true); //Displaying the dailog/modal
    setLoading(true);
    setDisableButton(true);
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

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !email || !phone || !gender || !password || !confirmpassword) {
      toast.warning("Please Fill all the Fields", toastConfig);
      setLoading(false);
      setDisableButton(false);
      return;
    }

    if (pic === undefined || pic === null || pic === "") {
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
      setLoading(false);
      setDisableButton(false);
      return;
    }
    try {
      const res = await fetch("/api/registerstudent", {
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

      const response = await res.json();
      if (response.success === true) {
        toast.success("Registration Succesfull !!", toastConfig);
        localStorage.setItem("student-token", JSON.stringify(response.token));
        setLoading(false);
        setDisableButton(false);
        router.push("/");
      } else if (response.success === "already") {
        toast.error("Student Already Registered!!", toastConfig);
        setLoading(false);
        setDisableButton(false);
      } else {
        toast.success("Can't Register Try Again Later !!", toastConfig);
        setLoading(false);
        setDisableButton(false);
      }
    } catch (error) {
      toast.error("Error Occured, Try Again Later", toastConfig);
      console.log(error);
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
        closeButton={false}
      />
      <div className="flex  justify-center items-center transition-all duration-1000 ">
        <div className="rounded-md p-20  shadow-lg dark:bg-blue-900 mt-4 bg-blue-100">
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
                      <i className="fa-solid fa-user  text-blue-400"></i>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="text-blue-800 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-blue-300 bg-blue-100 block w-full pl-10 p-2.5  dark:placeholder:text-blue-300 dark:bg-blue-900 dark:text-blue-200 outline-none"
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
                      <i className="fa-solid fa-envelope  text-blue-400"></i>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="text-blue-800 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-blue-300 bg-blue-100 block w-full pl-10 p-2.5  dark:placeholder:text-blue-300 dark:bg-blue-900 dark:text-blue-200 outline-none"
                      placeholder="Your Email"
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <div
                      onClick={verifyEmail}
                      className="h-5 w-[5.6rem] text-slate-400 dark:text-blue-300 hover:text-slate-600 dark:hover:text-blue-800 cursor-pointer absolute -right-[30px] top-[45px]"
                    >
                      Verify Email
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative mb-6 ">
                    <div className="text-xl absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fa-solid fa-phone  text-blue-400"></i>
                    </div>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      className="text-blue-800 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-blue-300 bg-blue-100 block w-full pl-10 p-2.5  dark:placeholder:text-blue-300 dark:bg-blue-900 dark:text-blue-200 outline-none"
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
                    className="text-gray-600 dark:text-blue-100"
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
                        className="w-4 h-4 dark:accent-blue-300 text-blue-600 accent-blue-700 bg-gray-100 border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                        required
                      />
                      <label
                        htmlFor="male"
                        className="ml-2 mt-1 text-sm font-medium text-gray-600 select-none  dark:text-blue-100"
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
                        className=" dark:accent-blue-300 w-4 h-4 accent-blue-700 text-blue-600 bg-gray-100 border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                        required
                      />
                      <label
                        htmlFor="female"
                        className="ml-2 mt-1 text-sm font-medium text-gray-600 select-none dark:text-blue-100"
                      >
                        Female
                      </label>
                    </div>
                    <div className="flex items-center mr-4 mt-2">
                      <input
                        id="other"
                        type="radio"
                        value="other"
                        name="gender"
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                        className="w-4 h-4 rounded-full dark:accent-blue-300 accent-blue-700 text-blue-600 bg-gray-100 border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                        required
                      />
                      <label
                        htmlFor="other"
                        className="ml-2 mt-1 text-sm font-medium text-gray-600 select-none dark:text-blue-100"
                      >
                        Other
                      </label>
                    </div>
                  </div>
                </div>
                <div className="relative mt-4">
                  <div className="relative mb-6">
                    <div className="text-xl absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fa-solid fa-lock text-blue-400"></i>
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="text-blue-800 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-blue-300 bg-blue-100 block w-full pl-10 p-2.5  dark:placeholder:text-blue-300 dark:bg-blue-900 dark:text-blue-200 outline-none"
                      placeholder="Create Your Password"
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
                      <i className="fa-solid fa-key text-blue-400"></i>
                    </div>
                    <input
                      type="password"
                      id="cpassword"
                      name="cpassword"
                      className="text-blue-800 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-blue-300 bg-blue-100 block w-full pl-10 p-2.5   dark:placeholder:text-blue-300 dark:bg-blue-900 dark:text-blue-200 outline-none"
                      placeholder="Confirm Your Password"
                      autoComplete="off"
                      onChange={(e) => {
                        setConfirmpassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-2xl flex items-center   justify-center flex-col ml-12 shadow-md bg-white dark:bg-slate-600 p-5 w-[250px] h-[350px] mt-[40px]">
                <div className="border-4 overflow-hidden w-[10rem] h-[10rem] rounded-full  shadow-3xl border-blue-300">
                  <img src={src} alt="..." className="h-full w-full" />
                </div>
                <label
                  htmlFor="pic"
                  className="mt-5 border-2 cursor-pointer text-black dark:text-white dark:border-white dark:hover:text-black dark:hover:bg-white border-black p-2 hover:bg-black transition-all rounded-lg hover:text-white"
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
                    ? "cursor-not-allowed font-bold font-Crimson text-lg text-white bg-blue-400 uppercase rounded  hover:bg-blue-300  hover:text-blue-500 transition-all duration-700 dark:text-white bg-transparent p-2 px-5 dark:bg-blue-700 dark:hover:bg-blue-900"
                    : "font-bold font-Crimson text-lg text-white bg-blue-400 uppercase rounded  hover:bg-blue-300  hover:text-blue-500 transition-all duration-700 dark:text-white bg-transparent p-2 px-5 dark:bg-blue-700 dark:hover:bg-blue-900 cursor-pointer hover:shadow-3xl"
                }`}
                disabled={disableButton}
              >
                {loading ? (
                  <img src="/student.gif" alt="..." className="w-5 h-5" />
                ) : (
                  "register"
                )}
              </button>
            </div>
          </form>
          {model && (
            <div
              id="Container"
              className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
            >
              <div className="bg-blue-100 p-5 rounded flex flex-col items-center justify-center text-black dark:text-white ">
                <h1 className="text-3xl text-slate-500 select-none">
                  Welcome to
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
                  <input
                    type="number"
                    className="text-black ring-2 ring-blue-100 outline-none p-2 my-3 pl-4 text-lg rounded focus:ring-blue-500 transition-all duration-500"
                    onChange={(event) => setOtp(event.target.value)}
                    placeholder="6 Digit Code"
                  />
                </div>
                <button
                  type="submit"
                  className="text-white select-none w-40 rounded-md my-5 p-2 flex items-center justify-center bg-blue-700 hover:shadow-3xl hover:bg-blue-300 transition-all duration-500"
                  onClick={handleOtpCode}
                >
                  { otpLoading ? <img className="w-[20px] h-[20px]" alt="..." src="/loader.png"/>:"Verify Code"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentRegister;
