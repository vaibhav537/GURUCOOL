import React, { useState } from "react";

const TeacherRegister = () => {
  const [src, setSrc] = useState("/images/Blank.png");
  const [imgClass, setImgClass] = useState("mt-3");

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSrc(URL.createObjectURL(event.target.files[0]));
      setImgClass("w-full h-full");
    }
  };
  return (
    <>
      <div className="flex justify-center items-center transition-all duration-1000">
        <div className="rounded-md p-10  shadow-lg dark:bg-green-900 mt-4 bg-green-100">
          <form method="post" className="flex flex-col">
            <div className="flex">
              <div className="mt-[23px]">
                <div className="relative">
                  <div className="relative mb-6 ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fa-solid fa-user"></i>
                    </div>
                    <input
                      type="text"
                      id="name"
                      className="text-gray-900 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-green-300 bg-green-100 block w-full pl-10 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                      placeholder="Name"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="relative">
                  <div className="relative mb-6 ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <input
                      type="email"
                      id="email"
                      className="text-gray-900 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-green-300 bg-green-100 block w-full pl-10 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                      placeholder="name@example.com"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="relative">

                  <div className="relative mb-6 ">
                    <div className="text-xl absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <input
                      type="number"
                      id="phone"
                      className="text-gray-900 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-green-300 bg-green-100 block w-full pl-10 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                      placeholder="Number"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="relative mt-6 flex flex-col">
                  <label
                    htmlFor="gender"
                    className="text-gray-600 dark:text-green-100"
                  >
                    Your Gender
                  </label>
                  <div className="flex">
                    <div className="flex items-center mr-4 mt-2">
                      <input
                        id="male"
                        type="radio"
                        defaultValue
                        name="gender"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                        required
                      />
                      <label
                        htmlFor="male"
                        className="ml-2 mt-1 text-sm font-medium text-gray-600 select-none  dark:text-green-100"
                      >
                        Male
                      </label>
                    </div>
                    <div className="flex items-center mr-4 mt-2">
                      <input
                        id="female"
                        type="radio"
                        defaultValue
                        name="gender"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                        required
                      />
                      <label
                        htmlFor="female"
                        className="ml-2 mt-1 text-sm font-medium text-gray-600 select-none dark:text-green-100"
                      >
                        Female
                      </label>
                    </div>
                    <div className="flex items-center mr-4 mt-2">
                      <input
                        id="other"
                        type="radio"
                        defaultValue
                        name="gender"
                        className="w-4 h-4 rounded-full text-blue-600 bg-gray-100 border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                        required
                      />
                      <label
                        htmlFor="other"
                        className="ml-2 mt-1 text-sm font-medium text-gray-600 select-none dark:text-green-100"
                      >
                        Other
                      </label>
                    </div>
                  </div>
                </div>
                <div className="relative mt-4">
                  <div className="relative mb-6">
                    <div className="text-xl absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fa-solid fa-lock"></i>
                    </div>
                    <input
                      type="password"
                      id="pass"
                      className="text-gray-900 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-green-300 bg-green-100 block w-full pl-10 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                      placeholder="Password"
                      autoComplete="off"
                    />
                  </div> 
                </div>              
                   <div className="relative mt-6">
                  <input
                    id="teacherCPass"
                    type="password"
                    className="dark:bg-green-900 border-green-300 border-b-2 py-1 focus:outline-none  focus:border-green-300 bg-green-100 focus:border-b-4 peer transition-colors"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor="teacherCPass"
                    className="absolute dark:text-green-100  cursor-text peer-focus:text-xs left-0 top-1 peer-focus:-top-4 transition-all peer-focus:text-green-400 text-gray-600 duration-300"
                  >
                    Confirm Your Password
                  </label>
                </div>
              </div>
              <div className="rounded-2xl flex items-center   justify-center flex-col ml-12 shadow-md bg-white dark:bg-slate-600 p-5 w-[250px]">
                <div className="border-4 overflow-hidden w-[10rem] h-[10rem] rounded-full  shadow-3xl border-green-300">
                  <img src={src} alt="..." className={imgClass} />
                </div>
                <label
                  htmlFor="img"
                  className="mt-5 border-2 cursor-pointer dark:border-white dark:hover:text-black dark:hover:bg-white border-black p-2 hover:bg-black transition-all rounded-lg hover:text-white"
                >
                  SET PROFILE
                </label>
                <input
                  type="file"
                  id="img"
                  onChange={onImageChange}
                  className="hidden"
                />
              </div>
            </div>

            <div className="mt-12 block m-auto">
              <input
                type="submit"
                value="Next"
                className="font-bold font-Garamond text-2xl text-black border-2 border-green-700 uppercase rounded cursor-pointer hover:bg-green-300 hover:text-green-500 transition-all duration-300 dark:text-white bg-transparent p-2 px-5"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TeacherRegister;
