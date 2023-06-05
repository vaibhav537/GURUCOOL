/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TeacherAccountUpdate from "./TeacherAccountUpdate";
import TeacherDeleteAccount from "./TeacherDeleteAccount";
import Image from "next/image";
import Link from "next/link";

const HomeTeacher = () => {
  const [loading, setLoading] = useState(false);
  const [teacherName, setTeacherName] = useState("");
  const [teacherCategory, setTeacherCategory] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [teacherPhone, setTeacherPhone] = useState("");
  const [teacherPic, setTeacherPic] = useState("");
  const [teacherUser, setTeacherUser] = useState("");
  const [teacherGender, setTeacherGender] = useState("");
  const [teacherRoom, setTeacherRoom] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const router = useRouter();

  const handleClose = () => {
    setVisible(false);
    setVisible2(false);
  };
  const toggleDropDown = () => {
    setDropdown(!dropdown);
  };

  // toast configurations
  const toastConfig = {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    progress: undefined,
    theme: "light",
    bodyClassName: "font-bold select-none font-Nunito",
    closeButton: false,
  };

  const getTeacher = async () => {
    setLoading(true);
    const teacherToken = await JSON.parse(
      localStorage.getItem("teacher-token")
    );
    const teacherInformation = await fetch("/api/teacherTokenData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: teacherToken,
      }),
    });
    const teacherData = await teacherInformation.json();

    if (teacherData.status === true) {
      setTeacherName(teacherData.teacher.name);
      setTeacherCategory(teacherData.teacher.category);
      setTeacherEmail(teacherData.teacher.email);
      setTeacherPhone(teacherData.teacher.phone);
      setTeacherPic(teacherData.teacher.pic);
      setTeacherUser(teacherData.teacher.user);
      setTeacherGender(teacherData.teacher.gender);
      setTeacherRoom(teacherData.teacher.room);

      const ToastTeacherName = teacherData.teacher.name;
      const teacherUpperCaseName = ToastTeacherName.toUpperCase();
      toast.success(`WELCOME ${teacherUpperCaseName} !!`, toastConfig);
      console.log(teacherData);
      setLoading(false);
    } else {
      toast.error(" Token Expired, Please Login Again", toastConfig);
      setLoading(false);
    }
  };

  useEffect(() => {
    getTeacher();
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
        <div className="flex items-center  justify-center w-screen  max-w-full min-w-fit h-[90vh] dark:bg-green-900/5 select-none bg-white transition-all duration-500  ">
          <Image src="/loader.gif" alt="..." width={80} height={80} />
        </div>
      ) : (
        <div className="flex relative justify-center w-screen h-[90vh]  dark:bg-green-900/5 select-none  bg-slate-100 transition-all duration-500">
          <div
            className="p-2 border-2 border-white/40 w-[65rem] left-[11rem] top-[3rem]  h-[37.5rem] my-20 shadow-2xl dark:bg-green-800  bg-green-100 overflow-hidden  rounded-lg absolute"
            data-aos="fade-up"
          >
            <h1 className="text-bold uppercase dark:text-white text-black text-center my-10 text-3xl font-semibold">
              {teacherName}
            </h1>
            <div className="flex items-center justify-between">
              <p className="text-bold ml-10 dark:text-white text-black my-10">
                <span className="mr-2">Email :</span>
                <span className="font-semibold uppercase text-xl">
                  {teacherEmail}
                </span>
              </p>
              <p className="text-bold mr-10 dark:text-white text-black my-10">
                <span className="mr-2">Phone :</span>
                <span className="font-semibold uppercase text-xl">
                  {teacherPhone}
                </span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-bold ml-10 dark:text-white text-black my-2">
                <span className="mr-2">Category :</span>
                <span className="font-semibold uppercase text-xl">
                  {teacherCategory}
                </span>
              </p>
              <span className="absolute bg-green-800 dark:bg-green-300 transition-all duration-500 h-40 -z-10 rounded-full -top-11 w-40 -left-5"></span>
              <span className="absolute bg-green-800 dark:bg-green-300 transition-all duration-500 h-40 -z-10 rounded-full -bottom-11 w-40 -right-5"></span>
              <p className="text-bold mr-10 dark:text-white text-black my-2">
                <span className="mr-2">User :</span>
                <span className="font-semibold uppercase text-xl">
                  {teacherUser}
                </span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-bold ml-10 dark:text-white text-black my-10">
                <span className="mr-2">Gender :</span>
                <span className="font-semibold uppercase text-xl">
                  {teacherGender}
                </span>
              </p>
              <p className="text-bold mr-10  dark:text-white mb-[10rem] text-black my-10">
                <span className="mr-2">Room Number :</span>
                <span className="font-semibold uppercase text-xl">
                  {teacherRoom}
                </span>
              </p>
            </div>
            <Link href={"/lobby/teacher"}>
              <span className="bg-green-600 hover:shadow-3xl hover:bg-green-300 rounded transition-all duration-500 p-2 text-white ml-[30rem] text-xl ">
                Start Class
              </span>
            </Link>
          </div>
          <div
            className=" p-2 flex flex-col dark:bg-green-800 transition-all duration-500 items-center border-2 border-white/40 w-[15rem] h-[37.5rem] my-20 shadow-2xl bg-green-100  rounded-lg absolute right-[15rem] top-12"
            data-aos="fade-up"
          >
            <div className="">
              <img
                src={teacherPic}
                alt="..."
                className="w-full h-40 shadow-3xl"
                loading="lazy"
              />
            </div>
            <li
              className="list-none my-20 text-2xl text-black cursor-pointer hover:text-slate-500 dark:text-white"
              onClick={() => setVisible2(true)}
            >
              Delete Account
            </li>
            <li
              className="list-none text-2xl text-black cursor-pointer hover:text-slate-500 dark:text-white"
              onClick={() => setVisible(true)}
            >
              Update Account
            </li>
          </div>

          <TeacherAccountUpdate
            visible={visible}
            onClose={handleClose}
            teacherEmail={teacherEmail}
          />
          <TeacherDeleteAccount
            visible={visible2}
            onClose={handleClose}
            teacherEmail={teacherEmail}
          />
        </div>
      )}
    </>
  );
};

export default HomeTeacher;
