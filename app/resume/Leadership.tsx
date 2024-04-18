import React from "react";
import { leadershipEntries } from "@/data/data";

const Leadership = () => {
  return (
    <div>
      <h2 className="text-2xl text-center font-medium text-nord6 tracking-widest uppercase">
        Leadership
      </h2>
      <div className="text-nord6">
        {leadershipEntries.map((le) => (
          <div key={le.id} className="mt-4">
            <h3 className="text-xl text-center font-semibold">{le.position}</h3>
            <p className="text-lg text-center">{le.association}</p>
            <p className="text-center">{le.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
