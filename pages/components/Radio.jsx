import React, { useState } from "react";
import StudentRegister from "./StudentRegister";
import TeacherRegister from "./TeacherRegister";
const Radio = () => {
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(false);

  const handleChange = (e) =>{
    setVisible2(e.target.checked);
    if (visible2===true) {
      setVisible1(true);
    }else{
      setVisible1(false)
    }
  }

  return (
    <div className="flex flex-col bg-slate-100 h-screen">
      <div className="flex mt-20">
        <span className="text-2xl font-bold ml-[350px] mt-[20px] text-gray-700">
          Register As Teacher
        </span>
        <label
          htmlFor="check"
          className="bg-slate-300 shadow-inner cursor-pointer ml-16 mt-4 w-20 relative h-10 rounded-full"
        >
          <input
            type="checkbox"
            id="check"
            className="sr-only peer"
            checked={visible2}
            onChange={handleChange}
          />
          <span className="w-12 h-12 border-green-300  bg-green-300 rounded-full -top-1 peer-checked:left-11 transition-all duration-200 -left-2 peer-checked:bg-blue-300    absolute"></span>
        </label>
        <span className="text-2xl font-bold  mt-[20px] ml-20 text-gray-700">
          Register As Student
        </span>
      </div>

      {visible1 && <TeacherRegister />}
      {visible2 && <StudentRegister />}
    </div>
  );
};

export default Radio;
