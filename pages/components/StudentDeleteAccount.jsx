import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const StudentDeleteAccount = ({ visible, onClose, studentEmail }) => {
  const [disableButton, setDisableButton] = useState(false); //state for disabling the button
  const [disableDialogButton, setDisableDialogButton] = useState(false); //state for disabling the password dialog button
  const [dialogPassword, setDialogPassword] = useState(""); // state  for storing the  dialog  password value
  const [Div1, setDiv1] = useState(true); // state for showing and hiding the div1

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
    const studentToken = localStorage.getItem("student-token");
    if (!studentToken) {
      router.push("/register");
    }
  }, []);

  // hiding the modal
  const handleClose = (e) => {
    if (e.target.id === "Container") {
      onClose();
    }
    if (e.target.id === "Button") {
      onClose();
    }
  };

  //deleting the student
  const handleDelete = async (e) => {
    e.preventDefault();
    const studentDelete = await fetch("/api/deleteStudent", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: studentEmail,
      }),
    });
    const studentDeleteResponse = await studentDelete.json();

    if (studentDeleteResponse.success === true) {
      toast.success("Student deleted", toastConfig);
      localStorage.removeItem("student-token");
      router.reload();
      router.push("/register");
    } else {
      toast.error("Student NOT deleted", toastConfig);
    }
  };

  //function to check the teacher's password
  const handlePasswordDialogClick = async (event) => {
    event.preventDefault();
    const matchPassword = await fetch("/api/checkStudentPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: studentEmail,
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
          data-aos= "zoom-in"
          id="Container"
          className="fixed inset-0 bg-black z-10 bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        >
          <form
            method=""
            className="bg-white text-black  p-7 rounded flex flex-col"
          >
            {Div1 ? (
              <>
                <h1 className="text-2xl font-semibold text-blue-700 m-auto">
                  Enter Your Password
                </h1>
                <div className="flex items-center justify-center mt-4">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(event) => setDialogPassword(event.target.value)}
                    className="outline-none pl-3 ring-2 transition-all duration-500 p-2  rounded  ring-blue-900 text-lg focus:ring-4"
                  />
                </div>
                <div className="mt-5 m-auto">
                  <button
                    type="submit"
                    className={`${
                      disableDialogButton
                        ? "bg-blue-600 hover:bg-blue-200 px-3 flex items-center justify-center w-28 py-1 rounded-md text-white text-xl  cursor-not-allowed  transition-all duration-500"
                        : "bg-blue-600 px-3 flex hover:bg-blue-300 items-center justify-center w-28 py-1 rounded-md text-white text-xl  transition-all hover:shadow-3xl cursor-pointer duration-500"
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
                    className="bg-blue-400 text-lg text-white hover:bg-blue-300 hover:shadow-3xl rounded-lg transition-all duration-500 w-20 p-2"
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

export default StudentDeleteAccount;
