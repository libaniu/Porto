// c:\Users\Admin\Documents\Project\portofolio\src\components\Hero.jsx
import React, { useState, useEffect } from "react";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/javascript.png";
import reactLogo from "../assets/img/react.png";
import tailwind from "../assets/img/tailwind.png";
import nextjs from "../assets/img/nextjs.png";
import excel from "../assets/img/excel.png";
import sheets from "../assets/img/sheets.png";

const techs = [
  { id: 1, src: html, title: "HTML" },
  { id: 2, src: css, title: "CSS" },
  { id: 3, src: javascript, title: "JavaScript" },
  { id: 4, src: tailwind, title: "Tailwind CSS" },
  { id: 5, src: reactLogo, title: "React" },
  { id: 6, src: nextjs, title: "Next.js" },
  { id: 7, src: excel, title: "Excel" },
  { id: 8, src: sheets, title: "Google Sheets" },
];

const rolesToAnimate = [
  "Junior Web Developer",
  "IT Support",
  "Administrative Staff",
];
const TYPING_SPEED = 60;
const DELETING_SPEED = 30;
const PAUSE_DURATION = 1500;

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = rolesToAnimate[roleIndex];
    let timeout;

    if (isDeleting) {
      // Deleting logic
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
        }, DELETING_SPEED);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % rolesToAnimate.length);
      }
    } else {
      // Typing logic
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => {
          setText((prev) => currentRole.slice(0, prev.length + 1));
        }, TYPING_SPEED);
      } else {
        // Pause at the end of typing
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_DURATION);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-6 relative pt-26 md:pt-20"
    >
      <div className="text-center space-y-8 md:space-y-6 max-w-4xl z-10">
        <div className="inline-block px-4 py-1.5 rounded-full border border-[#8c7851]/30 bg-[#8c7851]/10 text-[#8c7851] text-sm font-medium mb-4 animate-fade-in-up">
          👋 Welcome to my portfolio
        </div>

      <div className="space-y-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#020826] tracking-tight leading-tight">
          Hi, I'm <span className="text-[#8c7851]">Fahmi Nabil.</span>
          <br />
          <span className="whitespace-nowrap text-3xl sm:text-5xl md:text-7xl">
            <span className="text-gradient">{text}</span>
            <span className="animate-pulse text-[#f25042]">|</span>
          </span>
        </h1>

        <p className="text-[#716040] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Detail-oriented professional blending IT expertise with administrative
          efficiency. I specialize in building web solutions, managing internal
          tools, and streamlining daily operational workflows to support
          seamless business activities.
        </p>
      </div>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="px-8 py-3.5 bg-[#8c7851] hover:bg-[#7a6845] text-[#fffffe] font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-[#8c7851]/30"
          >
            View Work
          </a>
          <a
            href="/cv.pdf"
            download
            aria-label="Download CV Fahmi Nabil"
            className="px-8 py-3.5 border-2 border-[#8c7851] text-[#8c7851] hover:bg-[#8c7851] hover:text-[#fffffe] font-medium rounded-full transition-all"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* INFINITE TECH STACK MARQUEE */}
      <div className="w-full max-w-5xl mx-auto mt-8 md:mt-8 overflow-hidden border border-[#eaddcf] rounded-2xl bg-[#eaddcf]/30 py-4">
        <div className="w-full inline-flex flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee">
            {/* Set asli: dibaca oleh screen reader secara normal */}
            {techs.map((tech) => (
              <li key={tech.id} className="flex items-center gap-2 group">
                <img
                  src={tech.src}
                  alt={tech.title}
                  loading="eager"
                  className="h-8 md:h-9 w-auto object-contain transition-all duration-300 grayscale group-hover:grayscale-0"
                />
                <span className="text-[#716040] font-medium group-hover:text-[#020826] transition-colors">
                  {tech.title}
                </span>
              </li>
            ))}

            {/* Set duplikat: disembunyikan dari screen reader agar tidak dibaca berulang */}
            {[1, 2].map((iteration) =>
              techs.map((tech) => (
                <li
                  key={`dup-${iteration}-${tech.id}`}
                  aria-hidden="true"
                  className="flex items-center gap-2 group"
                >
                  <img
                    src={tech.src}
                    alt=""
                    loading="lazy"
                    className="h-8 md:h-9 w-auto object-contain transition-all duration-300 grayscale group-hover:grayscale-0"
                  />
                  <span className="text-[#716040] font-medium group-hover:text-[#020826] transition-colors">
                    {tech.title}
                  </span>
                </li>
              )),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
