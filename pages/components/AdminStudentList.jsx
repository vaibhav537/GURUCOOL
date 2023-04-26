import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminStudentList = () => {
  const [student, setStudent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteId, setDeleteId] = useState("");
  const [deleteModel, setDeleteModel] = useState(false);
  const [deleteModelLoader, setDeleteModelLoader] = useState(false);
  const [deleteDialogDisable, setDeleteDialogDisable] = useState(false);

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

  // hiding the modal
  const handleClose = (e) => {
    if (e.target.id === "Button") {
      setDeleteModel(false);
    }
  };

  const getStudent = async () => {
    const response = await fetch("/api/fetchAdminStudents");
    setStudent(await response.json());
    setIsLoading(false);
  };

  useEffect(() => {
    getStudent();
  }, []);

  const handleDeleteSubmit = async (id) => {
    setDeleteModelLoader(true);

    // Make a DELETE request to the backend API with the document ID to delete
    try {
      const response = await fetch(`/api/studentDelete/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success === true) {
        toast.success("Student Delete", toastConfig);
        setTimeout(() => {
          setDeleteModel(false);
        }, 500);
        setDeleteModelLoader(false);
        getStudent();
      }
    } catch (error) {
      setDeleteModel(false);
      setDeleteModelLoader(false);
      toast.success("Student Not Deleted", toastConfig);
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="dark"
      />
      <div className="w-[60vw] shadow-5xl shadow-inset p-10 bg-teal-200 overflow-y-auto max-h-[39rem] dark:bg-slate-800 rounded dark:border-red-200 transition-all duration-1000">
        <h4 className="text-3xl select-none uppercase font-semibold text-center dark:text-white text-black/75">
          Students in MEET IN
        </h4>
        {isLoading ? (
          <div className="flex justify-center items-center mt-[7rem]">
            <img src="/admin.gif" className="h-20 w-20" alt="loader" />
          </div>
        ) : (
          <table className="ml-[50px] mt-[25px] dark:text-white text-black ">
            <tbody>
              <tr className="border-y-2  border-slate-500 font-Garamond text-lg ">
                <td className="p-3 w-[10rem] text-center select-none ">
                  Sr No.
                </td>
                <td className="p-3 w-[10rem] text-center select-none ">Name</td>
                <td className="p-3 w-[10rem] text-center select-none ">
                  Email
                </td>
                <td className="p-3 w-[10rem] text-center select-none ">
                  Phone
                </td>
                <td className="p-3 w-[10rem] text-center select-none ">
                  Register Date
                </td>
                <td className="p-3 w-[10rem] text-center select-none ">
                  Delete
                </td>
              </tr>
              {student.map((val, index) => {
                const formattedDate = new Date(
                  val.createdAt
                ).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });
                return (
                  <tr className="h-[54px]" key={index}>
                    <td
                      className="p-3 w-[10rem] text-center select-none "
                      key={val._id}
                    >
                      {index + 1}.
                    </td>
                    <td
                      className="p-3 w-[10rem] text-center select-none "
                      key={val.email}
                    >
                      {val.name}
                    </td>
                    <td
                      className="p-3 w-[10rem] text-center select-none "
                      key={val.password}
                    >
                      {val.email}
                    </td>
                    <td
                      className="p-3 w-[10rem] text-center select-none "
                      key={val.phone}
                    >
                      {val.phone}
                    </td>
                    <td
                      className="p-3 w-[10rem] text-center select-none "
                      key={val.phone}
                    >
                      {formattedDate}
                    </td>
                    <td
                      className="p-3 w-[10rem] text-center cursor-pointer hover:text-red-500 transition-all duration-300 hover:text-xl"
                      onClick={(e) => {
                        setDeleteId(val._id);
                        setDeleteModel(true);
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      {deleteModel && (
        <div
          id="Container"
          data-aos="zoom-in"
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        >
          <div className="bg-green-100 p-5 rounded flex flex-col items-center justify-center text-black dark:text-white ">
            <h1 className="text-3xl text-slate-900 uppercase select-none">
              Are You Sure to Delete this student ?
            </h1>
            <div className="gap-20 flex ml-10 mt-6">
              <button
                className="flex items-center justify-center bg-red-400 text-lg text-white hover:bg-red-300 hover:shadow-3xl rounded-lg transition-all duration-500 w-20 p-2"
                disabled={deleteDialogDisable}
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

export default AdminStudentList;
