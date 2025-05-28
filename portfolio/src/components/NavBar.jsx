import React, { useState } from "react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const NavBar = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <div className="h-16 lg:h-20 w-full bg-white dark:bg-[#0e0e0e] text-black dark:text-white shadow-md">
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-45px xl:px-12 2xl:px-[45px]">
        <div className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">
          HK
        </div>
        <button
          onClick={toggleDarkMode}
          className="text-lg sm:text-xl md:text-xl lg:text-2xl p-2 sm:p-2.5 md:p-2.5 lg:p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label="Toggle dark mode"
        >
          {isDark ? <RiSunLine /> : <RiMoonLine />}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
