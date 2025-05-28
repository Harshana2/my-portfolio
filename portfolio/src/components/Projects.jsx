import React from "react";

const projects = [
  {
    title: "Uplift Fitness Tracking Website",
    github: "https://github.com/Harshana2/uplift-backend",
    description:
      "A full-featured fitness management platform was developed to enhance interaction between members and coaches while simplifying administrative operations. This system includes separate dashboards for admins, coaches, and members.",
    technologies: ["ReactJS", "TailwindCSS", "Spring Boot", "MongoDB", "JWT"],
    index: "01",
  },
  {
    title: "Bank Management System",
    github: "https://github.com/Harshana2/Bank-Management-System",
    description:
      "A basic bank management system was developed to demonstrate core object-oriented programming (OOP) principles. The application features a simple graphical user interface and supports account management.",
    technologies: ["Java"],
    index: "02",
  },
  {
    title: "TaskMate",
    github: "https://github.com/Harshana2/taskmate",
    description:
      "A task management application was developed to streamline task organization and tracking. The system includes full CRUD functionality for creating, updating, deleting, and retrieving tasks.",
    technologies: ["C#", "MySQL"],
    index: "03",
  },
  {
    title: "Toyota Clone",
    github: "https://github.com/Harshana2/Toyota-clone",
    description:
      "A RESTful API backend was developed to support scalable and efficient data handling for web applications. The system offers complete CRUD operations and is designed for seamless integration.",
    technologies: ["Spring Boot", "MySQL"],
    index: "04",
  },
];

const Projects = () => {
  return (
    <section className="bg-white dark:bg-[#0e0e0e] text-black dark:text-white py-16 px-6 sm:px-12 lg:px-[45px] max-w-7xl mx-auto">
      <div className="relative mb-16">
        <h2 className="text-6xl font-bold">Works</h2>
        <div className="absolute -bottom-5 left-0 w-full h-px bg-gray-300 dark:bg-gray-700"></div>
      </div>

      <div className="space-y-16">
        {projects.map((project, idx) => (
          <div key={idx} className="group">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 pb-6 border-b border-gray-300 dark:border-gray-700">
              <div className="text-gray-500 dark:text-gray-400 text-lg font-medium w-12 flex-shrink-0">
                /{project.index}
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      GitHub
                    </a>
                  )}
                </div>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
