import React from "react";
import { HiPhone, HiEnvelope, HiBriefcase, HiHome } from "react-icons/hi2";

const Contact = () => {
  return (
    <div className="max-w-screen-sm mx-auto flex flex-col h-full justify-center py-10 px-8">
      <h2 className="text-2xl text-center font-bold text-nord6 tracking-widest uppercase">
        Contact Me
      </h2>
      <div className="mt-8">
        <h3 className="text-xl text-center font-semibold text-nord6 tracking-widest uppercase flex justify-center items-center">
          <HiEnvelope className="inline-block text-2xl text-nord6 mr-2" />
          <span className="inline-block">Email</span>
        </h3>
        <a
          className="block mt-2 text-lg text-center text-nord6"
          href="mailto: moeyehtet96@gmail.com"
        >
          moeyehtet96@gmail.com
        </a>
      </div>
      <hr className="border-nord2 my-8" />
      <div>
        <h3 className="text-xl text-center font-semibold text-nord6 tracking-widest uppercase flex justify-center items-center">
          <HiPhone className="inline-block text-2xl text-nord6 mr-2" />
          <span className="inline-block">Phone</span>
        </h3>
        <a
          className="block mt-2 text-lg text-center text-nord6"
          href="tel: +959790647222"
        >
          +95-9790647222
        </a>
      </div>
      <hr className="border-nord2 my-8" />
      <div>
        <h3 className="text-xl text-center font-semibold text-nord6 tracking-widest uppercase flex justify-center items-center">
          <HiBriefcase className="inline-block text-2xl text-nord6 mr-2" />
          <span className="inline-block">LinkedIn</span>
        </h3>
        <a
          className="block mt-2 text-lg text-center text-nord6"
          href="https://linkedin.com/in/moeyehtet96"
        >
          @moeyehtet96
        </a>
      </div>
      <hr className="border-nord2 my-8" />
      <div>
        <h3 className="text-xl text-center font-semibold text-nord6 tracking-widest uppercase flex justify-center items-center">
          <HiHome className="inline-block text-2xl text-nord6 mr-2" />
          <span className="inline-block">Address</span>
        </h3>
        <address className="mt-2 text-lg text-center text-nord6 not-italic">
          16 Ground Floor Dhammaryone St
          <br />
          Mingalar Taung Nyunt Tsp
          <br />
          Yangon, Myanmar 11221
        </address>
      </div>
    </div>
  );
};

export default Contact;
