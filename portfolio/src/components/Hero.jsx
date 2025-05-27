import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaBehance,
  FaPlay,
} from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="h-screen  bg-white dark:bg-[#0e0e0e] text-black dark:text-white relative flex flex-col justify-center px-45">
      <div className="text-left">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm</h1>
        <h1 className="text-5xl md:text-7xl font-extrabold mt-2">
          Harshana Karunarathne.
        </h1>
        <p className="mt-4 text-gray-400 text-lg">Nice to meet you.</p>
      </div>

      <div className="flex gap-4 mt-10">
        <IconCircle icon={<FaGithub />} link="https://github.com" />
        <IconCircle icon={<FaLinkedin />} link="https://linkedin.com" />
        <IconCircle icon={<FaXTwitter />} link="#" />
        <IconCircle icon={<FaBehance />} link="#" />
        <IconCircle icon={<FaPlay />} link="#" />
      </div>

      <div className="absolute right-16 bottom-24 hidden md:flex items-center justify-center">
        <div className="text-sm text-white rotate-90">
          <div className="flex flex-col items-center">
            <span className="text-xs tracking-widest">scroll down</span>
            <div className="mt-2 w-6 h-10 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
            </div>
          </div>
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
    className="w-10 h-10 border border-gray-600 hover:border-white rounded-full flex items-center justify-center transition duration-300"
  >
    {icon}
  </a>
);

export default Hero;
