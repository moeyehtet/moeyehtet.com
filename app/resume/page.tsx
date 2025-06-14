import React from "react";
import Objective from "./Objective";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Leadership from "./Leadership";
import Honors from "./Honors";
import Skills from "./Skills";

const Resume = () => {
  return (
    <div className="max-w-screen-sm mx-auto py-10 px-8">
      <Objective />
      <hr className="border-nord2 my-8" />
      <Education />
      <hr className="border-nord2 my-8" />
      <Experience />
      <hr className="border-nord2 my-8" />
      <Projects />
      <hr className="border-nord2 my-8" />
      <Skills />

      <hr className="border-nord2 my-8" />
      <Leadership />
      <hr className="border-nord2 my-8" />
      <Honors />
    </div>
  );
};

export default Resume;
