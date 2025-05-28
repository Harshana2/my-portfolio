import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0e0e0e] text-black dark:text-white py-8 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left gap-4">
        {/* Left Section: Name, Socials */}
        <div className="space-y-2">
          <p className="text-base font-medium text-black dark:text-white text-opacity-80">
            &copy; 2025 Harshana Karunarathne
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://github.com/Harshana2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-opacity-70 hover:text-opacity-100"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/harshana-karunarathne2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors text-opacity-70 hover:text-opacity-100"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://web.facebook.com/harshana.karunaratna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-opacity-70 hover:text-opacity-100"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Section: Email & Location */}
        <div className="space-y-1 text-sm">
          <a
            href="mailto:hkarunarathne2000@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-opacity-70"
          >
            hkarunarathne2000@gmail.com
          </a>
          <p className="text-gray-600 dark:text-gray-400 text-opacity-70">
            Gampaha, Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
