import React, { useEffect, useState } from "react";

const AdminTeacherList = () => {
  const [teacher, setTeacher] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTeacher = async () => {
    const response = await fetch("/api/fetchAdminTeachers");
    setTeacher(await response.json());
    setIsLoading(false);
  };

  useEffect(() => {
    getTeacher();
  }, []);
  return (
    <>
      <div className="w-[60vw] shadow-5xl shadow-inset dark:bg-slate-800 p-10 bg-pink-100  rounded dark:border-red-200 transition-all duration-1000">
        <h4 className="select-none text-3xl uppercase font-semibold text-center font-Garamond">
          Teachers in MEET IN
        </h4>
        {isLoading ? (
          <div className="flex justify-center items-center mt-[7rem]">
            <img src="/admin.gif" className="h-20 w-20" alt="loader" />
          </div>
        ) : (
          <table className="ml-[50px] mt-[25px]">
            <tbody>
              <tr className="border-y-2  border-slate-500 font-Garamond text-lg">
                <td className="p-3 w-[10rem] text-center select-none ">
                  Sr No.
                </td>
                <td className="p-3 w-[10rem] text-center select-none ">Name</td>
                <td className="p-3 w-[10rem] text-center select-none ">
                  Email
                </td>
                <td className="p-3 w-[10rem] text-center select-none ">
                  Category
                </td>
                <td className="p-3 w-[10rem] text-center select-none ">
                  Delete
                </td>
              </tr>
              {teacher.map((val, index) => {
                return (
                  <tr className="h-[54px]" key={index}>
                    <td
                      className="p-3 w-[10rem] text-center select-none "
                      key={val._id}
                    >
                      {index + 1}.
                    </td>
                    <td
                      className="p-3 w-[10rem] text-center select-none "
                      key={val.email}
                    >
                      {val.name}
                    </td>
                    <td
                      className="p-3 w-[10rem] text-center select-none "
                      key={val.password}
                    >
                      {val.email}
                    </td>
                    <td
                      className="p-3 w-[10rem] text-center select-none "
                      key={val.createdAt}
                    >
                      {val.category}
                    </td>
                    <td
                      className="p-3 w-[10rem] text-center cursor-pointer hover:text-red-500 transition-all duration-300 hover:text-xl"
                      key={val.updatedAt}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default AdminTeacherList;
