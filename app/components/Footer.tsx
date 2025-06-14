import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-nord4">
          Copyright © {new Date().getFullYear()} Moe Ye Htet. All rights
          reserved.
        </p>
        <p className="text-xs text-nord4">
          Created with Next.js, Tailwind CSS and Preline.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
