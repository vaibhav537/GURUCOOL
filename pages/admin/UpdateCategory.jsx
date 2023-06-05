import React, { useEffect, useState } from "react";
import Head from "next/head";
import Checkbox from "../components/Checkbox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminNavbar from "../components/AdminNavbar";
import { useRouter } from "next/router";
//UI HAS BEEN MADE BUT FUNCTIONALITY IS NOT DONE YET...

const UpdateCategory = () => {
  const [model1, setModel1] = useState(true);
  const [model2, setModel2] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newLabel, setNewLabel] = useState("");
  const [categoryTitle, setCategoryTitle] = useState(false);
  const [categoryLabel, setCategoryLabel] = useState(false);
  const [categoryDescription, setCategoryDescription] = useState(false);
  const [btn, setBtn] = useState(false);
  const [noSelection, setNoSelection] = useState(false);
  const router = useRouter();

  const toastConfig = {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    progress: undefined,
    theme: "dark",
    bodyClassName: "font-bold select-none font-Nunito",
    closeButton: false,
  };

  useEffect(() => {
    if (!localStorage.getItem("ADMIN_ACCESS")) {
      router.push("/admin");
    }
  }, []);

  const handleGoBack = () => {
    if (model2 === true) {
      setModel1(true);
      setModel2(false);
      setCategoryDescription(false);
      setCategoryLabel(false);
      setCategoryTitle(false);
    } else {
      setModel1(false);
      setModel2(true);
      setCategoryDescription(false);
      setCategoryLabel(false);
      setCategoryTitle(false);
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    if (!currentTitle) {
      toast.error("Please Enter The Current Title Field !!", toastConfig);
      return;
    }
    if (categoryLabel === true) {
      if (!newLabel) {
        toast.error("Please Enter The Respective Fields !!", toastConfig);
        return;
      } else {
      }
    }
    if (categoryTitle === true) {
      if (!newTitle) {
        toast.error("Please Enter The Respective Fields !!", toastConfig);
        return;
      }
    }
    if (categoryDescription === true) {
      if (!newDescription) {
        toast.error("Please Enter The Respective Fields !!", toastConfig);
        return;
      }
    }
    try {
      const result = await fetch("/api/addCategory", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          currentTitle,
          newTitle,
          newLabel,
          newDescription,
        }),
      });

      const response = await result.json();

      if(response.success === true) {
        toast.success("Successfully updated", toastConfig);
      }else{
        toast.error("Error updating", toastConfig);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error Catch updating", toastConfig);
    }
  };

  const handleToggle = () => {
    if (model1 === true) {
      setModel1(false);
      setModel2(true);
    } else {
      setModel1(true);
      setModel2(false);
    }
    if (categoryLabel === true) {
      setBtn(true);
      setNoSelection(false);
    } else if (categoryTitle === true) {
      setBtn(true);
      setNoSelection(false);
    } else if (categoryDescription === true) {
      setBtn(true);
      setNoSelection(false);
    } else {
      setBtn(false);
      setNoSelection(true);
    }
  };
  return (
    <>
      <Head>
        <title>GURUCOOL : Update Category</title>
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
          <div className="pl-[20rem] pt-[6rem]">
            <p
              className=" text-center text-4xl select-none pt-10 font-bold text-white"
              data-aos="zoom-in"
            >
              UPDATE THE CATEGORY
            </p>
            {model1 && (
              <form className="flex flex-col " data-aos="fade-up">
                <div className="mt-20 flex flex-col items-center justify-center">
                  <h1 className="text-xl select-none">
                    Select the fields that you want to be Update :
                  </h1>
                  <div className="mt-10">
                    <input
                      type="checkbox"
                      name="categoryTitle"
                      id="categoryTitle"
                      className="sr-only peer"
                      onChange={() => {
                        setCategoryTitle(true);
                      }}
                    />
                    <label
                      htmlFor="categoryTitle"
                      className="text-xl bg-white text-black p-2 ring-2 dark:bg-slate-500 dark:text-white ring-white rounded-md peer-checked:bg-purple-500 peer-checked:text-white select-none peer-checked:ring-4 peer-checked:ring-purple-700 font-bold  transition-all duration-500"
                    >
                      Category Title
                    </label>
                  </div>
                  <div className="mt-10">
                    <input
                      type="checkbox"
                      name="categoryDescription"
                      id="categoryDescription"
                      className="sr-only peer"
                      onChange={() => {
                        setCategoryDescription(true);
                      }}
                    />
                    <label
                      htmlFor="categoryDescription"
                      className="text-xl bg-white text-black p-2 ring-2 dark:bg-slate-500 dark:text-white  ring-white rounded-md peer-checked:bg-purple-500 peer-checked:text-white select-none peer-checked:ring-4 peer-checked:ring-purple-700 font-bold  transition-all duration-500"
                    >
                      Category Description
                    </label>
                  </div>
                  <div className="mt-10">
                    <input
                      type="checkbox"
                      name="categoryLabel"
                      id="categoryLabel"
                      className="sr-only peer"
                      onChange={() => {
                        setCategoryLabel(true);
                      }}
                    />
                    <label
                      htmlFor="categoryLabel"
                      className="text-xl bg-white text-black p-2 ring-2 dark:bg-slate-500 dark:text-white  ring-white rounded-md peer-checked:bg-purple-500 peer-checked:text-white select-none peer-checked:ring-4 peer-checked:ring-purple-700 font-bold  transition-all duration-500"
                    >
                      Category Label
                    </label>
                  </div>
                </div>
                <div className="pt-20 pl-20">
                  <button
                    className="hover:text-white uppercase ml-10 dark:placeholder:text-teal-300 w-[10rem] text-lg font-bold transition-all duration-300 rounded hover:shadow-3xl p-2 dark:bg-teal-800 bg-teal-300 dark:hover:bg-teal-700 cursor-pointer hover:bg-teal-500"
                    onClick={handleToggle}
                  >
                    Confirm
                  </button>
                </div>
              </form>
            )}
            {model2 && (
              <form data-aos="fade-up">
                {btn && (
                  <div className="flex flex-col pt-20">
                    <label
                      htmlFor="currLabel"
                      className="text-xl select-none text-white"
                    >
                      Enter the Current Label of the Category that you wanted to
                      be change:
                    </label>
                    <input
                      type="text"
                      className="p-2 dark:bg-teal-800 outline-none text-black dark:placeholder:text-teal-300 placeholder:text-teal-900 bg-teal-100 transition-all w-96 duration-500 rounded ring-2 ring-teal-100 focus:ring-4 focus:ring-teal-500 mt-4"
                      onChange={(event) => setCurrentTitle(event.target.value)}
                      value={currentTitle}
                      required
                    />
                  </div>
                )}
                {categoryTitle && (
                  <div className="flex flex-col pt-10">
                    <label
                      htmlFor="title"
                      className="text-xl select-none text-white"
                    >
                      Enter the new Title :
                    </label>
                    <input
                      type="text"
                      className="p-2 dark:bg-teal-800 outline-none text-black dark:placeholder:text-teal-300 placeholder:text-teal-900 bg-teal-100 transition-all w-96 duration-500 rounded ring-2 ring-teal-100 focus:ring-4 focus:ring-teal-500 mt-4"
                      placeholder="ex : Class 9 RBSE"
                      onChange={(event) => setNewTitle(event.target.value)}
                      value={newTitle}
                      required
                    />
                  </div>
                )}
                {categoryDescription && (
                  <div className="flex flex-col pt-10">
                    <label
                      htmlFor="desc"
                      className="text-xl select-none text-white"
                    >
                      Enter the new Description :
                    </label>
                    <input
                      type="text"
                      className="p-2 dark:bg-teal-800 outline-none text-black dark:placeholder:text-teal-300 placeholder:text-teal-900 bg-teal-100 transition-all w-96 duration-500 rounded ring-2 ring-teal-100 focus:ring-4 focus:ring-teal-500 mt-4"
                      placeholder="Descripton of the Category"
                      onChange={(event) =>
                        setNewDescription(event.target.value)
                      }
                      value={newDescription}
                      required
                    />
                  </div>
                )}
                {categoryLabel && (
                  <div className="flex flex-col pt-10">
                    <label
                      htmlFor="label"
                      className="text-xl select-none text-white"
                    >
                      Enter the new Label :
                    </label>
                    <input
                      type="text"
                      className="p-2 dark:bg-teal-800 outline-none text-black dark:placeholder:text-teal-300 placeholder:text-teal-900 bg-teal-100 transition-all w-96 duration-500 rounded ring-2 ring-teal-100 focus:ring-4 focus:ring-teal-500 mt-4"
                      placeholder="ex : class9RBSE"
                      onChange={(event) => setNewLabel(event.target.value)}
                      value={newLabel}
                      required
                    />
                  </div>
                )}
                {btn && (
                  <div>
                    <button
                      className="hover:text-white uppercase ml-10 dark:placeholder:text-teal-300 w-[10rem] text-lg font-bold transition-all duration-300 rounded hover:shadow-3xl p-2 dark:bg-teal-800 mt-10 bg-teal-300 dark:hover:bg-teal-700 cursor-pointer hover:bg-teal-500"
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                    <button
                      className="hover:text-white uppercase ml-10 mt-10 dark:placeholder:text-teal-300 w-[10rem] text-lg font-bold transition-all duration-300 rounded hover:shadow-3xl p-2 dark:bg-teal-800 bg-teal-300 dark:hover:bg-teal-700 cursor-pointer hover:bg-teal-500"
                      onClick={handleGoBack}
                    >
                      Go Back
                    </button>
                  </div>
                )}
                {noSelection && (
                  <div>
                    <p className="mt-20 text-3xl">No Fields Is Selected</p>
                    <button
                      className="hover:text-white uppercase ml-10 mt-10 dark:placeholder:text-teal-300 w-[10rem] text-lg font-bold transition-all duration-300 rounded hover:shadow-3xl p-2 dark:bg-teal-800 bg-teal-300 dark:hover:bg-teal-700 cursor-pointer hover:bg-teal-500"
                      onClick={handleGoBack}
                    >
                      {" "}
                      Go Back
                    </button>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateCategory;
