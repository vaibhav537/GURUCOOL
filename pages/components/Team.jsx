import React, { useState } from "react";

const Team = () => {
  const slides = [
    {
      url: "/images/slide_1.jpg",
      title: "Developer 1",
    },
    {
      url: "/images/slide_2.jpg",
      title: "Developer 2",
    },
    {
      url: "/images/slide_3.jpg",
      title: "Developer 3",
    },    
    {
      url: "/images/slide_4.jpg",
      title: "Developer 4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
    console.log(newIndex);
  };

  return (
    <>
    <div className="bg-slate-100 dark:bg-slate-600 transition-all duration-700">
      <div className="max-w-[840px] h-[380px] md:h-[480px] lg:h-[580px] xl:h-[580px] w-full xl:-pt-10 m-auto py-16 px-4 dark:bg-slate-600 relative group transition-all duration-700 ">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full opacity-80 rounded-2xl bg-center bg-cover duration-500"
        >
          <p className="absolute mt-[12rem] opacity-100 font-bold text-white ml-[6.5rem] md:mt-[16.5rem] select-none md:ml-[16.5rem] md:text-[46px] lg:mt-[23rem] text-2xl">
            {slides[currentIndex].title}
          </p>
        </div>
        {/* Left Arrow */}
        <div className="hidden group-hover:flex font-bold  justify-center items-center w-9 h-9 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-6 text-2xl rounded-full  cursor-pointer bg-black/20 text-white ">
          <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
        </div>
        {/* right Arrow */}
        <div className="hidden group-hover:flex justify-center items-center w-9 h-9 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-6 text-2xl rounded-full bg-black/20 text-white cursor-pointer ">
          <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>
        </div>
      </div>

      </div>
    </>
  );
};

export default Team;
