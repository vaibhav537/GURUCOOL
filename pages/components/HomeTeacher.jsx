import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeTeacher = () => {
  const [loading, setLoading] = useState(false);
  const [teacherName, setTeacherName] = useState("");
  const [teacherCategory, setTeacherCategory] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [teacherPhone, setTeacherPhone] = useState("");
  const [teacherPic, setTeacherPic] = useState("");
  const [teacherUser, setTeacherUser] = useState("");
  const router = useRouter();
  useEffect(() => {
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
        setTeacherName(teacherData.teacher.teacher.name);
        setTeacherCategory(teacherData.teacher.teacher.category);
        setTeacherEmail(teacherData.teacher.teacher.email);
        setTeacherPhone(teacherData.teacher.teacher.phone);
        setTeacherPic(teacherData.teacher.teacher.pic);
        setTeacherUser(teacherData.teacher.teacher.user);
        const ToastTeacherName = teacherData.teacher.teacher.name
        const teacherUpperCaseName = ToastTeacherName.toUpperCase();

        toast.success(`WELCOME ${teacherUpperCaseName} !!`, {
          position: "top-center",
          hideProgressBar: true,
          closeOnClick: true,
          progress: undefined,
          theme: "light",
        });
        console.log(teacherData);
        setLoading(false);
      } else {
        toast.error(" Token Expired, Please Login Again", {
          position: "bottom-center",
          hideProgressBar: true,
          closeOnClick: true,
          progress: undefined,
          theme: "light",
          autoClose: 1000,
        });
        setLoading(false);
      }
    };
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
        <div className="flex items-center justify-center w-[99vw] h-[90vh] bg-green-100">
          <img src="/loader.gif" alt="..." className="w-20 h-20" />
        </div>
      ) : (
        <div className="flex  justify-center w-[99vw] h-[90vh] bg-green-100">
          <div className="">
            <h1 className="text-bold uppercase text-black"> {teacherName} </h1>
          </div>
          <div className="border-4 border-green-800 w-[15rem] h-[30rem] shadow-2xl bg-white/25 rounded-lg ">
            <div className=""><img src={teacherPic} alt="..." className="w-[10rem] h-[10rem] pl-5"/></div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeTeacher;
