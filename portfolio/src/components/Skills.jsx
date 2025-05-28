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
  //   SiVisualstudiocode,
  //   SiVisualstudio,
} from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava className="text-orange-600" /> },
  // C# - Using a text representation since SiCsharp might not exist
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
  //   { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800 dark:text-white" />,
  },
  // RStudio - Using R icon as fallback since SiRstudio might not exist
  {
    name: "RStudio",
    icon: <FaRProject className="text-blue-700" />,
  },
  //   {
  //     name: "Visual Studio",
  //     icon: <SiVisualstudio className="text-purple-600" />,
  //   },
];

const Skills = () => {
  return (
    <section className="bg-white dark:bg-[#0e0e0e] text-black dark:text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-[45px]">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 lg:mb-16">
            Skills & Technologies
          </h2>
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
