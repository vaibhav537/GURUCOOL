import React from "react";
import IntroTeam from "./components/IntroTeam";
import Head from "next/head";
import Faclities from "./components/Faclities";
import Team from "./components/Team.jsx";

const about = (props) => {
  return (
    <>
      <Head>
        <title>MEET-IN : About</title>
        <meta
          name="description"
          content="Generated by developer for the who needs to be thier doubts and want to learn from the expert"
        />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className="bg-slate-100 ">
        <IntroTeam />
        <div className="bg-slate-100 dark:bg-slate-600 transition-all duration-700">
          <p className="text-center text-3xl pt-5 select-text cursor-text">Developer's team</p>
          <Team />
        </div>
        <Faclities />
      </div>
    </>
  );
};

export default about;
