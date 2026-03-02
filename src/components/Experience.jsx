// c:\Users\Admin\Documents\Project\portofolio\src\components\Experience.jsx
import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-[#020826] mb-16 text-center">
        <span className="text-gradient">Experience</span>
      </h2>
      <div className="relative border-l border-[#8c7851]/30 ml-4 md:ml-6 space-y-12">
        {/* Experience Item 1 */}
        <div className="relative pl-8 md:pl-12">
          <div className="absolute -left-1.25 top-2 w-3 h-3 rounded-full bg-[#8c7851] ring-4 ring-[#f9f4ef]"></div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-[#020826]">
              Admin Operations Support
            </h3>
            <span className="text-[#8c7851] font-mono text-sm bg-[#8c7851]/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
              Nov 2025 - Apr 2026
            </span>
          </div>
          <h4 className="text-lg font-semibold text-[#716040] mb-4">
            Kalayudha Group Indonesia
          </h4>
          <p className="text-[#716040] leading-relaxed mb-4">
            Providing comprehensive operational support to ensure seamless
            business workflows and data integrity. Collaborating with technical
            teams to optimize internal systems and improve daily administrative
            efficiency
          </p>
          <ul className="space-y-2 text-[#716040] text-sm">
            <li className="flex items-start gap-2">
              <span className="text-[#8c7851] mt-1">▹</span>
              <span>
                Assisted in maintaining web-based internal tools and databases,
                reducing manual data entry errors by 15%.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8c7851] mt-1">▹</span>
              <span>
                Provided technical support for operational software,
                troubleshooting issues to maintain seamless day-to-day business
                activities.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8c7851] mt-1">▹</span>
              <span>
                Streamlined administrative processes and operational
                documentation to support the delivery of high-quality software
                services.
              </span>
            </li>
          </ul>
        </div>

        {/* Experience Item 2 */}
        <div className="relative pl-8 md:pl-12">
          <div className="absolute -left-1.25 top-2 w-3 h-3 rounded-full bg-[#8c7851] ring-4 ring-[#f9f4ef]"></div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-[#020826]">
              Freelance Web Developer
            </h3>
            <span className="text-[#8c7851] font-mono text-sm bg-[#8c7851]/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
              Jun 2022 - Dec 2022
            </span>
          </div>
          <h4 className="text-lg font-semibold text-[#716040] mb-4">
            Self Employed
          </h4>
          <p className="text-[#716040] leading-relaxed mb-4">
            Built custom websites for small businesses using HTML, CSS, and
            JavaScript. Managed client requirements and project timelines
            effectively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
