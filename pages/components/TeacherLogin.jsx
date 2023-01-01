import React, { useState } from "react";

const TeacherLogin = () => {
  const [show, setShow] = useState('password') 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShow = (e) => {
    e.preventDefault();
    if(show === 'password'){
      setShow("text");
    }
    else{
      setShow("password");
    }
  }

  return (
    <div className="flex justify-center items-center transition-all duration-1000 ">
      <div className="rounded-md p-10  shadow-lg dark:bg-green-900 mt-4 bg-green-100">
        <form
          method="post"
          className="flex flex-col"
          encType="multipart/form-data"
        >
          <div className="flex">
            <div className="mt-[23px]">
              <div className="relative">
                <div className="relative mb-6 ">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fa-solid fa-envelope  text-green-400"></i>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="text-green-800 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-green-300 bg-green-100 block w-full pl-10 p-2.5  dark:placeholder:text-green-300 dark:bg-green-900 dark:text-green-200 outline-none"
                    placeholder="Your Email"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="relative mt-4">
                <div className="relative mb-6">
                  <div className="text-xl absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fa-solid fa-lock text-green-400"></i>
                  </div>
                  <input
                    type={show}
                    id="password"
                    name="password"
                    className="text-green-800 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-green-300 bg-green-100 block w-full pl-10 p-2.5  dark:placeholder:text-green-300 dark:bg-green-900 dark:text-green-200 outline-none"
                    placeholder="Your Password"
                    autoComplete="off"
                  />
                  <div className="text-base absolute cursor-pointer inset-y-0 right-0 flex items-center pl-3" onClick={handleShow}>
                  <i className={`text-green-400 transition-all duration-300 ${show==='password' ? 'fa-solid fa-eye':'fa-solid fa-eye-slash'} `}></i>
                  </div>
                </div>
              </div>
              <span className="text-xs ml-[120px] text-green-500 transition-all duration-300 cursor-pointer hover:text-green-700">
                Forgot password ?
              </span>
            </div>
          </div>
          <div className="mt-12 flex justify-evenly items-center">
            <button
              type="submit"
              className="font-bold font-Garamond text-lg text-black border-2 border-green-700 uppercase rounded cursor-pointer hover:bg-green-300 hover:text-green-500 transition-all duration-300 dark:text-white bg-transparent p-2 px-5"
            >
              login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherLogin;
