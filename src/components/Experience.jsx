// c:\Users\Admin\Documents\Project\portofolio\src\components\Experience.jsx
import React from "react";

const experiences = [
  {
    id: 1,
    role: "Admin Operations Support",
    date: "Oct 2025 - Apr 2026",
    company: "Plebo, South Jakarta",
    description:
      "Providing comprehensive operational support to ensure seamless business workflows and data integrity. Collaborating with technical teams to optimize internal systems and improve daily administrative efficiency",
    points: [
      "Assisted in maintaining web-based internal tools and databases, reducing manual data entry errors.",
      "Provided technical support for operational software, troubleshooting issues to maintain seamless day-to-day business activities.",
      "Executed diverse administrative tasks such as invoicing, scheduling, data reporting, and stakeholder communication, maintaining highly organized operational documentation",
    ],
  },
  {
    id: 2,
    role: "Freelance Web Developer",
    date: "Jun 2024 - Present",
    company: "Independent",
    description:
      "Designed and developed responsive, high-converting landing pages for local UMKM to establish their digital presence, increase visibility, and drive customer engagement.",
    points: [],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-[#020826] mb-16 text-center">
        <span className="text-gradient">Experience</span>
      </h2>
      <div className="relative border-l border-[#8c7851]/30 ml-4 md:ml-6 space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-12">
            <div className="absolute -left-1.25 top-2 w-3 h-3 rounded-full bg-[#8c7851] ring-4 ring-[#f9f4ef]"></div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl md:text-2xl font-bold text-[#020826]">
                {exp.role}
              </h3>
              <span className="text-[#8c7851] font-mono text-sm md:text-base bg-[#8c7851]/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                {exp.date}
              </span>
            </div>
            <h4 className="text-lg md:text-xl font-semibold text-[#716040] mb-4">
              {exp.company}
            </h4>
            <p className="text-[#716040] text-base md:text-lg leading-relaxed mb-4">
              {exp.description}
            </p>
            {exp.points.length > 0 && (
              <ul className="space-y-2 text-[#716040] text-sm md:text-base">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#8c7851] mt-1">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
