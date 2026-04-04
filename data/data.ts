import { v4 as uuidv4 } from "uuid";
import { IconType } from "react-icons";
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
    SiRust,
} from "react-icons/si";
import { HiLanguage } from "react-icons/hi2";
import MatlabSvg from "../public/matlab.svg";

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

export interface ISkillsEntry {
    id: string;
    icon: IconType;
    name: string;
}

export const navData: INavData[] = [
    { id: uuidv4(), title: "Home", link: "/" },
    { id: uuidv4(), title: "Resume", link: "/resume" },
    { id: uuidv4(), title: "Contact", link: "/contact" },
];

export const resumeEntries: IResumeEntry[] = [
    {
        id: uuidv4(),
        title: "Project Management Co-Officer",
        company: "Thate Pan Hub - Innovation Department",
        duration: "January 2022 - December 2023",
        points: [
            {
                ptId: uuidv4(),
                ptContent:
                    "Delivered basic computer science courses to over 250 students across three schools in Hpa-an, Karen State, increasing exposure to STEM education.",
            },
            {
                ptId: uuidv4(),
                ptContent:
                    "Led Training of Trainers (TOT) workshops for volunteer teachers in coordination with the academic team, enhancing local teaching capacity.",
            },
            {
                ptId: uuidv4(),
                ptContent:
                    "Managed end-to-end production of digital literacy video lectures, including lesson plans, voiceovers and video editing.",
            },
        ],
    },
    {
        id: uuidv4(),
        title: "Junior Electrical Engineer",
        company: "ACM Company Ltd",
        duration: "February 2020 - December 2021",
        points: [
            {
                ptId: uuidv4(),
                ptContent:
                    "Designed schematics and electrical panels for installations at projects across commercial, industrial, and construction sites.",
            },
            {
                ptId: uuidv4(),
                ptContent:
                    "Coordinated with clients, and conducted site inspections to monitor project progress and proactively resolve technical issues.",
            },
            {
                ptId: uuidv4(),
                ptContent:
                    "Conducted internal training sessions on electrical components used in projects, improving cross-functional understanding among project teams.",
            },
        ],
    },
    {
        id: uuidv4(),
        title: "Undergraduate Teaching Assistant",
        company: "Purdue University - Electronic Measurement Techniques Lab",
        duration: "August 2018 - May 2019",
        points: [
            {
                ptId: uuidv4(),
                ptContent:
                    "Supported over 50 students during the academic year by providing hands-on and theoretical assistance during lab sessions and office hours.",
            },
            {
                ptId: uuidv4(),
                ptContent:
                    "Performed routine maintenance, and managed inventory of lab equipment and electronic components at the lab storage.",
            },
        ],
    },
    {
        id: uuidv4(),
        title: "Controls Engineer",
        company: "EPICS Program - Purdue Orbital",
        duration: "August 2016 - May 2017",
        points: [
            {
                ptId: uuidv4(),
                ptContent:
                    "Designed and implemented a PID control system for DC worm gear motor and linear actuator to automate launch platform orientation.",
            },
            {
                ptId: uuidv4(),
                ptContent:
                    "Developed and laid out PCB designs for the power supply and the control system modules using EaglePCB.",
            },
        ],
    },
];

export const projectEntries: IProjectEntry[] = [
    {
        id: uuidv4(),
        title: "Digital Wavetable Synthesizer",
        course: "Senior Design Project for Graduation — Purdue University",
        year: "January 2019 - May 2019",
        points: [
            {
                ptId: uuidv4(),
                ptContent:
                    "Designed the charging circuit for the Li-Po battery and DC-DC buck converters for the power supply subsystem.",
            },
            {
                ptId: uuidv4(),
                ptContent:
                    "Designed the ADSR envelope and class AB amplifier circuits for audio output.",
            },
            {
                ptId: uuidv4(),
                ptContent:
                    "Designed the PCB layouts for the power supply and sound output subsystems using EaglePCB.",
            },
        ],
    },
    {
        id: uuidv4(),
        title: "Face-tracking Assistive Phone Mount",
        course: "Final Project for Microprocessor Systems and Interfacing Course",
        year: "January 2018 - May 2018",
        points: [
            {
                ptId: uuidv4(),
                ptContent:
                    "Programmed the STM32 microcontroller to control the servo motors according to the camera input, and to integrate with touchscreen interface for manual positioning.",
            },
            {
                ptId: uuidv4(),
                ptContent:
                    "Designed PCB layout for the project, including the power supply circuit using EaglePCB.",
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
        duration: "August 2017 - May 2019",
    },
    {
        id: uuidv4(),
        position: "Co-founder and Vice-President",
        association: "Myanmar Students Association (Purdue University)",
        duration: "August 2018 - May 2019",
    },
];

export const honorsEntries: IHonorsEntry[] = [
    {
        id: uuidv4(),
        award: "Myanmar President's Scholarship",
        sponsor: "Government of the Republic of the Union of Myanmar",
        duration: "August 2015 - May 2019",
    },
    {
        id: uuidv4(),
        award: "Eli Shay Scholarship",
        sponsor: "Purdue University ECE Department",
        duration: "August 2016 - May 2017",
    },
];

export const adminSkills: ISkillsEntry[] = [
    {
        id: uuidv4(),
        icon: SiMicrosoft,
        name: "Office Suite",
    },
    {
        id: uuidv4(),
        icon: SiGoogledrive,
        name: "Google Suite",
    },
    {
        id: uuidv4(),
        icon: SiSlack,
        name: "Slack",
    },
];

export const engrSkills: ISkillsEntry[] = [
    {
        id: uuidv4(),
        icon: SiLtspice,
        name: "LTSpice",
    },
    {
        id: uuidv4(),
        icon: SiLinux,
        name: "Linux",
    },
    {
        id: uuidv4(),
        icon: MatlabSvg,
        name: "MATLAB",
    },
    {
        id: uuidv4(),
        icon: SiAutodesk,
        name: "EAGLE PCB",
    },
    {
        id: uuidv4(),
        icon: SiAutodesk,
        name: "AutoCAD",
    },
];

export const programmingSkills: ISkillsEntry[] = [
    {
        id: uuidv4(),
        icon: SiC,
        name: "C",
    },
    {
        id: uuidv4(),
        icon: SiCplusplus,
        name: "C++",
    },
    {
        id: uuidv4(),
        icon: SiPython,
        name: "Python",
    },
    {
        id: uuidv4(),
        icon: SiRust,
        name: "Rust",
    },
    {
        id: uuidv4(),
        icon: SiJavascript,
        name: "Javascript",
    },
];

export const languageSkills: ISkillsEntry[] = [
    {
        id: uuidv4(),
        icon: HiLanguage,
        name: "English (C1)",
    },
    {
        id: uuidv4(),
        icon: HiLanguage,
        name: "German (A2)",
    },
    {
        id: uuidv4(),
        icon: HiLanguage,
        name: "Japanese (N2)",
    },
    {
        id: uuidv4(),
        icon: HiLanguage,
        name: "Burmese (Native)",
    },
];
