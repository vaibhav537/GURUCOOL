import React from "react";
import Image from "next/image"

const Faclities = () => {
  return (
    <div className="text-black" >
      <div className="flex dark:bg-slate-600 pt-3 select-none flex-col xl:px-20 lg:px-1">
        <p className="text-xl text-center md:text-2xl lg:text-3xl">
          FACALITIES
        </p>

        <div className="lg:flex-row flex flex-col ">
          <div className="mt-12 flex flex-col lg:mt-12 select-none justify-center items-center mb-32 lg:mb-9 ">
            <div className="border-gray-600 md:w-[40rem] md:h-[20rem] lg:w-[20rem] lg:h-[20rem] border-2 shadow-inner bg-transparent justify-center items-center shadow-slate-800 flex w-[20rem] py-2">
              <Image
                src="/images/teacher.png"
                className="w-52 h-56 md:h-[18rem] md:w-[16rem] lg:h-[18rem] lg:w-[18rem]"
                alt="..."
                height={224}
                width={208}
              />
            </div>
            <h5 className="text-xl mt-5 md:text-2xl lg:text-[28px]">Teachers</h5>
            <p className="px-4 text-center text-sm mt-1 lg:px-10 lg:text-base md:px-16 md:text-lg">
              Teachers can connect with thier students by registering or login
              and try hard for getting the number 1 rank to unlock the donation
              system. If teacher is new to this website you have to first
              register youself and then you can teach your students.
            </p>
          </div>

          <div className="mt-12 flex flex-col select-none justify-center items-center mb-32 lg:mb-9 ">
            <div className="border-gray-600 md:w-[40rem] md:h-[20rem] lg:w-[20rem] lg:h-[20rem] border-2 shadow-inner bg-transparent justify-center items-center shadow-slate-800 flex w-[20rem] py-2">
              <Image
                src="/images/student.png"
                className="md:h-[18rem] md:w-[16rem] lg:h-[18rem] lg:w-[13rem]"
                alt="..."
                height={224}
                width={208}
              />
            </div>
            <h5 className="text-xl mt-5 md:text-2xl lg:text-[28px]">Students</h5>
            <p className="px-4 text-center text-sm mt-1 lg:px-10 lg:text-base md:px-16 md:text-lg">
              Students can connect and gain the valuable knowledge according to
              their chosen category and can donate to thier favorite teacher.
              the students also have to register to tthis website if they are
              new to this site otherwise they simply can login
            </p>
          </div>
          <div className="mt-12 flex flex-col select-none justify-center items-center mb-32 lg:mb-9 ">
            <div className="border-gray-600 md:w-[40rem] md:h-[20rem] lg:w-[20rem] lg:h-[20rem] border-2 shadow-inner bg-transparent justify-center items-center shadow-slate-800 flex w-[20rem] py-2">
              <Image
                src="/images/admin.png"
                className="w-52 h-56 md:h-[18rem] md:w-[16rem] lg:h-[18rem] lg:w-[18rem]"
                alt="..."
                height={224}
                width={208}
              />
            </div>
            <h5 className="text-xl mt-5 md:text-2xl lg:text-[28px]">Admin</h5>
            <p className="px-4 text-center text-sm mt-1 lg:text-base lg:px-10 lg:ml-2 md:px-16 md:text-lg">
              Admin account can be access by the special id and password and can
              manage the teachers and students by removing them when necessary
              and can also manage and disturb the rating system by improving
              someone`s rating.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faclities;
