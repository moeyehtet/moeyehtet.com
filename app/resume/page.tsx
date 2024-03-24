import React from "react";
import Objective from "./Objective";
import Education from "./Education";

const Resume = () => {
  return (
    <div className="max-w-screen-md mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <Objective />
      <hr className="border-nord2 my-8" />
      <Education />
    </div>
  );
};

export default Resume;
