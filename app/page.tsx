import { Metadata } from "next";
import Image from "next/image";
import profilePic from "../public/Profile_Sq.png";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Moe Ye Htet - Electrical Engineer",
    description:
        "Moe Ye Htet's resume website for an enthusiastic Electrical Engineer",
    keywords: [
        "electrical engineering",
        "embedded systems",
        "circuit design",
        "pcb design",
        "power electronics",
        "nextjs",
        "purdue",
    ],
    openGraph: {
        url: "https://moeyehtet.com",
        type: "website",
        title: "Moe Ye Htet - Electrical Engineer",
        description:
            "Moe Ye Htet's resume website for an enthusiastic Electrical Engineer",
        images: [
            {
                url: "https://moeyehtet.com/Profile_Sq.png",
                width: 900,
                height: 900,
                alt: "Moe Ye Htet",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Moe Ye Htet - Electrical Engineer",
        description:
            "Moe Ye Htet's resume website for an enthusiastic Electrical Engineer",
        creator: "@moeyehtet96",
        site: "@moeyehtet96",
        images: [
            {
                url: "https://moeyehtet.com/Profile_Sq.png",
                width: 900,
                height: 900,
                alt: "Moe Ye Htet",
            },
        ],
    },
    alternates: {
        canonical: "https://moeyehtet.com",
    },
};

export default function Home() {
    return (
        <div className="flex flex-col flex-1 h-full justify-center text-center py-10 px-8">
            <Image
                className="mx-auto rounded-full"
                src={profilePic}
                alt="Profile Picture of Moe Ye Htet"
                width={200}
                height={200}
            />
            <h1 className="mt-5 block text-2xl font-bold text-nord6 sm:text-4xl tracking-widest">
                MOE YE HTET
            </h1>
            <p className="mt-2 text-xl text-nord6 tracking-widest">
                M.Sc. Automotive Software Engineering candidate at TU Chemnitz
            </p>
            <ul className="mt-3 text-lg text-nord6">
                <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                    Hands-on experience
                </li>
                <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                    Technical Excellence
                </li>
                <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                    Top-notch Teamwork
                </li>
            </ul>
            <div className="mt-3 flex justify-center">
                <div className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-nord7 text-nord6 mx-1">
                    Embedded Systems
                </div>
                <div className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-nord8 text-nord6 dark:border-nord8 mx-1">
                    Electronics
                </div>
                <div className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-nord9 text-nord6 mx-1">
                    Automotive Software
                </div>
                <div className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-nord10 text-nord6 mx-1">
                    Circuit Design
                </div>
            </div>
            <div className="justify-center mt-7 grid gap-3 w-full sm:inline-flex">
                <div className="hs-dropdown relative inline-flex">
                    <a
                        id="hs-dropdown-default"
                        type="button"
                        className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-nord8 text-nord0 hover:bg-nord9 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-nord3"
                        href="#"
                    >
                        My Resume
                        <svg
                            className="hs-dropdown-open:rotate-180 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </a>
                    <div
                        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-nord5 shadow-md rounded-lg p-2 mt-2 dark:bg-nord1 dark:border dark:border-nord3 dark:divide-nord3 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                        aria-labelledby="hs-dropdown-default"
                    >
                        <Link
                            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-nord1 hover:bg-nord4 focus:outline-none focus:bg-nord4 dark:text-nord4 dark:hover:bg-nord3 dark:hover:text-nord6 dark:focus:bg-nord3"
                            href="/resume"
                        >
                            View in Web
                        </Link>
                        <Link
                            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-nord1 hover:bg-nord4 focus:outline-none focus:bg-nord4 dark:text-nord4 dark:hover:bg-nord3 dark:hover:text-nord6 dark:focus:bg-nord3"
                            href="/MoeYe_Htet-Resume.pdf"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            Download as PDF
                        </Link>
                    </div>
                </div>
                <a
                    className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-nord5 bg-nord6 text-nord0 shadow-sm hover:bg-nord4 disabled:opacity-50 disabled:pointer-events-none dark:bg-nord1 dark:border-nord2 dark:text-nord6 dark:hover:bg-nord2 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-nord3"
                    href="/contact"
                >
                    Contact Me
                </a>
            </div>
        </div>
    );
}
