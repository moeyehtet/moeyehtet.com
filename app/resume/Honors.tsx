import React from "react";
import { honorsEntries } from "@/data/data";

const Honors = () => {
  return (
    <div>
      <h2 className="text-2xl text-center font-medium text-nord6 tracking-widest uppercase">
        Honors
      </h2>
      <div className="text-nord6">
        {honorsEntries.map((he) => (
          <div key={he.id} className="mt-4">
            <h3 className="text-xl text-center font-semibold">{he.award}</h3>
            <p className="text-lg text-center">{he.sponsor}</p>
            <p className="text-center">{he.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Honors;
