import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="bg-slate-200">
        <div className="flex justify-between items-center p-1 px-6 lg:px-0 container mx-auto">
          <div className=" flex text-lg font-bold uppercase">
            <img src="/images/logo.png" alt="..." className="w-16 h-16" />
            <p className="pt-4"> MEET-IN</p>
          </div>

          <input
            type="checkbox"
            name="hamburger"
            className="peer hidden"
            id="hamburger"
          />
          <label
            htmlFor="hamburger"
            className="peer-checked:hamburger block relative cursor-pointer lg:hidden border-2 border-gray-300 peer-checked:border-2 peer-checked:border-white p-3 rounded-md transition-all "
          >
            <div className="m-auto w-6 h-0.5 rounded bg-gray-300 transition-all duration-300"></div>
            <div className="m-auto mt-2 w-6 h-0.5 rounded bg-gray-300 transition-all duration-300"></div>
          </label>

          <div className="translate-y-full peer-checked:translate-y-0 lg:translate-y-0 inset-0 fixed lg:static pt-20 lg:pt-0 bg-white lg:bg-transparent -z-10 lg:z-10 lg:h-auto transition-all duration-300 ease-in-out">
            <div className="bg-white shadow-md lg:bg-transparent lg:shadow-none py-10 lg:py-0 flex flex-col lg:items-center lg:flex-row px-6 space-y-4 lg:space-y-0 lg:space-x-12">
              <Link className="text-black lg:text-gray-500 hover:text-gray-300 transition-all focus:text-lg" href={"/"}>Home</Link>
              <Link className="text-black lg:text-gray-500 hover:text-gray-300 transition-all focus:text-lg" href={"/about"}>About</Link>
              <Link className="text-black lg:text-gray-500 hover:text-gray-300 transition-all focus:text-lg" href={"/register"}>Register</Link>
              <Link className="text-black lg:text-gray-500 hover:text-gray-300 transition-all focus:text-lg" href={"/login"}>Login</Link>
              <Link className="text-black lg:text-gray-500 hover:text-gray-300 transition-all focus:text-lg" href={"/contact"}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
