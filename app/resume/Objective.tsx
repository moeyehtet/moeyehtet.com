import React from "react";
import profilePic from "../../public/Profile_Sq.png";
import Image from "next/image";

const Objective = () => {
    return (
        <div>
            <Image
                className="mx-auto rounded-full"
                src={profilePic}
                alt="Profile Picture of Moe Ye Htet"
                width={150}
                height={150}
            />
            <h1 className="mt-5 block text-4xl text-center font-bold text-nord6 sm:text-3xl tracking-widest">
                MOE YE HTET
            </h1>
            <p className="mt-4 block text-2xl text-center text-nord6 tracking-widest">
                ELECTRICAL ENGINEER
            </p>
            <p className="mt-4 block text-md text-center text-nord6">
                M.Sc. Automotive Software Engineering candidate with background
                in Electrical Engineering, combining hardware-level expertise
                with advanced software development skills. Dedicated to
                delivering robust, scalable and innovative software solutions
                for next-generation vehicle systems in the German automotive
                industry.
            </p>
        </div>
    );
};

export default Objective;
