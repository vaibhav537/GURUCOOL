import React, { useEffect, useState } from "react";
import LoaderStudent from "./LoaderStudent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const SelectCard = () => {
  //These radios are for the category that will be selected and send it to the mongo db ok can be my last modify
  const [category, setCategory] = useState("");
  const [button, setButton] = useState(false);
  const [fetchedCategory, setFetchedCategory] = useState([]);

  const getData = async () => {
    const response = await fetch("/api/fetchCategory");
    setFetchedCategory(await response.json());
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (event) => {
    setCategory(event.target.value);
    if (category === "") {
      setButton(false);
      return button;
    } else {
      setButton(true);
      return button;
    }
  };

  const postCategory = () => {
    alert(category);
  };
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
      /> 
      
      <div className="flex justify-center items-center pt-[120px] mx-40">
        <ul className="container m-auto grid grid-cols-4  gap-20 ">
          {fetchedCategory.map((currElem, index) => {
            return (
              <li key={index}>
                <input
                  type="radio"
                  id={currElem.categoryLabel}
                  name="category"
                  value={currElem.categoryTitle}
                  className="hidden peer"
                  onChange={handleChange}
                  key={"header" + currElem.categoryDescription}
                  required
                />
                <label
                  htmlFor={currElem.categoryLabel}
                  key={currElem._id}
                  className="inline-flex justify-between items-center transition-all duration-200 p-5 w-full select-none text-gray-500 bg-green-100 peer-checked:shadow-3xl rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full select-none text-xl font-semibold text-center">
                      {currElem.categoryTitle}
                    </div>
                    <div className="w-full select-none text-center text-sm">
                      {currElem.categoryDescription}
                    </div>
                  </div>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      {button && (
        <button
          type="submit"
          className="block m-auto border-4 border-green-600 hover:rounded-xl cursor-pointer p-4 transition-all rounded fixed bottom-0  right-[39rem] duration-300 bg-green-300 hover:text-white hover:bg-green-500"
          onClick={postCategory}
        >
          SUBMIT
        </button>
      )}        
      {/* <NoCategory/> */}

    </>
  );
};

export default SelectCard;
