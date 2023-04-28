import React, { useEffect, useState } from "react";

const TeacherRoomList = () => {
  const [listLoader, setListLoader] = useState(true);
  const [TeacherRoomList, setTeacherRoomList] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  const getTeacher = async () => {
    const response = await fetch("/api/fetchAdminTeachers");
    const jsonData = await response.json();

    setTeacherRoomList(jsonData);
    setIsEmpty(jsonData.length === 0);

    setListLoader(false);
  };

  useEffect(() => {
    getTeacher();
  }, []);

  return (
    <>
      <div
        className="p-2 border-2 border-white/40 w-[65rem] left-[11rem] top-[3rem]  select-none  h-[37.5rem] my-20 shadow-2xl dark:bg-blue-800  bg-blue-100 overflow-hidden  rounded-lg absolute"
        data-aos="fade-up"
      >
        <span className="absolute bg-blue-800 dark:bg-blue-300 transition-all duration-500 h-40 -z-10 rounded-full -bottom-11 w-40 -left-5"></span>
        <span className="absolute bg-blue-800 dark:bg-blue-300 transition-all duration-500 h-40 -z-10 rounded-full -top-11 w-40 -right-5"></span>
        {listLoader ? (
          <img
            src="/student.gif"
            alt="..."
            className="w-20 h-20 ml-[30rem] mt-[15rem]"
          />
        ) : (
          <>
            {isEmpty && (
              <p className="text-black dark:text-white ml-[10rem] w-[56rem] mt-[15rem] uppercase text-6xl">
                There is No Teacher
              </p>
            )}
            {!isEmpty && (
              <table className="ml-[12rem]  mt-[25px] text-black dark:text-white">
                <tbody>
                  <tr className="border-y-2  border-slate-500 font-Garamond text-lg ">
                    <td className="p-3 w-[10rem] text-center select-none ">
                      Sr No.
                    </td>
                    <td className="p-3 w-[10rem] text-center select-none ">
                      Email
                    </td>
                    <td className="p-3 w-[10rem] text-center select-none ">
                      Category
                    </td>
                    <td className="p-3 w-[10rem] text-center select-none ">
                      Room
                    </td>
                  </tr>
                  {TeacherRoomList.map((val, index) => {
                    return (
                      <tr className="h-[54px]">
                        <td className="p-3 w-[10rem] text-center select-none ">
                          {index + 1}.
                        </td>
                        <td className="p-3 w-[10rem] text-center select-none ">
                          {val.email}
                        </td>
                        <td className="p-3 w-[10rem] text-center select-none ">
                          {val.category}
                        </td>
                        <td className="p-3 w-[10rem] text-center select-none ">
                          {val.room}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default TeacherRoomList;
