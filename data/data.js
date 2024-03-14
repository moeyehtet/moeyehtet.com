import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Icon } from "@chakra-ui/react";
import {
  SiMicrosoftoffice,
  SiGoogledrive,
  SiSlack,
  SiAltiumdesigner,
  SiAutodesk,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiC,
  SiLinux,
} from "react-icons/si";

export const navData = [
  {
    id: uuidv4(),
    name: "About Me",
    link: "#about-me",
  },
  {
    id: uuidv4(),
    name: "Contact",
    link: "#contact",
  },
  {
    id: uuidv4(),
    name: "Resume",
    link: "#resume",
  },
];

export const aboutData = {
  imgUrl: "/images/profile-photo.jpg",
  altText: "Moe Ye Htet",
  name: "MOE YE HTET",
  title: "ELECTRICAL ENGINEER",
  objective:
    "A highly-motivated Electrical Engineer with hands-on engineering knowledge, teamwork skills and leadership experience, seeking a full-time position where a difference can be made towards groundbreaking engineering solutions.",
  interests: [
    {
      id: uuidv4(),
      name: "Power Electronics",
    },
    {
      id: uuidv4(),
      name: "Embedded Systems",
    },
    {
      id: uuidv4(),
      name: "Industrial Control",
    },
    {
      id: uuidv4(),
      name: "Circuit Design",
    },
  ],
  hobbies: [
    {
      id: uuidv4(),
      name: "Reading",
    },
    {
      id: uuidv4(),
      name: "Movies",
    },
    {
      id: uuidv4(),
      name: "Anime",
    },
    {
      id: uuidv4(),
      name: "90's Hip-Hop",
    },
  ],
  resumeUrl: "/moeyehtet-resume.pdf",
};

export const contactData = {
  phone: "+66-988961408",
  email: "moeyehtet96@gmail.com",
  linkedin: "moeyehtet96",
  address:
    "85 Soi Sukhumvit 64, Room 410, Bangkok, Thailand 10260",
};

export const eduData = {
  degree: "Bachelor of Science in Electrical Engineering",
  uni: "Purdue University (West Lafayette, IN, USA)",
  duration: "2015-2019",
};

export const adminSkills = [
  {
    id: uuidv4(),
    icon: <Icon as={SiMicrosoftoffice} />,
    text: "Microsoft Office",
  },
  {
    id: uuidv4(),
    icon: <Icon as={SiGoogledrive} />,
    text: "Google Suite",
  },
  {
    id: uuidv4(),
    icon: <Icon as={SiSlack} />,
    text: "Slack",
  },
];

export const engrToolsSkills = [
  {
    id: uuidv4(),
    icon: <Icon as={SiLinux} />,
    text: "Linux",
  },
  {
    id: uuidv4(),
    icon: <Icon as={SiAutodesk} />,
    text: "EAGLE",
  },
  {
    id: uuidv4(),
    icon: <Icon as={SiAutodesk} />,
    text: "AutoCAD Electrical",
  },
  {
    id: uuidv4(),
    id: uuidv4(),
    icon: <Icon as={SiAltiumdesigner} />,
    text: "Altium Designer",
  },
];

export const programmingSkills = [
  {
    id: uuidv4(),
    icon: <Icon as={SiC} />,
    text: "C",
  },
  {
    id: uuidv4(),
    icon: <Icon as={SiCplusplus} />,
    text: "C++",
  },
  {
    id: uuidv4(),
    icon: <Icon as={SiPython} />,
    text: "Python",
  },
  {
    id: uuidv4(),
    icon: <Icon as={SiJavascript} />,
    text: "Javascript",
  },
];

export const expData = [
  {
    id: uuidv4(),
    title: "Project Management Co-officer",
    team: "Thate Pan Hub - Innovation Department",
    duration: "2021-2022",
    points: [
      {
        id: uuidv4(),
        content:
          "Developed and successfully implemented a project for teaching basic computer science to children in Hpa-an, Karen State.",
      },
      {
        id: uuidv4(),
        content:
          "Conducted training of trainers (ToT) with Academic Department.",
      },
      {
        id: uuidv4(),
        content:
          "Coordinated tasks and responsibilities of the trainers for arranging classes and giving lectures to children at various schools.",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Undergraduate Teaching Assistant",
    team: "Purdue University - Electronic Measurement Techniques Lab",
    duration: "2018-2019",
    points: [
      {
        id: uuidv4(),
        content:
          "Led the lab sessions and provided technical and theoretical assistance to students for an academic year.",
      },
      {
        id: uuidv4(),
        content:
          "Performed equipment maintenance and kept inventory of lab materials.",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Controls Engineer",
    team: "EPICS Program - Purdue Orbital Team",
    duration: "2017-2018",
    points: [
      {
        id: uuidv4(),
        content:
          "Designed PID control system for DC worm gear motor and linear actuator.",
      },
      {
        id: uuidv4(),
        content:
          "Designed the power supply circuit for the control system and designed the PCB.",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Undergraduate Research Assistant",
    team: "Vertically Integrated Projects - Signal Integrity Team",
    duration: "2016-2017",
    points: [
      {
        id: uuidv4(),
        content:
          "Conducted research about electromagnetic compatibility regulations and suitable compliance testing techniques.",
      },
      {
        id: uuidv4(),
        content:
          "Developed a radiative and conductive compliance test using the spectrum analyzer.",
      },
    ],
  },
];

export const projData = [
  {
    id: uuidv4(),
    title: "Digital Wavetable Synthesizer",
    team: "Senior Design Project for Bachelor Degree",
    duration: "2019",
    points: [
      {
        id: uuidv4(),
        content:
          "Designed the charging circuit and DC-DC converters for the power supply subsystem.",
      },
      {
        id: uuidv4(),
        content:
          "Designed the ADSR module and amplifier circuit for sound output subsystem.",
      },
      {
        id: uuidv4(),
        content:
          "Designed the PCBs for the power supply and sound output subsystems.",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Face-tracking Assistive Phone Mount",
    team: "Final Project for Microprocessor Systems and Interfacing Course",
    duration: "2018",
    points: [
      {
        id: uuidv4(),
        content:
          "Performed system integration of LCD touchscreen controls and servo motors.",
      },
      {
        id: uuidv4(),
        content: "Designed power supply circuit and PCB for the project.",
      },
    ],
  },
];

export const leadData = [
  {
    id: uuidv4(),
    title: "Chair of Multicultural Relations Committee",
    team: "Electrical and Computer Engineering Student Society (Purdue University)",
    duration: "2017-2019",
  },
  {
    id: uuidv4(),
    title: "Co-founder and Vice-President",
    team: "Myanmar Students Association (Purdue University)",
    duration: "2018-2019",
  },
];

export const honsData = [
  {
    id: uuidv4(),
    title: "Myanmar President's Scholarship",
    duration: "2015-2019",
  },
  {
    id: uuidv4(),
    title: "Eli Shay Scholarship (Purdue University ECE Department)",
    duration: "2016-2017",
  },
];
