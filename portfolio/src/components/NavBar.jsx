import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="bg-yellow-50 h-16 px-6 text-xl text-black font-bold">
      <div className="flex justify-between items-center h-full">
        <img src={logo} alt="Logo" className="w-40 h-auto" />
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-gray-600">
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-600">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
