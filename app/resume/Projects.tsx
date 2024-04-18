import React from "react";
import { projectEntries } from "@/data/data";

const Projects = () => {
  return (
    <div>
      <h2 className="text-2xl text-center font-bold text-nord6 tracking-widest uppercase">
        Projects
      </h2>
      <div className="text-nord6">
        {projectEntries.map((pe) => (
          <div key={pe.id} className="mt-4">
            <h3 className="text-xl text-center font-semibold">{pe.title}</h3>
            <p className="text-lg text-center">{pe.course}</p>
            <p className="text-center">{pe.year}</p>
            <ul className="list-disc list-inside text-justify">
              {pe.points.map((pt) => (
                <li key={pt.ptId}>{pt.ptContent}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
