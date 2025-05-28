import React from "react";

const educationList = [
  {
    degree: "B.Sc. in Physical Science",
    institution: "University of Kelaniya, Sri Lanka",
    period: "2022 - 2025",
    details: [
      "Specialized in Computer Science, Statistics, and Pure Mathematics",
      "GPA: 3.75",
      "Dean’s List (2022 | 2023)",
    ],
    index: "01",
  },
  {
    degree: "G.C.E Advanced Level (Physical Science)",
    institution: "Royal College, Colombo",
    period: "2017 - 2020",
    details: ["Z-Score: 1.298"],
    index: "02",
  },
];

const Education = () => {
  return (
    <section className="bg-white dark:bg-[#0e0e0e] text-black dark:text-white py-16 px-6 sm:px-12 lg:px-[45px] max-w-7xl mx-auto">
      <div className="relative mb-16">
        <h2 className="text-6xl font-bold">Education</h2>
        <div className="absolute -bottom-5 left-0 w-full h-px bg-gray-300 dark:bg-gray-700"></div>
      </div>

      <div className="space-y-16">
        {educationList.map((edu, idx) => (
          <div key={idx} className="group">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 pb-6 border-b border-gray-300 dark:border-gray-700">
              <div className="text-gray-500 dark:text-gray-400 text-lg font-medium w-12 flex-shrink-0">
                /{edu.index}
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="text-2xl font-semibold">{edu.degree}</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {edu.period}
                  </span>
                </div>
                <p className="mb-1 text-gray-700 dark:text-gray-300 font-medium">
                  {edu.institution}
                </p>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
