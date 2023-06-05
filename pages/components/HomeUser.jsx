import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

const phrases = ["WELCOME TO", "SIGN UP TO", "LOGIN TO"];

const HomeUser = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const currentPhrase = phrases[currentPhraseIndex];


  return (
    <div className="select-none h-[93.78vh] w-screen flex relative">
      <div className="from-slate-100 to-slate-900 bg-gradient-to-r dark:bg-gradient-to-br dark:to-slate-300 dark:from-slate-900 dark:bg-slate-700 w-full h-full"></div>
      <span
        className={` absolute hover:h-44  hover:w-44 shadow-5xl bg-slate-500/50 dark:bg-slate-100/90 transition-all duration-500 rounded-full h-40 ${styles.animatingBalls} w-40 top-[40rem] left-[55rem]`}
      ></span>
      <span
        className={`absolute hover:h-44 hover:w-44 shadow-5xl bg-slate-200/50 dark:bg-slate-900/40 transition-all duration-500 rounded-full h-40 ${styles.animatingBalls} w-40 top-[1rem] left-[95rem]`}
      ></span>
      <span
        className={`absolute hover:h-44 hover:w-44 shadow-5xl bg-slate-300/50 dark:bg-slate-800/70 transition-all duration-500 rounded-full h-40 ${styles.animatingBalls} w-40 top-[4rem] left-[26rem]`}
      ></span>
      <span
        className={`absolute hover:h-44 hover:w-44 shadow-5xl bg-slate-400/50 dark:bg-slate-600/60 transition-all duration-500 rounded-full h-40 ${styles.animatingBalls} w-40 top-[19rem] left-[85rem]`}
      ></span>
      <span
        className={`absolute hover:h-44 hover:w-44 shadow-5xl bg-slate-500/50 dark:bg-slate-400/10 transition-all duration-500 rounded-full h-40 ${styles.animatingBalls} w-40 top-[35rem] left-[95rem]`}
      ></span>
      <span
        className={`absolute hover:h-44 hover:w-44 shadow-5xl bg-slate-600/90 dark:bg-slate-200/20 transition-all duration-500 rounded-full h-40 ${styles.animatingBalls} w-40 top-[12rem] left-[105rem]`}
      ></span>
      <span
        className={`absolute hover:h-44 hover:w-44 shadow-5xl bg-slate-700/30 dark:bg-slate-100/50 transition-all duration-500 rounded-full h-40 ${styles.animatingBalls} w-40 top-[38rem] left-[75rem]`}
      ></span>
      <span
        className={`absolute hover:h-44 hover:w-44 shadow-5xl bg-slate-700/40 dark:bg-slate-900/90 transition-all duration-500 rounded-full h-40 ${styles.animatingBalls} w-40 top-[14rem] left-[12rem]`}
      ></span>
      <span
        className={`absolute hover:h-44 hover:w-44 shadow-5xl bg-slate-700/40 dark:bg-slate-300/40 transition-all duration-500 rounded-full h-40 ${styles.animatingBalls} w-40 top-[32rem] left-[22rem]`}
      ></span>
      <span
        className={`absolute hover:h-44 hover:w-44 shadow-5xl bg-slate-700/30 dark:bg-slate-100/70 transition-all duration-500 rounded-full h-40 ${styles.animatingBalls} w-40 top-[31rem] left-[0.6rem]`}
      ></span>
      <span
        className={`absolute hover:h-44 hover:w-44 shadow-5xl bg-slate-800/50 dark:bg-slate-800/50 transition-all duration-500 rounded-full h-40 ${styles.animatingBalls} w-40 top-[24rem] left-[65rem]`}
      ></span>
      <span
        className={`absolute hover:h-44 hover:w-44 shadow-5xl bg-slate-600/50 dark:bg-slate-500/30 transition-all duration-500 rounded-full h-40 ${styles.animatingBalls} w-40 top-[21rem] left-[29rem]`}
      ></span>
      <span
        className={`absolute hover:h-44 hover:w-44 shadow-5xl bg-slate-400/50 dark:bg-slate-400/90 transition-all duration-500 rounded-full h-40 ${styles.animatingBalls} w-40 top-[23rem] left-[45rem]`}
      ></span>
      <span
        className={`text-slate-600 text-6xl absolute dark:text-slate-300 top-[23rem] left-[25rem] ${styles.fadeAnimation}`}
      >
        {currentPhrase}
      </span>
      <span className="animatingText text-slate-900 text-8xl absolute dark:text-slate-100  top-[22rem] left-[54rem]">
        GURUCOOL
      </span>
    </div>
  );
};

export default HomeUser;
