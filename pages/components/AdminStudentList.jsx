import React from 'react'

const AdminStudentList = () => {
  return (
    <>
      <div className="w-[60vw]  shadow-5xl shadow-inset p-10 dark:bg-slate-800 bg-pink-100  rounded dark:border-red-200 transition-all duration-1000">
        <h4 className="text-3xl select-none uppercase font-semibold text-center font-Garamond">
          Students in MEET IN
        </h4>
        <table className="ml-[50px] mt-[25px]">
          <tbody>
          <tr className="border-y-2  border-slate-500 font-Garamond text-lg">
            <td className="p-3 w-[10rem] text-center select-none ">Sr No.</td>
            <td className="p-3 w-[10rem] text-center select-none ">Name</td>
            <td className="p-3 w-[10rem] text-center select-none ">Email</td>
            <td className="p-3 w-[10rem] text-center select-none ">Category</td>
            <td className="p-3 w-[10rem] text-center select-none ">Delete</td>
          </tr>
          <tr className="h-[54px]">
            <td className="p-3 w-[10rem] text-center select-none ">1.</td>
            <td className="p-3 w-[10rem] text-center select-none ">Vaibhav</td>
            <td className="p-3 w-[10rem] text-center select-none ">Vaibhavmali537@gmail.com</td>
            <td className="p-3 w-[10rem] text-center select-none ">Class 6</td>
            <td className="p-3 w-[10rem] text-center     hover:text-red-500 transition-all duration-300 hover:text-xl"><i className="fa-solid fa-trash"></i></td>
          </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminStudentList