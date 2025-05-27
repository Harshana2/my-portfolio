import React, { useState, useEffect } from "react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import Logo from "../assets/logo.png";

const NavBar = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <div className="h-16 w-full bg-white dark:bg-[#0e0e0e] text-black dark:text-white pt-1.5 shadow-md">
      <div className="max-w-7xl mx-auto px-45 h-full flex justify-between items-center">
        <img
          src={Logo}
          alt="Logo"
          className="h-40 w-40 transition-all dark:invert "
        />
        <button
          onClick={toggleDarkMode}
          className="text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {isDark ? <RiSunLine /> : <RiMoonLine />}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
