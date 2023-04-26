import React, { useEffect, useState } from "react";

const TeacherRoomList = () => {
  const [listLoader, setListLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setListLoader(false);
      }, 2000);
  }, [])

  return (
    <>
        <div
          className="p-2 border-2 border-white/40 w-[65rem] left-[11rem] top-[3rem] flex items-center justify-center select-none  h-[37.5rem] my-20 shadow-2xl dark:bg-blue-800  bg-blue-100 overflow-hidden  rounded-lg absolute"
          data-aos="fade-up"
        >
          <span className="absolute bg-blue-800 dark:bg-blue-300 transition-all duration-500 h-40 -z-10 rounded-full -bottom-11 w-40 -left-5"></span>
          <span className="absolute bg-blue-800 dark:bg-blue-300 transition-all duration-500 h-40 -z-10 rounded-full -top-11 w-40 -right-5"></span>
          { listLoader ? <img src="/student.gif" alt="..." className="w-20 h-20"/> :
          "Hello"}
        </div>
    </>
  );
};

export default TeacherRoomList;
