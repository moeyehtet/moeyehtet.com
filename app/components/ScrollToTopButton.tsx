"use client";
import React from "react";
import { useEffect, useState } from "react";
import { HiArrowSmallUp } from "react-icons/hi2";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
  };

  return (
    <button
      className={`block rounded-full p-2 outline-none transition-opacity duration-200 text-nord6 bg-nord3 text-2xl ${
        isVisible ? "opacity-70" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <HiArrowSmallUp />
    </button>
  );
};

export default ScrollToTopButton;
