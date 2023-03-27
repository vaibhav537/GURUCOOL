import React, { useState } from "react";
import StudentRegister from "./StudentRegister";
import TeacherRegister from "./TeacherRegister";
const Radio = () => {
  const [isActive, setIsActive] = useState(false);



  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(false);

  const handleChange = (e) =>{
    setVisible2(e.target.checked);
    if (visible2===true) {
      setVisible1(true);
    }else{
      setVisible1(false)
    }

    setIsActive(current => !current)
  }

  return (
    <div className="flex flex-col bg-slate-100 dark:bg-slate-600 h-screen mb-[50px]  transition-all duration-1000">
      <div className="flex mt-20">
        <span className={`transition-all w-[20rem] duration-300 font-bold ml-[155px] mr-[8px] mt-[20px] ${isActive?"text-slate-700 dark:text-slate-300 text-2xl": "text-green-500  text-3xl"}`}>
          Register As Teacher
        </span>
        <label
          htmlFor="check"
          className="bg-slate-300 shadow-inner dark:bg-slate-800 cursor-pointer ml-16 mt-4 w-20 relative h-10 rounded-full"
        >
          <input
            type="checkbox"
            id="check"
            className="sr-only peer"
            checked={visible2}
            onChange={handleChange}
          />
          <span className="flex justify-center items-center w-12 h-12 border-green-300 shadow-3xl  bg-green-300 rounded-full -top-1 peer-checked:left-11 transition-all duration-200 -left-2 peer-checked:bg-blue-300    absolute peer-checked:text-blue-700 text-green-700 peer-checked:rotate-[540deg]"><i className="fa-solid fa-arrow-left text-2xl"></i></span>
        </label>
        <span className={`font-bold  mt-[20px] w-[20rem] ml-[110px]  transition-all duration-300 ${!isActive?'text-slate-700 dark:text-slate-300 text-2xl':'text-blue-500 text-3xl'}`}>
          Register As Student
        </span>
      </div>
      {visible1 && <TeacherRegister />}
      {visible2 && <StudentRegister />}
    </div>
  );
};

export default Radio;
