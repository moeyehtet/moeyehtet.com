import { v4 as uuidv4 } from "uuid";

export interface INavData {
  id: string;
  title: string;
  link: string;
}

export interface IResumeEntry {
  id: string;
  title: string;
  company: string;
  duration: string;
  points: {
    ptId: string;
    ptContent: string;
  }[];
}

export interface IProjectEntry {
  id: string;
  title: string;
  course: string;
  year: string;
  points: {
    ptId: string;
    ptContent: string;
  }[];
}

export interface ILeadershipEntry {
  id: string;
  position: string;
  association: string;
  duration: string;
}

export interface IHonorsEntry {
  id: string;
  award: string;
  sponsor: string;
  duration: string;
}

export const navData: INavData[] = [
  { id: uuidv4(), title: "Home", link: "/" },
  { id: uuidv4(), title: "Resume", link: "/resume" },
  { id: uuidv4(), title: "Contact", link: "/contact" },
];

export const resumeEntries: IResumeEntry[] = [
  {
    id: uuidv4(),
    title: "Project Management Co-officer",
    company: "Thate Pan Hub - Innovation Department",
    duration: "2021 - 2022",
    points: [
      {
        ptId: uuidv4(),
        ptContent:
          "Developed and successfully implemented a project for teaching basic computer science to children in Hpa-an, Karen State.",
      },
      {
        ptId: uuidv4(),
        ptContent:
          "Conducted training of trainers (ToT) with Academic Department.",
      },
      {
        ptId: uuidv4(),
        ptContent:
          "Coordinated tasks and responsibilities of the trainers for arranging classes and giving lectures to children at various schools.",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Undergraduate Teaching Assistant",
    company: "Purdue University - Electronic Measurement Techniques Lab",
    duration: "2018 - 2019",
    points: [
      {
        ptId: uuidv4(),
        ptContent:
          "Led the lab sessions and provided technical and theoretical assistance to students for an academic year.",
      },
      {
        ptId: uuidv4(),
        ptContent:
          "Performed equipment maintenance and kept inventory of lab materials.",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Controls Engineer",
    company: "EPICS Program - Purdue Orbital Team",
    duration: "2017-2018",
    points: [
      {
        ptId: uuidv4(),
        ptContent:
          "Designed PID control system for DC worm gear motor and linear actuator.",
      },
      {
        ptId: uuidv4(),
        ptContent:
          "Designed the power supply circuit for the control system and designed the PCB.",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Undergraduate Research Assistant",
    company: "Vertically Integrated Projects - Signal Integrity Team",
    duration: "2016 - 2017",
    points: [
      {
        ptId: uuidv4(),
        ptContent:
          "Conducted research about electromagnetic compatibility regulations and suitable compliance testing techniques.",
      },
      {
        ptId: uuidv4(),
        ptContent:
          "Developed a radiative and conductive compliance test using the spectrum analyzer.",
      },
    ],
  },
];

export const projectEntries: IProjectEntry[] = [
  {
    id: uuidv4(),
    title: "Digital Wavetable Synthesizer",
    course: "Senior Design Project for Bachelor Degree",
    year: "2019",
    points: [
      {
        ptId: uuidv4(),
        ptContent:
          "Designed the charging circuit and DC-DC converters for the power supply subsystem.",
      },
      {
        ptId: uuidv4(),
        ptContent:
          "Designed the ADSR module and amplifier circuit for sound output subsystem.",
      },
      {
        ptId: uuidv4(),
        ptContent:
          "Designed the PCBs for the power supply and sound output subsystems.",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Face-tracking Assistive Phone Mount",
    course: "Final Project for Microprocessor Systems and Interfacing Course",
    year: "2018",
    points: [
      {
        ptId: uuidv4(),
        ptContent:
          "Performed system integration of LCD touchscreen controls and servo motors.",
      },
      {
        ptId: uuidv4(),
        ptContent: "Designed power supply circuit and PCB for the project.",
      },
    ],
  },
];

export const leadershipEntries: ILeadershipEntry[] = [
  {
    id: uuidv4(),
    position: "Chair of Multicultural Relations Committee",
    association:
      "Electrical and Computer Engineering Student Society (Purdue University)",
    duration: "2017 - 2019",
  },
  {
    id: uuidv4(),
    position: "Co-founder and Vice-President",
    association: "Myanmar Students Association (Purdue University)",
    duration: "2018 - 2019",
  },
];

export const honorsEntries: IHonorsEntry[] = [
  {
    id: uuidv4(),
    award: "Myanmar President's Scholarship",
    sponsor: "Government of the Republic of the Union of Myanmar",
    duration: "2015 - 2019",
  },
  {
    id: uuidv4(),
    award: "Eli Shay Scholarship",
    sponsor: "Purdue University ECE Department",
    duration: "2016 - 2017",
  },
];
