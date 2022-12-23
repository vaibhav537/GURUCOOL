import React from 'react'


const TeacherRegister = () => {
  return (
    <>
       <div className="flex justify-center items-center">
        <div className="rounded-md p-10  shadow-lg mt-4 ">
          <form method="post" className="flex">
            <div className="">
              <div className="relative">
                <input
                  id="teacherName"
                  type="text"
                  className=" border-green-300 border-b-2 py-1 focus:outline-none  focus:border-green-300 bg-slate-100 focus:border-b-4 peer transition-colors" 
                  autoComplete="off"
                />
                <label htmlFor="teacherName" className="absolute cursor-text peer-focus:text-xs left-0 top-1 peer-focus:-top-4 transition-all peer-focus:text-green-400 text-gray-600 duration-300" > Your Name</label>
              </div>
              <div className="relative mt-6">
                <input
                  id="teacherEmail"
                  type="email"
                  className=" border-green-300 border-b-2 py-1 focus:outline-none  focus:border-green-300 bg-slate-100 focus:border-b-4 peer transition-colors" 
                  autoComplete="off"
                />
                <label htmlFor="teacherEmail" className="absolute cursor-text peer-focus:text-xs left-0 top-1 peer-focus:-top-4 transition-all peer-focus:text-green-400 text-gray-600 duration-300" >Your Email</label>
              </div>
              <div className="relative mt-6">
                <input
                  id="teacherPassword"
                  type="password"
                  className=" border-green-300 border-b-2 py-1 focus:outline-none  focus:border-green-300 bg-slate-100 focus:border-b-4 peer transition-colors" 
                  autoComplete="off"
                />
                <label htmlFor="teacherPassword" className="absolute cursor-text peer-focus:text-xs left-0 top-1 peer-focus:-top-4 transition-all peer-focus:text-green-400 text-gray-600 duration-300" >Create Your Password</label>
              </div>
              <div className="relative mt-6">
                <input
                  id="teacherCPass"
                  type="password"
                  className=" border-green-300 border-b-2 py-1 focus:outline-none  focus:border-green-300 bg-slate-100 focus:border-b-4 peer transition-colors" 
                  autoComplete="off"
                />
                <label htmlFor="teacherCPass" className="absolute cursor-text peer-focus:text-xs left-0 top-1 peer-focus:-top-4 transition-all peer-focus:text-green-400 text-gray-600 duration-300" >Confirm Your Password</label>
              </div>
            </div>
          </form>
        </div>
        
      </div>
    </>
  )
}

export default TeacherRegister