// c:\Users\Admin\Documents\Project\portofolio\src\components\Experience.jsx
import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-[#020826] mb-16 text-center">
        <span className="text-gradient">Experience</span>
      </h2>
      <div className="relative border-l border-[#8c7851]/30 ml-4 md:ml-6 space-y-12">
        {/* Experience Item 1 */}
        <div className="relative pl-8 md:pl-12">
          <div className="absolute -left-1.25 top-2 w-3 h-3 rounded-full bg-[#8c7851] ring-4 ring-[#f9f4ef]"></div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl md:text-2xl font-bold text-[#020826]">
              Admin Operations Support
            </h3>
            <span className="text-[#8c7851] font-mono text-sm md:text-base bg-[#8c7851]/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
              Oct 2025 - Apr 2026
            </span>
          </div>
          <h4 className="text-lg md:text-xl font-semibold text-[#716040] mb-4">
            Plebo, South Jakarta
          </h4>
          <p className="text-[#716040] text-base md:text-lg leading-relaxed mb-4">
            Providing comprehensive operational support to ensure seamless
            business workflows and data integrity. Collaborating with technical
            teams to optimize internal systems and improve daily administrative
            efficiency
          </p>
          <ul className="space-y-2 text-[#716040] text-sm md:text-base">
            <li className="flex items-start gap-2">
              <span className="text-[#8c7851] mt-1">▹</span>
              <span>
                Assisted in maintaining web-based internal tools and databases,
                reducing manual data entry errors.
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
                Executed diverse administrative tasks such as invoicing,
                scheduling, data reporting, and stakeholder communication,
                maintaining highly organized operational documentation
              </span>
            </li>
          </ul>
        </div>

        {/* Experience Item 2 */}
        <div className="relative pl-8 md:pl-12">
          <div className="absolute -left-1.25 top-2 w-3 h-3 rounded-full bg-[#8c7851] ring-4 ring-[#f9f4ef]"></div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl md:text-2xl font-bold text-[#020826]">
              Freelance Web Developer
            </h3>
            <span className="text-[#8c7851] font-mono text-sm md:text-base bg-[#8c7851]/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
              Jun 2024 - Present
            </span>
          </div>
          <h4 className="text-lg md:text-xl font-semibold text-[#716040] mb-4">
            Independent
          </h4>
          <p className="text-[#716040] text-base md:text-lg leading-relaxed mb-4">
            Designed and developed responsive, high-converting landing pages for
            local UMKM to establish their digital presence, increase visibility,
            and drive customer engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
