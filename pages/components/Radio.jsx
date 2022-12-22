import React from "react";
const Radio = () => {
  return (
    <div className="flex flex-col bg-slate-100 w-screen h-screen">
      <div className="flex ml-1 mt-3 w-full md:w-6/12 md:ml-60 md:mt-7 lg:mt-12 lg:ml-[30rem] lg:w-5/12 space-x-2">
        <div className="relative">
          <input
            type="radio"
            name="user"
            id="user1"
            className="hidden peer"
            checked
          />
          <label
            htmlFor="user1"
            className="flex gap-4 p-4 rounded-xl text-base peer-checked:text-xl bg-white bg-opacity-90 backdrop-blur-2xl shadow-xl hover:bg-opacity-75 peer-checked:bg-green-300 peer-checked:text-white cursor-pointer peer-checked:p-6  transition-all duration-100 ease-linear"
          >
            <h6 className="uppercase select-none">Register as Teacher</h6>
          </label>
        </div>
        <div className="relative">
          <input type="radio" name="user" id="user2" className="hidden peer" />
          <label
            htmlFor="user2"
            className="flex gap-4 p-4 rounded-xl text-base peer-checked:text-xl bg-white bg-opacity-90 backdrop-blur-2xl shadow-xl hover:bg-opacity-75 peer-checked:bg-blue-300 peer-checked:text-white cursor-pointer peer-checked:p-6 transition-all duration-100 ease-linear"
          >
            <h6 className="uppercase select-none">Register as Student</h6>
          </label>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="rounded-md p-10  shadow-lg mt-4">
          <form method="post" className="flex">
            <div className="">
              <div className="flex space-y-2">
                <label htmlFor="">Name:</label>
                <input type="text" className="" />
              </div>
              <div className="flex space-y-2">
                <label htmlFor="">Name:</label>
                <input type="text" className="" />
              </div>
              <div className="flex space-y-2">
                <label htmlFor="">Name:</label>
                <input type="text" className="" />
              </div>
            </div>

            <div className=""></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Radio;
