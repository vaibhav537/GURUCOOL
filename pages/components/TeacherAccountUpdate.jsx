import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TeacherAccountUpdate = ({ visible, onClose, teacherEmail }) => {
  const [name, setName] = useState(""); // state  for storing the name value
  const [password, setPassword] = useState(""); // state  for storing the password value
  const [confirmPassword, setConfirmPassword] = useState(""); // state  for storing the confirm password value
  const [phone, setPhone] = useState(""); // state  for storing the phone value
  const [gender, setGender] = useState(""); // state  for storing the gender value
  const [loading, setLoading] = useState(false); //state for show the loading indicator
  const [disableButton, setDisableButton] = useState(false); //state for disabling the button
  const [disableDialogButton, setDisableDialogButton] = useState(false); //state for disabling the password dialog button
  const [dialogPassword, setDialogPassword] = useState(""); // state  for storing the  dialog  password value
  const [Div1, setDiv1] = useState(true); // state for showing and hiding the div1

  // toast configurations
  const toastConfig = {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    progress: undefined,
    theme: "light",
    bodyClassName: "font-bold select-none",
    closeButton: false,
  };

  //function to check the teacher's password
  const handlePasswordDialogClick = async (event) => {
    event.preventDefault();
    const matchPassword = await fetch("/api/checkTeacherPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: teacherEmail,
        password: dialogPassword,
      }),
    });
    const matchPasswordResponse = await matchPassword.json();

    if (matchPasswordResponse.success === true) {
      setDiv1(false);
      toast.success("Password Confirmed successfully", toastConfig);
    } else {
      toast.error("Wrong password", toastConfig);
    }
  };

  // function to update the teacher account
  const handleUpdateTeacher = async (event) => {
    setLoading(true);
    setDisableButton(true);
    event.preventDefault();
    if (!name || !password || !confirmPassword || !gender || !phone) {
      toast.error("Please fill in all fields", toastConfig);
      setLoading(false);
      setDisableButton(false);
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match", toastConfig);
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

    // using try catch block to better handing of the error
    try {
      const updateTeacher = await fetch("/api/updateTeacher", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          password,
          phone,
          gender,
          email: teacherEmail,
        }),
      });

      const updateTeacherResult = await updateTeacher.json();

      if (updateTeacherResult.success === true) {
        toast.success("Changed Successfully", toastConfig);
        setLoading(false);
        setDisableButton(false);
        onClose();
        setTimeout(() => {
          toast.success("Please Reload to see Changes !!", toastConfig);
        }, 1300);
      } else {
        toast.error("Can't Change Details", toastConfig);
        setLoading(false);
        setDisableButton(false);
      }
    } catch (error) {
      toast.error("Can't Change Details", toastConfig);
      setLoading(false);
      setDisableButton(false);
      console.log(error);
    }
  };

  // hiding the modal
  const handleClose = (e) => {
    if (e.target.id === "Container") {
      onClose();
    }
  };

  // if  visible props are true the showing of the modal and if not the returning null value
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
          className="fixed inset-0 z-20 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        >
          <form
            method="post"
            className="bg-white text-black  p-7 rounded flex flex-col"
          >
            {Div1 ? (
              <>
                <h1 className="text-2xl font-semibold text-green-700 m-auto">
                  Enter Your Password
                </h1>
                <div className="flex items-center justify-center mt-4">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(event) => setDialogPassword(event.target.value)}
                    className="outline-none pl-3 ring-2 transition-all duration-500 p-2  rounded  ring-green-900 text-lg focus:ring-4"
                  />
                </div>
                <div className="mt-5 m-auto">
                  <button
                    type="submit"
                    className={`${
                      disableDialogButton
                        ? "bg-green-600 hover:bg-green-200 px-3 flex items-center justify-center w-28 py-1 rounded-md text-white text-xl  cursor-not-allowed  transition-all duration-500"
                        : "bg-green-600 px-3 flex hover:bg-green-300 items-center justify-center w-28 py-1 rounded-md text-white text-xl  transition-all hover:shadow-3xl cursor-pointer duration-500"
                    }`}
                    disabled={disableDialogButton}
                    onClick={handlePasswordDialogClick}
                  >
                    Confirm
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className="m-auto font-bold text-2xl">
                  Update Your Profile
                </h1>
                <div className="flex gap-20 my-6">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-lg my-2">
                      Enter Your New Name
                    </label>
                    <input
                      type="text"
                      className="bg-green-200 focus:bg-green-100 outline-none p-1 ring-4 pl-3 transition-all duration-500 rounded-md ring-white focus:ring-green-400"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-lg my-2">
                      Email (You Cannot Change your Email)
                    </label>
                    <input
                      type="email"
                      className="bg-green-200 focus:bg-green-100 outline-none p-1 pl-3 ring-4 w-[14rem] transition-all duration-500 rounded-md ring-white focus:ring-green-400"
                      value={teacherEmail}
                      id="email"
                      disabled
                    />
                  </div>
                </div>
                <div className="flex gap-20 my-6">
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-lg my-2">
                      Phone
                    </label>
                    <input
                      type="number"
                      className="bg-green-200 focus:bg-green-100 outline-none p-1 ring-4 pl-3 transition-all duration-500 rounded-md ring-white focus:ring-green-400"
                      id="phone"
                      autoComplete="off"
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="text-lg my-2">
                      Select Your Gender
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
                </div>
                <div className="flex gap-20 my-6">
                  <div className="flex flex-col">
                    <label htmlFor="password" className="text-lg my-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="bg-green-200 focus:bg-green-100 outline-none p-1 ring-4 pl-3 transition-all duration-500 rounded-md ring-white focus:ring-green-400"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="cpassword" className="text-lg my-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="bg-green-200 focus:bg-green-100 outline-none p-1 ring-4 pl-3 transition-all duration-500 rounded-md ring-white focus:ring-green-400"
                      id="cpassword"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-10 ml-[11rem]  my-3">
                  <button
                    type="submit"
                    className={`${
                      disableButton
                        ? "bg-green-400 px-3 flex items-center justify-center w-28 py-1 rounded-md text-white text-xl  cursor-not-allowed  transition-all duration-500"
                        : "bg-green-400 px-3 flex items-center justify-center w-28 py-1 rounded-md text-white text-xl  transition-all hover:shadow-3xl cursor-pointer duration-500"
                    }`}
                    disabled={disableButton}
                    onClick={handleUpdateTeacher}
                  >
                    {loading ? (
                      <img src="/loader.gif" className="w-[20px] h-[20px]" />
                    ) : (
                      "Change"
                    )}
                  </button>
                  <button
                    type="reset"
                    className="bg-red-400 px-3 py-1 rounded-md text-white text-xl hover:shadow-3xl transition-all duration-500"
                  >
                    Reset
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </>
    );
  }
};

export default TeacherAccountUpdate;
