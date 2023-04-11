import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TeacherDeleteAccount = ({ visible, onClose, teacherEmail }) => {
  const [name, setName] = useState(""); // state  for storing the name value
  const [password, setPassword] = useState(""); // state  for storing the password value
  const [confirmPassword, setConfirmPassword] = useState(""); // state  for storing the confirm password value
  const [phone, setPhone] = useState(""); // state  for storing the phone value
  const [gender, setGender] = useState(""); // state  for storing the gender value
  const [loading, setLoading] = useState(false); //state for show the loading indicator
  const [disableButton, setDisableButton] = useState(false); //state for disabling the button

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

  //deleting the teacher
  const handleDelete = (e) => {

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
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        >
          <form
            method=""
            className="bg-white text-black  p-7 rounded flex flex-col"
          >
            <h1>Are You Sure Want To delete your Account ?</h1>
            <div className="gap-20 flex ml-10 mt-6">
                <button className="bg-red-400 text-lg text-white hover:bg-red-300 hover:shadow-3xl rounded-lg transition-all duration-500 w-20 p-2" onClick={handleDelete}>Delete</button>
                <button className="bg-green-400 text-lg text-white hover:bg-green-300 hover:shadow-3xl rounded-lg transition-all duration-500 w-20 p-2" onClick={()=>onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </>
    );
  }
};

export default TeacherDeleteAccount;
