import React from "react";
import SkillItem from "./SkillItem";
import { ISkillsEntry } from "@/data/data";

interface Props {
  title: string;
  data: ISkillsEntry[];
}

const SkillGroup = ({ title, data }: Props) => {
  return (
    <div className="mt-4">
      <h3 className="text-xl text-center font-semibold">{title}</h3>
      <div className="grid grid-flow-col auto-cols-fr gap-4 justify-center items-center mt-4">
        {data.map((d) => (
          <SkillItem key={d.id} data={d} />
        ))}
      </div>
    </div>
  );
};

export default SkillGroup;
