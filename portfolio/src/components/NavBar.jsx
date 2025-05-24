import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="bg-blue-400 h-16 p-4 text-xl text-blue-950">
        <ul className="flex justify-end space-x-6">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
