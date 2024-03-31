import React from "react";

const Projects = () => {
  return (
    <div>
      <h2 className="text-2xl text-center font-bold text-nord6 tracking-widest uppercase">
        Projects
      </h2>
      <div className="text-nord6">
        <div className="mt-4">
          <h3 className="text-xl text-center font-semibold">
            Digital Wave Synthesizer
          </h3>
          <p className="text-lg text-center">
            Senior Design Project for Bachelor Degree
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl text-center font-semibold">
            Face-tracking Assistive Phone Mount
          </h3>
          <p className="text-lg text-center">
            Final Project for Microprocessor Systems and Interfacing Course
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
