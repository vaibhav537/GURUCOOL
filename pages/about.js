import React from "react";
import IntroTeam from "./components/IntroTeam";
import Head from "next/head";
import Faclities from "./components/Faclities";
import Team from "./components/Team.jsx";

const about = () => {
  return (
    <>
      <Head>
        <title>GURU COOL : About</title>
        <meta
          name="description"
          content="Generated by developer for the who needs to be thier doubts and want to learn from the expert"
        />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className="bg-slate-100 dark:bg-slate-600">
        <div data-aos="fade-up">
          <IntroTeam />
        </div>
        <div
          className="bg-slate-100 dark:bg-slate-600 transition-all duration-700"
          data-aos="fade-up"
        >
          <p className="select-none text-center text-3xl pt-5 text-black dark:text-white cursor-text">
            Developer's team
          </p>

          <Team />
        </div>
        <div data-aos="fade-up">
          <Faclities data-aos="fade-up" />
        </div>
      </div>
    </>
  );
};

export default about;
