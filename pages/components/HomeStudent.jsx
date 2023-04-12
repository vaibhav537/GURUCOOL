import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const HomeStudent = () => {
  const [loading, setLoading] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [studentGender, setStudentCategory] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [studentPic, setStudentPic] = useState("");
  const [studentUser, setStudentUser] = useState("");


  const router = useRouter();

  const toastConfig = {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    progress: undefined,
    theme: "dark",
  }

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
        setStudentName(studentData.student.student.name);
        setStudentCategory(studentData.student.student.category);
        setStudentEmail(studentData.student.student.email);
        setStudentPhone(studentData.student.student.phone);
        setStudentPic(studentData.student.student.pic);
        setStudentUser(studentData.student.student.user);
        const ToaststudentName = studentData.student.student.name
        const studentUpperCaseName = ToaststudentName.toUpperCase();

        toast.success(`WELCOME ${studentUpperCaseName} !!`, toastConfig);
        console.log(studentData);
        setLoading(false);
      }else if (studentData.status === false){
        toast.error(" Token Expired, Please Login Again",toastConfig);
        setLoading(false)
      } 
      else {
        toast.error(" Token Expired, Please Login Again",toastConfig);
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
          <h1 className="text-bold uppercase text-black"> {studentGender} </h1>
          <h1 className="text-bold uppercase text-black"> {studentEmail} </h1>
          <h1 className="text-bold uppercase text-black"> {studentPhone} </h1>
          <h1 className="text-bold uppercase text-black"> {studentUser} </h1>
        </div>
        <div className="border-4 border-blue-800 w-[15rem] h-[30rem] shadow-2xl bg-white/25 rounded-lg ">
          <div className=""><img src={studentPic} alt="..." className="w-full  h-full pl-5"/></div>
        </div>
      </div>
    )}
  </>
  )
}

export default HomeStudent