import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import Checkbox from "../components/Checkbox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactInfo = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [accordionState, setAccordionState] = useState({});
  const [ExcessText, setExcessText] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [deleteModel, setDeleteModel] = useState(false);
  const [deleteModelLoader, setDeleteModelLoader] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("ADMIN_ACCESS")) {
      router.push("/admin");
    }

    getInfo();
  }, []);

  const toastConfig = {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    progress: undefined,
    theme: "dark",
    bodyClassName: "font-bold select-none",
    closeButton: false,
  };

  const getInfo = async () => {
    const Info = await fetch("/api/fetchContact");
    setData(await Info.json());
  };

  const handleClose = (e) => {
    if (e.target.id === "Button") {
      setDeleteModel(false);
    }
  };

  const handleDeleteSubmit = async (id) => {
    setDeleteModelLoader(true);

    // Make a DELETE request to the backend API with the document ID to delete
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success === true) {
        toast.success("Concern Deleted", toastConfig);
        setTimeout(() => {
          setDeleteModel(false); 
        }, 500);
        setDeleteModelLoader(false);
        getInfo();
      }
    } catch (error) {
      setDeleteModel(false);
      setDeleteModelLoader(false);
      toast.success("Concern Not Deleted", toastConfig);
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>GURUCOOL : Contact Info.</title>
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
          <div className="pl-[20rem] pt-[3rem]">
            <p className=" text-center text-4xl font-bold select-none text-gray-200" data-aos="zoom-in">
              CONTACT INFORMATION OF THE
              <span className="text-white ml-3 text-5xl">GURUCOOL</span>
            </p>
            <div className="relative shadow-md sm:rounded-lg mt-12 overflow-hidden max-h-[42rem]" data-aos="fade-up">
              <table className="w-full text-sm text-left text-gray-500 select-none bg-white  dark:text-gray-400 " >
                <thead className="text-base text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className=" px-6 py-5 ">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone
                    </th>
                    <th scope="col" className="py-3">
                      Email
                    </th>
                    <th scope="col" className=" px-6 py-3">
                      Concern
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((val, index) => {
                    const toggleAccordion = (index) => {
                      setAccordionState((prevState) => ({
                        ...prevState,
                        [index]: !prevState[index],
                      }));
                    };
                    if (val.length > 10) {
                      setExcessText(true);
                    }
                    return (
                      <React.Fragment key={index}>
                        <tr
                          className="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 h-[3.8rem] "
                          onClick={() => toggleAccordion(index)}
                        >
                          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                            {val.name}
                          </td>
                          <td className="px-6 py-4">{val.phone}</td>
                          <td className="px-6 py-4">{val.email}</td>
                          <td className="px-6 py-4 max-w-[7rem] text-ellipsis whitespace-nowrap overflow-hidden">
                            {val.desc}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div
                              className="font-medium text-slate-600 hover:text-lg dark:text-slate-200 dark:hover:text-red-500 hover:underline transition-all duration-500 hover:text-red-500"
                              onClick={(e) => {
                                setDeleteId(val._id);
                                setDeleteModel(true);
                              }}
                            >
                              <i className="fa-solid fa-trash"></i>
                            </div>
                          </td>
                        </tr>
                        {accordionState[index] && (
                          <tr className="">
                            <td colSpan="5">
                              <div
                                className="accordion-body w-[57.1rem]  bg-gray-100 dark:bg-slate-600 p-4 rounded-lg "
                                style={{
                                  maxHeight: "0",
                                  overflow: "hidden",
                                  transition: "max-height 0.3s ease-in-out",
                                }}
                                onAnimationEnd={() =>
                                  setAccordionState((prevState) => ({
                                    ...prevState,
                                    [index]: false,
                                  }))
                                }
                                ref={(el) => {
                                  if (el) {
                                    el.style.maxHeight = `${el.scrollHeight}px`;
                                  }
                                }}
                              >
                                {val.desc}
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <span className="fixed top-[55rem] right-[47rem] select-none text-xl">
              Maximum 10 Data Can be Shown here
            </span>
          </div>
        </div>
      </div>
      {deleteModel && (
        <div
          id="Container"
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        >
          <div className="from-teal-200 to-purple-200 bg-gradient-to-bl p-5 rounded flex flex-col items-center justify-center text-black dark:text-white ">
            <h1 className="text-3xl text-slate-900 font-Crimson uppercase select-none">
              Are You Sure to Delete this Concern ?
            </h1>
            <div className="gap-20 flex ml-10 mt-6">
              <button
                className="flex items-center justify-center bg-red-400 text-lg text-white hover:bg-red-300 hover:shadow-3xl rounded-lg transition-all duration-500 w-20 p-2"
                onClick={() => {
                  handleDeleteSubmit(deleteId);
                }}
              >
                {deleteModelLoader ? (
                  <img src="/AdminDeleteLoader.gif" className="w-7" />
                ) : (
                  "Delete"
                )}
              </button>
              <button
                className="bg-green-400 text-lg text-white hover:bg-green-300 hover:shadow-3xl rounded-lg transition-all duration-500 w-20 p-2"
                id="Button"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactInfo;
