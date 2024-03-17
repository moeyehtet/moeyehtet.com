import React from "react";
import Image from "next/image";
import profilePic from "../public/Profile_Sq.png";

const Hero = () => {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center p-8 border rounded-lg">
        <div>
          <h1 className="block text-3xl font-bold text-blue-600 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-blue-600 tracking-widest">
            MOE YE HTET
          </h1>
          <p className="my-3 text-xl text-gray-800 dark:text-gray-400 tracking-widest">
            ELECTRICAL ENGINEER
          </p>

          <div>
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500 mr-1 mb-1">
              Embedded Systems
            </span>
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 mr-1 mb-1">
              Power Electronics
            </span>
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 mr-1 mb-1">
              Control Systems
            </span>
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500 mb-1">
              Circuit Design
            </span>
          </div>

          <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            <a
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Download My Resume
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
            <a
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="relative ms-4">
          <Image
            className="rounded-lg h-full"
            src={profilePic}
            alt="Picture of Moe Ye Htet"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
