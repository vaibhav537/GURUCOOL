import React from 'react'

const SearchCategory = () => {
  return (
    <form>   
    <label htmlFor="search" className="mb-2  text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <i className="fa-solid fa-magnifying-glass text-green-400 ml-[15.3rem]"></i>
        </div>
        <input type="search" id="search" className=" mt-[50px] bg-green-100 block ml-[15rem] outline-none w-[65%] p-4 pl-10 text-sm text-gray-900 border border-green-300 placeholder:text-green-400 rounded-lg font-semibold focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-green-100 dark:text-white dark:focus:ring-green-500 focus:ring-2 dark:focus:border-green-500" placeholder="Search Category" />
        <button type="submit" className="text-white absolute right-[17rem] bottom-2.5 bg-green-700 hover:bg-green-800 font-semibold focus:ring-4 focus:outline-none focus:ring-green-300  rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>
    </div>
</form>
  )
}

export default SearchCategory