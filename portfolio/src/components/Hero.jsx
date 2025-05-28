import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  return (
    <section className="h-screen bg-white dark:bg-[#0e0e0e] text-black dark:text-white flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-[45px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
              Hi, I'm
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mt-2">
              Harshana Karunarathne.
            </h1>
            <p className="mt-6 text-gray-500 dark:text-gray-400 text-lg sm:text-xl">
              Nice to meet you.
            </p>
          </div>

          <div className="mt-16 lg:mt-0 hidden lg:block">
            <ScrollIndicator />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-6 mt-16 lg:mt-20 justify-center lg:justify-center">
          <IconCircle icon={<FaGithub />} link="https://github.com/Harshana2" />
          <IconCircle
            icon={<FaLinkedin />}
            link="https://www.linkedin.com/in/harshana-karunarathne2/"
          />
          <IconCircle
            icon={<FaFacebook />}
            link="https://web.facebook.com/harshana.karunaratna"
          />
        </div>
      </div>
    </section>
  );
};

const IconCircle = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border border-gray-600 hover:border-white dark:hover:border-white transition duration-300 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl hover:bg-gray-100 dark:hover:bg-gray-800"
  >
    {icon}
  </a>
);

export default Hero;
