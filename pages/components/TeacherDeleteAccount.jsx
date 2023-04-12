import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TeacherDeleteAccount = ({
  visible,
  onClose,
  teacherEmail,
  teacherKam,
  render,
}) => {
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
  const [renderDel, setRenderDel] = useState(""); // state for rerendering


  const router = useRouter();
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

  useEffect(() => {
    const teacherToken = localStorage.getItem("teacher-token");
    if(!teacherToken){
      router.push("/register");
    }
  }, [renderDel, render]);

      //deleting the teacher
      const handleDelete = async(e) => {
        e.preventDefault();
        const teacherDelete = await fetch("/api/deleteTeacher",{
          method:"DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: teacherEmail,
          }),
        });
        const teacherDeleteResponse = await teacherDelete.json();
  
        if(teacherDeleteResponse === true){
          toast.success("Teacher deleted", toastConfig);
          localStorage.removeItem("teacher-token");
          setRenderDel("DONE")

        }else{
          toast.error("Teacher NOT deleted", toastConfig);
          console.log(teacherDeleteResponse)
        }
      }

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

  // hiding the modal
  const handleClose = (e) => {
    if (e.target.id === "Container") {
      onClose();
    }
    if (e.target.id === "Button") {
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
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        >
          <form
            method=""
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
                <h1>Are You Sure Want To delete your Account ?</h1>
                <div className="gap-20 flex ml-10 mt-6">
                  <button
                    className="bg-red-400 text-lg text-white hover:bg-red-300 hover:shadow-3xl rounded-lg transition-all duration-500 w-20 p-2"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-green-400 text-lg text-white hover:bg-green-300 hover:shadow-3xl rounded-lg transition-all duration-500 w-20 p-2"
                    onClick={handleClose}
                    id="Button"
                  >
                    Cancel
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

export default TeacherDeleteAccount;
