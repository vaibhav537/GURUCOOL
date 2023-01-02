import React from "react";
import LoaderStudent from "./LoaderStudent";

const SelectCard = () => {
  //These radios are for the category that will be selected and send it to the mongo db ok can be my last modify
  return (
    <>
      <div className="flex justify-center items-center">
        <ul
          class="container m-auto grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4"
        >
          <li>
            <input
              type="radio"
              id="hosting-small"
              name="hosting"
              value="hosting-small"
              class="hidden peer"
              required
            />
            <label
              for="hosting-small"
              class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-green-100 rounded-lg border border-green-400 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-700 peer-checked:border-2 hover:text-gray-600 hover:bg-green-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div class="block">
                <div class="w-full text-lg font-semibold">500-1000 MB</div>
                <div class="w-full">Good for small websites</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-big"
              name="hosting"
              value="hosting-big"
              class="hidden peer"
            />
            <label
              for="hosting-big"
              class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div class="block">
                <div class="w-full text-lg font-semibold">500-1000 MB</div>
                <div class="w-full">Good for large websites</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-great"
              name="hosting"
              value="hosting-great"
              class="hidden peer"
            />
            <label
              for="hosting-great"
              class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div class="block">
                <div class="w-full text-lg font-semibold">500-1000 MB</div>
                <div class="w-full">Good for large websites</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-good"
              name="hosting"
              value="hosting-good"
              class="hidden peer"
            />
            <label
              for="hosting-good"
              class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div class="block">
                <div class="w-full text-lg font-semibold">500-1000 MB</div>
                <div class="w-full">Good for large websites</div>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SelectCard;
