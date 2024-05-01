import React from "react";
import { ISkillsEntry } from "@/data/data";

interface Props {
  data: ISkillsEntry;
}

const SkillItem = ({ data }: Props) => {
  const { icon, name } = data;
  const Icon = icon;

  return (
    <div className="flex flex-col justify-center items-center">
      <Icon className="text-2xl" />
      <p className="mt-2">{name}</p>
    </div>
  );
};

export default SkillItem;
