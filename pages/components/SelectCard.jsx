import React, { useState } from "react";
import LoaderStudent from "./LoaderStudent";


const SelectCard = () => {
  //These radios are for the category that will be selected and send it to the mongo db ok can be my last modify
  const [category, setCategory] = useState("")
  const handleChange = (event) => {
    setCategory(event.target.value)
  }
  return (
    <>
      <div className="flex justify-center items-center pt-[120px] mx-40">
        <ul className="container m-auto grid grid-cols-4  gap-20 ">
          <li>
            <input
              type="radio"
              id="class6CBSE"
              name="category"
              value="Class 6 CBSE"
              className="hidden peer"
              onChange= {handleChange}
              required
            />
            <label
              htmlFor="class6CBSE"
              className="inline-flex justify-between items-center transition-all duration-200 p-5 w-full select-none text-gray-500 bg-green-100 peer-checked:shadow-3xl rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <div className="w-full select-none text-xl font-semibold text-center">
                  CLASS 6 - CBSE
                </div>
                <div className="w-full select-none text-center text-sm">
                  This category includes all complusory subjects of the class 6
                  in the <strong>CBSE</strong> board
                </div>
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
              onChange= {handleChange}
              required
            />
            <label
              for="class6RBSE"
              className="inline-flex justify-between items-center transition-all duration-200 p-5 w-full select-none text-gray-500 bg-green-100 peer-checked:shadow-3xl rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <div className="w-full select-none text-xl font-semibold text-center">
                  CLASS 6 - RBSE
                </div>
                <div className="w-full select-none text-center text-sm">
                  This category includes all complusory subjects of the class 6
                  in the <strong>RBSE</strong> board
                </div>
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
              onChange= {handleChange}
              required
            />
            <label
              htmlFor="class7CBSE"
              className="inline-flex justify-between items-center p-5 w-full select-none transition-all duration-200  peer-checked:shadow-3xl text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <div className="w-full select-none text-xl font-semibold text-center">
                  CLASS 7 - CBSE
                </div>
                <div className="w-full select-none text-center text-sm">
                  This category includes all complusory subjects of the class 7
                  in the CBSE board
                </div>
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
              onChange= {handleChange}
              required
            />
            <label
              htmlFor="class7RBSE"
              className="inline-flex justify-between items-center p-5 w-full select-none transition-all duration-200  peer-checked:shadow-3xl text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <div className="w-full select-none text-xl font-semibold text-center">
                  CLASS 7 - RBSE
                </div>
                <div className="w-full select-none text-center text-sm">
                  This category includes all complusory subjects of the class 7
                  in the RBSE board
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="class8CBSE"
              name="category"
              value="Class 8 CBSE"
              className="hidden peer"
              onChange= {handleChange}
              required
            />
            <label
              htmlFor="class8CBSE"
              className="inline-flex justify-between items-center p-5 w-full select-none transition-all duration-200  text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:shadow-3xl peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  "
            >
              <div className="block">
                <div className="w-full select-none text-xl font-semibold text-center">
                  Class 8 - CBSE
                </div>
                <div className="w-full select-none text-center text-sm">
                  This category includes all complusory subjects of the class 8
                  in the CBSE board
                </div>
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
              onChange= {handleChange}
              required
            />
            <label
              htmlFor="class8RBSE"
              className="inline-flex justify-between items-center p-5 w-full select-none transition-all duration-200  text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:shadow-3xl peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  "
            >
              <div className="block">
                <div className="w-full select-none text-xl font-semibold text-center">
                  Class 8 - RBSE
                </div>
                <div className="w-full select-none text-center text-sm">
                  This category includes all complusory subjects of the class 8
                  in the RBSE board
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="class9CBSE"
              name="category"
              value="Class 9 CBSE"
              className="hidden peer"
              onChange= {handleChange}
              required
            />
            <label
              htmlFor="class9CBSE"
              className="inline-flex justify-between items-center p-5 w-full select-none transition-all duration-200  text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:shadow-3xl peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  "
            >
              <div className="block">
                <div className="w-full select-none text-xl font-semibold text-center">
                  Class 9 - CBSE
                </div>
                <div className="w-full select-none text-center text-sm">
                  This category includes all complusory subjects of the class 9
                  in the CBSE board
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="class9RBSE"
              name="category"
              value="Class 9 RBSE"
              className="hidden peer"
              onChange= {handleChange}
              required
            />
            <label
              htmlFor="class9RBSE"
              className="inline-flex justify-between items-center p-5 w-full select-none transition-all duration-200  text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:shadow-3xl peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  "
            >
              <div className="block">
                <div className="w-full select-none text-xl font-semibold text-center">
                  Class 9 - RBSE
                </div>
                <div className="w-full select-none text-center text-sm">
                  This category includes all complusory subjects of the class 9
                  in the RBSE board
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="class10RBSE"
              name="category"
              value="Class 10 RBSE"
              className="hidden peer"
              onChange= {handleChange}
              required
            />
            <label
              htmlFor="class10RBSE"
              className="inline-flex justify-between items-center p-5 w-full select-none transition-all duration-200  text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:shadow-3xl peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  "
            >
              <div className="block">
                <div className="w-full select-none text-xl font-semibold text-center">
                  Class 10 - RBSE
                </div>
                <div className="w-full select-none text-center text-sm">
                  This category includes all complusory subjects of the class 10
                  in the RBSE board
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="class10CBSE"
              name="category"
              value="Class 10 CBSE"
              className="hidden peer"
              onChange= {handleChange}
              required
            />
            <label
              htmlFor="class10CBSE"
              className="inline-flex justify-between items-center p-5 w-full select-none transition-all duration-200  text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:shadow-3xl peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  "
            >
              <div className="block">
                <div className="w-full select-none text-xl font-semibold text-center">
                  Class 10 - CBSE
                </div>
                <div className="w-full select-none text-center text-sm">
                  This category includes all complusory subjects of the class 10
                  in the CBSE board
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="class11RBSE"
              name="category"
              value="Class 11 RBSE"
              className="hidden peer"
              onChange= {handleChange}
              required
            />
            <label
              htmlFor="class11RBSE"
              className="inline-flex justify-between items-center p-5 w-full select-none transition-all duration-200  text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:shadow-3xl peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  "
            >
              <div className="block">
                <div className="w-full select-none text-xl font-semibold text-center">
                  Class 11 - RBSE
                </div>
                <div className="w-full select-none text-center text-sm">
                  This category includes all complusory subjects of the class 10
                  in the RBSE board
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="class11CBSE"
              name="category"
              value="Class 11 CBSE"
              className="hidden peer"
              onChange= {handleChange}
              required
            />
            <label
              htmlFor="class11CBSE"
              className="inline-flex justify-between items-center p-5 w-full select-none transition-all duration-200  text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:shadow-3xl peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  "
            >
              <div className="block">
                <div className="w-full select-none text-xl font-semibold text-center">
                  Class 11 - CBSE
                </div>
                <div className="w-full select-none text-center text-sm">This category includes all complusory subjects of the class 11
                  in the CBSE board
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="class12CBSE"
              name="category"
              value="Class 12 CBSE"
              className="hidden peer"
              onChange= {handleChange}
              required
            />
            <label
              htmlFor="class12CBSE"
              className="inline-flex justify-between items-center p-5 w-full select-none transition-all duration-200  text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:shadow-3xl peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  "
            >
              <div className="block">
                <div className="w-full select-none text-xl font-semibold text-center">
                  Class 12 - CBSE
                </div>
                <div className="w-full select-none text-center text-sm">This category includes all complusory subjects of the class 12
                  in the CBSE board
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="class12RBSE"
              name="category"
              value="Class 12 RBSE"
              className="hidden peer"
              onChange= {handleChange}
              required
            />
            <label
              htmlFor="class12RBSE"
              className="inline-flex justify-between items-center p-5 w-full select-none transition-all duration-200  text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:shadow-3xl peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  "
            >
              <div className="block">
                <div className="w-full select-none text-xl font-semibold text-center">
                  Class 12 - RBSE
                </div>
                <div className="w-full select-none text-center text-sm">This category includes all complusory subjects of the class 12
                  in the RBSE board
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="iitje"
              name="category"
              value="IIT - JE"
              className="hidden peer"
              onChange= {handleChange}
              required
            />
            <label
              htmlFor="iitje"
              className="inline-flex justify-between items-center p-5 w-full select-none transition-all duration-200  text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:shadow-3xl peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  "
            >
              <div className="block">
                <div className="w-full select-none text-xl font-semibold text-center">
                  IIT-JE
                </div>
                <div className="w-full select-none text-center text-sm">This is IIT category and by choosing this you can teach for IIT-JE exam to the IIT-JE candidates
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="iitadv"
              name="category"
              value="IIT - ADVANCED"
              className="hidden peer"
              onChange= {handleChange}
              required
            />
            <label
              htmlFor="iitadv"
              className="inline-flex justify-between items-center p-5 w-full select-none transition-all duration-200  text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:shadow-3xl peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  "
            >
              <div className="block">
                <div className="w-full select-none text-xl font-semibold text-center">
                  IIT-ADVANCED
                </div>
                <div className="w-full select-none text-center text-sm">This is IIT category and by choosing this you can teach for IIT-ADVANCED exam 
                </div>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SelectCard;
