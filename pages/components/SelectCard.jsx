import React from "react";
import LoaderStudent from "./LoaderStudent";

const SelectCard = () => {
  //These radios are for the category that will be selected and send it to the mongo db ok can be my last modify
  return (
    <>
      <div className="flex justify-center items-center pt-[120px] mx-40">
        <ul
          className="container m-auto grid grid-cols-4  gap-20 "
        >
          <li>
            <input
              type="radio"
              id="class6CBSE"
              name="category"
              value="Class 6 CBSE"
              className="hidden peer"
              required
            />
            <label
              htmlFor="class6CBSE"
              className="inline-flex justify-between items-center transition-all duration-200 p-5 w-full text-gray-500 bg-green-100 peer-checked:shadow-3xl rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="block">
                <div className="w-full text-xl font-semibold text-center">CLASS 6 - CBSE</div>
                <div className="w-full text-center text-sm">This category includes all complusory subjects of the class 6 in the <strong>CBSE</strong>  board</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="class6RBSE"
              name="category"
              value="Class 6 RBSE"
              className="hidden peer"
            />
            <label
              for="class6RBSE"
              className="inline-flex justify-between items-center transition-all duration-200 p-5 w-full text-gray-500 bg-green-100 peer-checked:shadow-3xl rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <div className="w-full text-xl font-semibold text-center">CLASS 6 - RBSE</div>
                <div className="w-full text-center text-sm">This category includes all complusory subjects of the class 6 in the <strong>RBSE</strong>  board</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="class7CBSE"
              name="category"
              value="Class 7 CBSE"
              className="hidden peer"
            />
            <label
              htmlFor="class7CBSE"
              className="inline-flex justify-between items-center p-5 w-full transition-all duration-200  peer-checked:shadow-3xl text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <div className="w-full text-xl font-semibold text-center">CLASS 7 - CBSE</div>
                <div className="w-full text-center text-sm">This category includes all complusory subjects of the class 7 in the CBSE board</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="class7RBSE"
              name="category"
              value="Class 7 RBSE"
              className="hidden peer"
            />
            <label
              htmFor="class7RBSE"
              className="inline-flex justify-between items-center p-5 w-full transition-all duration-200  text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:shadow-3xl peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  "
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">CLASS 7 - RBSE</div>
                <div className="w-full">This category includes all complusory subjects of the class 7 in the RBSE board</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="class8RBSE"
              name="category"
              value="Class 8 RBSE"
              className="hidden peer"
            />
            <label
              htmlFor="class8RBSE"
              className="inline-flex justify-between items-center p-5 w-full transition-all duration-200  text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:shadow-3xl peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  "
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">500-1000 MB</div>
                <div className="w-full">Good for large websites</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="class9CBSE"
              name="category"
              value="clas"
              className="hidden peer"
            />
            <label
              for="hosting-b"
              className="inline-flex justify-between items-center p-5 w-full transition-all duration-200  text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:shadow-3xl peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  "
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">500-1000 MB</div>
                <div className="w-full">Good for large websites</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-c"
              name="hosting"
              value="hosting-c"
              className="hidden peer"
            />
            <label
              for="hosting-c"
              className="inline-flex justify-between items-center p-5 w-full transition-all duration-200  text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:shadow-3xl peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  "
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">500-1000 MB</div>
                <div className="w-full">Good for large websites</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-d"
              name="hosting"
              value="hosting-d"
              className="hidden peer"
            />
            <label
              for="hosting-d"
              className="inline-flex justify-between items-center p-5 w-full transition-all duration-200  text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:shadow-3xl peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  "
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">500-1000 MB</div>
                <div className="w-full">Good for large websites</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-e"
              name="hosting"
              value="hosting-e"
              className="hidden peer"
            />
            <label
              for="hosting-e"
              className="inline-flex justify-between items-center p-5 w-full transition-all duration-200  text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:shadow-3xl peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  "
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">500-1000 MB</div>
                <div className="w-full">Good for large websites</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-f"
              name="hosting"
              value="hosting-f"
              className="hidden peer"
            />
            <label
              for="hosting-f"
              className="inline-flex justify-between items-center p-5 w-full transition-all duration-200  text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:shadow-3xl peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  "
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">500-1000 MB</div>
                <div className="w-full">Good for large websites</div>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SelectCard;
