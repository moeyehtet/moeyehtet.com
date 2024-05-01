import React from "react";
import {
  SiMicrosoft,
  SiGoogledrive,
  SiSlack,
  SiAutodesk,
  SiLinux,
  SiLtspice,
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import {
  adminSkills,
  engrSkills,
  programmingSkills,
  languageSkills,
} from "@/data/data";
import SkillGroup from "./SkillGroup";

const Skills = () => {
  return (
    <div>
      <h2 className="text-2xl text-center font-bold text-nord6 tracking-widest uppercase">
        Skills
      </h2>
      <div className="text-nord6">
        <SkillGroup title="Administrative" data={adminSkills} />
        <SkillGroup title="Engineering Tools" data={engrSkills} />
        <SkillGroup title="Programming Languages" data={programmingSkills} />
        <SkillGroup title="Languages" data={languageSkills} />
      </div>
    </div>
  );
};

export default Skills;
