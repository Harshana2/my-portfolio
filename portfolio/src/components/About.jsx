import React from "react";
import myPhoto from "../assets/me.png";

const About = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Side */}
      <div className="w-1/2 bg-[#0f0f0f] text-white px-16 flex flex-col justify-center">
        <h4 className="text-lg mb-2">Hello, I am</h4>
        <h1 className="text-5xl font-bold mb-4">Harshana Karunarathne</h1>
        <p className="text-gray-400 mb-8 max-w-md">
          I'm a passionate Full-Stack Engineer who loves turning ideas into
          meaningful digital experiences. I enjoy solving complex problems,
          building intuitive solutions, and continuously growing through new
          challenges. My goal is to create impactful technology that makes a
          difference.
        </p>
        <div className="flex space-x-4">
          <a
            href="/HarshanaCV.pdf"
            download
            className="border border-purple-500 text-white px-6 py-2 rounded hover:bg-purple-500 transition inline-block"
          >
            Download CV
          </a>

          <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-lg">
            ▶
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-gradient-to-b from-purple-600 to-purple-900 flex items-center justify-center relative">
        <img
          src={myPhoto}
          alt="Photographer"
          className="h-[80%] object-contain rounded-full -mt-20"
        />
      </div>
    </div>
  );
};

export default About;
