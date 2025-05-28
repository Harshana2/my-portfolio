import React from "react";
import { FaArrowRight } from "react-icons/fa";
import myPhoto from "../assets/me.png"; // Ensure the image path is correct

const AboutMe = () => {
  return (
    <section className="h-screen bg-white dark:bg-[#0e0e0e] text-black dark:text-white px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Profile Image */}
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-700 shadow-lg">
          <img
            src={myPhoto}
            alt="Harshana Karunarathne"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I'm a passionate developer with a keen interest in Android and Web
            Development. Currently expanding my knowledge in Data Structures and
            Algorithms, I enjoy crafting seamless user experiences and solving
            complex problems with clean code.
          </p>
          {/* Resume Button */}
          <a
            href="/HarshanaCV.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-medium rounded-full transition duration-300 hover:opacity-90"
          >
            My Resume <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
