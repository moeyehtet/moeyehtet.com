import Image from "next/image";
import profilePic from "../public/Profile_Sq.png";

export default function Home() {
  return (
    <div className="max-w-[50rem] flex flex-col mx-auto h-screen">
      {/* ========== HEADER ========== */}
      <header className="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">
        <nav
          className="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-xl font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gray-600 tracking-widest"
              href="#"
              aria-label="Brand"
            >
              MOE YE HTET
            </a>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-700 hover:border-gray-600 font-medium text-gray-300 hover:text-white shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-600 transition-all text-sm"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={3} x2={21} y1={6} y2={6} />
                  <line x1={3} x2={21} y1={12} y2={12} />
                  <line x1={3} x2={21} y1={18} y2={18} />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <a
                className="font-medium text-white focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
                aria-current="page"
              >
                Home
              </a>
              <a
                className="font-medium text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                Resume
              </a>
              <a
                className="font-medium text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                Contact
              </a>
              <a
                className="font-medium text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                Blog
              </a>
            </div>
          </div>
        </nav>
      </header>
      {/* ========== END HEADER ========== */}
      {/* ========== MAIN CONTENT ========== */}
      <main id="content" role="main">
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
          <Image
            className="mx-auto rounded-full"
            src={profilePic}
            alt="Profile Picture of Moe Ye Htet"
            width={200}
            height={200}
          />
          <h1 className="mt-5 block text-2xl font-bold text-white sm:text-4xl tracking-widest">
            MOE YE HTET
          </h1>
          <p className="mt-2 text-xl text-gray-300 tracking-widest">
            ELECTRICAL ENGINEER
          </p>
          <p className="mt-3 text-lg text-gray-300">
            Hands-on experience, Leadership skills, Top-notch Teamwork
          </p>
          <div className="mt-3 flex justify-center">
            <div className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-500 text-white mx-1">
              Embedded Systems
            </div>
            <div className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-600 text-white dark:bg-blue-500 mx-1">
              Power Electronics
            </div>
            <div className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white mx-1">
              Control Systems
            </div>
            <div className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-500 text-white mx-1">
              Circuit Design
            </div>
          </div>
          <div className="flex justify-center mt-7 grid gap-3 w-full sm:inline-flex">
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
      </main>
      {/* ========== END MAIN CONTENT ========== */}
      {/* ========== FOOTER ========== */}
      <footer className="mt-auto text-center py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400">
            Copyright © 2022 Moe Ye Htet. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Created with Next.js, Tailwind CSS and Preline.
          </p>
        </div>
      </footer>
      {/* ========== END FOOTER ========== */}
    </div>
  );
}
