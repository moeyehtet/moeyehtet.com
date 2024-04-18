import React from "react";
import { resumeEntries } from "@/data/data";

const Experience = () => {
  return (
    <div>
      <h2 className="text-2xl text-center font-bold text-nord6 tracking-widest uppercase">
        Experience
      </h2>
      <div className="text-nord6">
        {resumeEntries.map((re) => (
          <div key={re.id} className="mt-4">
            <h3 className="text-xl text-center font-semibold">{re.title}</h3>
            <p className="text-lg text-center">{re.company}</p>
            <p className="text-center">{re.duration}</p>
            <ul className="list-disc list-inside text-justify">
              {re.points.map((pt) => (
                <li key={pt.ptId}>{pt.ptContent}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
