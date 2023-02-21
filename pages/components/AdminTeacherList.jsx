import React from "react";

const AdminTeacherList = () => {
  return (
    <>
      <div className="mt-[4rem] ml-40 w-[60vw] shadow-5xl shadow-inset p-10  rounded dark:border-red-200 transition-all duration-1000">
        <h4 className="text-3xl uppercase font-semibold text-center font-Garamond">
          Teachers in MEET IN
        </h4>
        <table className="ml-[50px] mt-[25px]">
          <tbody>
          <tr className="border-y-2  border-slate-500 font-Garamond text-lg">
            <td className="p-3 w-[10rem] text-center">Sr No.</td>
            <td className="p-3 w-[10rem] text-center">Name</td>
            <td className="p-3 w-[10rem] text-center">Email</td>
            <td className="p-3 w-[10rem] text-center">Category</td>
            <td className="p-3 w-[10rem] text-center">Delete</td>
          </tr>
          <tr className="h-[54px]">
            <td className="p-3 w-[10rem] text-center">1.</td>
            <td className="p-3 w-[10rem] text-center">Vaibhav</td>
            <td className="p-3 w-[10rem] text-center">Vaibhavmali537@gmail.com</td>
            <td className="p-3 w-[10rem] text-center">Class 6</td>
            <td className="p-3 w-[10rem] text-center     hover:text-red-500 transition-all duration-300 hover:text-xl"><i className="fa-solid fa-trash"></i></td>
          </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminTeacherList;
