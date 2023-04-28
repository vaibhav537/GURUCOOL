import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentDeleteAccount from "./StudentDeleteAccount";
import StudentAccountUpdate from "./StudentAccountUpdate";
import Link from "next/link";
import TeacherRoomList from "./TeacherRoomList";

const HomeStudent = () => {
  const [loading, setLoading] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [studentGender, setStudentGender] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [studentPic, setStudentPic] = useState("");
  const [studentUser, setStudentUser] = useState("");
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [showDataDiv, setShowDataDiv] = useState(true);
  const [showTeacherRoom, setShowTeacherRoom] = useState(false);

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

  const handleLists = (e) => {
    e.preventDefault();

    if (showDataDiv === true) {
      setShowDataDiv(false);
      setShowTeacherRoom(true);
    } else {
      setShowDataDiv(true);
      setShowTeacherRoom(false);
    }
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
        <div className="flex relative justify-center w-screen h-[90vh]  dark:bg-blue-900/5 select-none  bg-slate-100 transition-all duration-500">
          {showDataDiv && (
            <div
              className="p-2 border-2 border-white/40 w-[65rem] left-[11rem] top-[3rem]  h-[37.5rem] my-20 shadow-2xl dark:bg-blue-800  bg-blue-100 overflow-hidden  rounded-lg absolute"
              data-aos="fade-up"
            >
              <h1 className="text-bold uppercase dark:text-white text-black text-center my-10 text-3xl font-semibold">
                {studentName}
              </h1>
              <div className="flex">
                <p className="text-bold ml-10 dark:text-white text-black my-10">
                  <span className="mr-2">Email :</span>
                  <span className="font-semibold uppercase text-xl">
                    {studentEmail}
                  </span>
                </p>
                <p className="text-bold ml-[23rem] dark:text-white text-black my-10">
                  <span className="mr-2">Phone :</span>
                  <span className="font-semibold uppercase text-xl">
                    {studentPhone}
                  </span>
                </p>
              </div>
              <div className="flex">
                <span className="absolute bg-blue-800 dark:bg-blue-300 transition-all duration-500 h-40 -z-10 rounded-full -top-11 w-40 -left-5"></span>
                <span className="absolute bg-blue-800 dark:bg-blue-300 transition-all duration-500 h-40 -z-10 rounded-full -bottom-11 w-40 -right-5"></span>
                <div className="flex">
                  <p className="text-bold ml-10 dark:text-white text-black my-10">
                    <span className="mr-2">Gender :</span>
                    <span className="font-semibold uppercase text-xl">
                      {studentGender}
                    </span>
                  </p>
                  <p className="text-bold ml-[38rem] dark:text-white mb-[10rem] text-black my-10">
                    <span className="mr-2">User :</span>
                    <span className="font-semibold uppercase text-xl">
                      {studentUser}
                    </span>
                  </p>
                </div>
              </div>
              <Link href={"/lobby/student"}>
                <span className="bg-blue-600 hover:shadow-3xl hover:bg-blue-300 rounded transition-all duration-500 p-2 text-white ml-[30rem] text-xl ">
                  Join Class
                </span>
              </Link>
            </div>
          )}
          {showTeacherRoom && <TeacherRoomList />}
          <div
            className=" p-2 flex flex-col dark:bg-blue-800 transition-all duration-500 items-center border-2 border-white/40 w-[15rem] h-[37.5rem] my-20 shadow-2xl bg-blue-100  rounded-lg absolute right-[15rem] top-12"
            data-aos="fade-up"
          >
            <div className="">
              <img
                src={studentPic}
                alt="..."
                className="w-full h-40 shadow-3xl"
                loading="lazy"
              />
            </div>
            <li
              className="list-none my-20 text-2xl text-black cursor-pointer hover:text-slate-500 dark:text-white"
              onClick={handleLists}
            >
              {showDataDiv ? "Teacher Rooms" : "Home"}
            </li>
            <li
              className="list-none text-2xl text-black cursor-pointer hover:text-slate-500 dark:text-white"
              onClick={() => setVisible2(true)}
            >
              Delete Account
            </li>
            <li
              className="list-none my-20  text-2xl text-black cursor-pointer hover:text-slate-500 dark:text-white"
              data-aos="fade"
              onClick={() => setVisible(true)}
            >
              Update Account
            </li>
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
