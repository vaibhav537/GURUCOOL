import React, { useEffect, useState } from "react";
import Head from "next/head";
import Checkbox from "../components/Checkbox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminNavbar from "../components/AdminNavbar";
import { useRouter } from "next/router";

const Addcategory = () => {
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [categoryLabel, setCategoryLabel] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("ADMIN_ACCESS")) {
      router.push('/admin')
    }
  }, []);

  const postAddCategory = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/addcategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          categoryTitle,
          categoryDescription,
          categoryLabel,
        }),
      });
      toast.success("Successfully Added", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      toast.error("Not Added, Try Again some later", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <>
      <Head>
        <title>GURUCOOL : Add Category</title>
        <meta
          name="description"
          content="Generated by developer for the who needs to be thier doubts and want to learn from the expert"
        />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
      />

      <div className="bg-purple-300 dark:bg-slate-600 w-[100vw] h-[100vh] transition-all duration-1000">
        <div className="fixed right-10 bottom-10">
          <Checkbox />
        </div>
        <div className="flex">
          <div className="bg-teal-300 transition-all duration-1000 h-[100vh] shadow-2xl p-10 dark:shadow-4xl dark:bg-slate-800">
            <AdminNavbar />
          </div>
          <div className="pl-[20rem] pt-[10rem]">
            <p className="text-center text-white select-none text-4xl pt-10 font-bold" data-aos="zoom-in">
              ADD THE CATEGORY
            </p>
            <form className="flex flex-col" data-aos="fade-up">
              <div className="flex flex-col pt-20">
                <label htmlFor="title" className="text-xl select-none text-white">
                  Enter the title of the Category
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="ex: Class 9 RBSE"
                  className="p-2 dark:bg-teal-800 text-black outline-none dark:placeholder:text-teal-300 placeholder:text-teal-900 bg-teal-100 transition-all w-96 duration-500 rounded ring-2 ring-teal-100 focus:ring-4 focus:ring-teal-500 mt-4"
                  onChange={(e) => {
                    setCategoryTitle(e.target.value);
                  }}
                  name="categoryTitle"
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col pt-10">
                <label htmlFor="title" className="text-xl select-none text-white">
                  Enter some Description of the Category
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Description of the Category"
                  className="p-2 dark:bg-teal-800 text-black outline-none dark:placeholder:text-teal-300 placeholder:text-teal-900 bg-teal-100 transition-all w-96 duration-500 rounded ring-2 ring-teal-100 focus:ring-4 focus:ring-teal-500 mt-4"
                  onChange={(e) => {
                    setCategoryDescription(e.target.value);
                  }}
                  name="categoryDescription"
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col pt-10">
                <label htmlFor="title" className="text-xl select-none text-white">
                  Enter the Label of the Category
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="example: class9CBSE"
                  className="p-2 dark:bg-teal-800 text-black outline-none dark:placeholder:text-teal-300 placeholder:text-teal-900 bg-teal-100 transition-all w-96 duration-500 rounded ring-2 ring-teal-100 focus:ring-4 focus:ring-teal-500 mt-4"
                  onChange={(e) => {
                    setCategoryLabel(e.target.value);
                  }}
                  name="categoryLabel"
                  autoComplete="off"
                />
              </div>
              <div className="pt-20">
                <input
                  type="submit"
                  value="ADD"
                  onClick={postAddCategory}
                  className="hover:text-white select-none ml-10 dark:placeholder:text-teal-300 w-[10rem] text-lg font-bold transition-all duration-300 rounded hover:shadow-3xl p-2 dark:bg-teal-800 bg-teal-300 dark:hover:bg-teal-700 cursor-pointer hover:bg-teal-500"
                /> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addcategory;
