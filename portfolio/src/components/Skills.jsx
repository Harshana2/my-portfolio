import React from "react";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
  FaRProject,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpringboot,
  SiDotnet,
  SiMysql,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava className="text-orange-600" /> },
  {
    name: "C#",
    icon: <div className="text-purple-600 font-bold text-2xl">C#</div>,
  },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "R", icon: <FaRProject className="text-blue-700" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-700" /> },
  { name: "ReactJS", icon: <FaReact className="text-cyan-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
  { name: ".NET", icon: <SiDotnet className="text-purple-700" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800 dark:text-white" />,
  },
  { name: "RStudio", icon: <FaRProject className="text-blue-700" /> },
];

const Skills = () => {
  return (
    <section className="bg-white dark:bg-[#0e0e0e] text-black dark:text-white py-16 px-6 sm:px-12 lg:px-[45px] max-w-7xl mx-auto">
      <div className="relative mb-16">
        <h2 className="text-6xl font-bold">Technologies</h2>
        <div className="absolute -bottom-5 left-0 w-full h-px bg-gray-300 dark:bg-gray-700"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="text-3xl sm:text-4xl mb-3 flex items-center justify-center h-12">
              {skill.icon}
            </div>
            <p className="text-xs sm:text-sm font-medium text-center leading-tight">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
