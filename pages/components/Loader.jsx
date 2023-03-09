import React from "react";

const Loader = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-16 flex-col">
        <div>
          <img src="/images/logo.png" alt="..." className="w-48 h-48 " />
        </div>
        <div className="text-4xl mt-7 ml-10">
          GURU COOL
        </div>
        <div>
          <img src="/mainLOADER.gif" alt="..."  className="w-28 pt-40"/>
        </div>
      </div>
    </>
  );
};

export default Loader;
