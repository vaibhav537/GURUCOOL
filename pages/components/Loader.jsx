import React from "react";
import styles from "../../styles/footer.module.css"

const Loader = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-16 flex-col">
        <div>
          <img src="/images/logo.png" alt="..." className="w-80 h-80  " />
        </div>

        <div className={styles.container}>
         <div className={styles.progress}></div>
        </div>
        <div className="text-4xl mt-[25rem] ml-10 text-black">
          GURU COOL
        </div>
      </div>
    </>
  );
};

export default Loader;
