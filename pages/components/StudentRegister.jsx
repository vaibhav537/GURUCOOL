import React from 'react'

const StudentRegister = () => {
  return (
    <>
    
    <div className="flex justify-center items-center">
        <div className="rounded-md p-10  shadow-lg dark:bg-blue-900 bg-blue-100 mt-4 ">
          <form method="POST" className="flex">
            <div className="">
              <div className="relative">
                <input
                  id="studentName"
                  type="text"
                  className=" bg-blue-100 dark:bg-blue-900 border-blue-300 border-b-2 py-1 focus:outline-none  focus:border-blue-300  focus:border-b-4 peer" 
                  autoComplete="off"
                />
                <label htmlFor="studentName" className="dark:text-blue-100 absolute cursor-text peer-focus:text-xs left-0 top-1 peer-focus:-top-4 transition-all peer-focus:text-blue-400 text-gray-600 duration-300" > Your Name</label>
              </div>
              <div className="relative mt-6">
                <input
                  id="studentEmail"
                  type="email"
                  className=" border-blue-300 dark:bg-blue-900 border-b-2 py-1 focus:outline-none  focus:border-blue-300 bg-blue-100 focus:border-b-4 peer transition-colors" 
                  autoComplete="off"
                />
                <label htmlFor="studentEmail" className="dark:text-blue-100 absolute cursor-text peer-focus:text-xs left-0 top-1 peer-focus:-top-4 transition-all peer-focus:text-blue-400 text-gray-600 duration-300" >Your Email</label>
              </div>
              <div className="relative mt-6">
                <input
                  id="studentPassword"
                  type="password"
                  className=" border-blue-300 dark:bg-blue-900 border-b-2 py-1 focus:outline-none  focus:border-blue-300 bg-blue-100 focus:border-b-4 peer transition-colors" 
                  autoComplete="off"
                />
                <label htmlFor="studentPassword" className="dark:text-blue-100 absolute cursor-text peer-focus:text-xs left-0 top-1 peer-focus:-top-4 transition-all peer-focus:text-blue-400 text-gray-600 duration-300" >Create Your Password</label>
              </div>
              <div className="relative mt-6">
                <input
                  id="studentCPass"
                  type="password"
                  className=" border-blue-300 dark:bg-blue-900 border-b-2 py-1 focus:outline-none  focus:border-blue-300 bg-blue-100 focus:border-b-4 peer transition-colors" 
                  autoComplete="off"
                />
                <label htmlFor="studentCPass" className="dark:text-blue-100 absolute cursor-text peer-focus:text-xs left-0 top-1 peer-focus:-top-4 transition-all peer-focus:text-blue-400 text-gray-600 duration-300" >Confirm Your Password student</label>
              </div>
            </div>
          </form>
        </div>
        
      </div>
   
    </>
  )
}

export default StudentRegister