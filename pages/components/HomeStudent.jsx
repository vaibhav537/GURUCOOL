import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentDeleteAccount from "./StudentDeleteAccount";
import StudentAccountUpdate from "./StudentAccountUpdate";

const HomeStudent = () => {
  const [loading, setLoading] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [studentGender, setStudentGender] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [studentPic, setStudentPic] = useState("");
  const [studentUser, setStudentUser] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const router = useRouter();

  const toastConfig = {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    progress: undefined,
    theme: "dark",
  };

  const handleClose = () => {
    setVisible(false);
    setVisible2(false);
  };
  const toggleDropDown = () => {
    setDropdown(!dropdown);
  };

  useEffect(() => {
    const getStudent = async () => {
      setLoading(true);
      const studentToken = await JSON.parse(
        localStorage.getItem("student-token")
      );
      const studentInformation = await fetch("/api/studentTokenData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: studentToken,
        }),
      });
      const studentData = await studentInformation.json();
      if (studentData.status === true) {
        setStudentName(studentData.student.name);
        setStudentGender(studentData.student.gender);
        setStudentEmail(studentData.student.email);
        setStudentPhone(studentData.student.phone);
        setStudentPic(studentData.student.pic);
        setStudentUser(studentData.student.user);

        const ToastStudentName = studentData.student.name;
        const studentUpperCaseName = ToastStudentName.toUpperCase();

        toast.success(`WELCOME ${studentUpperCaseName} !!`, toastConfig);
        console.log(studentData);
        setLoading(false);
      } else if (studentData.status === false) {
        toast.error(" Token Expired, Please Login Again", toastConfig);
        setLoading(false);
      } else {
        toast.error(" Token Expired, Please Login Again", toastConfig);
        setLoading(false);
      }
    };
    getStudent();
  }, [router.query]);

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
      />
      {loading ? (
        <div className="flex items-center justify-center w-[99vw] h-[90vh] bg-blue-100">
          <img src="/student.gif" alt="..." className="w-20 h-20" />
        </div>
      ) : (
        <div className="flex  justify-center w-screen h-[90vh] bg-blue-100">
          <div className="flex flex-col">
            <h1 className="text-bold uppercase text-black"> {studentName} </h1>
            <h1 className="text-bold uppercase text-black">
              {" "}
              {studentGender}{" "}
            </h1>
            <h1 className="text-bold uppercase text-black"> {studentEmail} </h1>
            <h1 className="text-bold uppercase text-black"> {studentPhone} </h1>
            <h1 className="text-bold uppercase text-black"> {studentUser} </h1>
          </div>
          <div className="border-4 border-blue-800 w-[15rem] h-[30rem] shadow-2xl bg-white/25 rounded-lg ">
            <div className="">
              <img src={studentPic} alt="..." className="w-full  h-full pl-5" />
            </div>
          </div>
          <div
            className="absolute top-[5rem] right-[16rem]  cursor-pointer"
            onMouseEnter={toggleDropDown}
            onMouseLeave={toggleDropDown}
          >
            <i className="text-black text-2xl fa-solid fa-user-gear hover:text-gray-700 transition-all duration-500"></i>
            {dropdown && (
              <div className="absolute text-black top-[1.5rem] bg-white p-3 rounded-lg shadow-2xl -right-[3rem] w-36">
                <li
                  className="list-none py-2 border-b-2 cursor-pointer hover:text-slate-500"
                  onClick={() => setVisible2(true)}
                >
                  Delete Account
                </li>
                <li
                  className="list-none py-2 cursor-pointer hover:text-slate-500"
                  onClick={() => setVisible(true)}
                >
                  Update Account
                </li>
              </div>
            )}
          </div>
          <StudentAccountUpdate
            visible={visible}
            onClose={handleClose}
            studentEmail={studentEmail}
          />
          <StudentDeleteAccount
            visible={visible2}
            onClose={handleClose}
            studentEmail={studentEmail}
          />
        </div>
      )}
    </>
  );
};

export default HomeStudent;
