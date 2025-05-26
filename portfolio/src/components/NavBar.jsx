import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="flex h-16 text-xl font-bold">
      {/* Left half - Black (centered logo) */}
      <div className="w-1/2 bg-black text-white flex items-center justify-center">
        <img
          src={logo}
          alt="logo"
          className="w-40 h-40 object-contain rounded-full filter invert"
        />
      </div>

      {/* Right half - Purple (centered nav list) */}
      <div className="w-1/2 bg-purple-700 text-white flex items-center justify-center">
        <ul className="flex space-x-12">
          <li>
            <a href="#about" className="hover:text-gray-300">
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
