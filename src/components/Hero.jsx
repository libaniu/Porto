// c:\Users\Admin\Documents\Project\portofolio\src\components\Hero.jsx
import React, { useState, useEffect } from "react";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/javascript.png";
import reactLogo from "../assets/img/react.png";
import tailwind from "../assets/img/tailwind.png";
import nextjs from "../assets/img/nextjs.png";

const techs = [
  { id: 1, src: html, title: "HTML" },
  { id: 2, src: css, title: "CSS" },
  { id: 3, src: javascript, title: "JavaScript" },
  { id: 4, src: tailwind, title: "Tailwind CSS" },
  { id: 5, src: reactLogo, title: "React" },
  { id: 6, src: nextjs, title: "Next.js" },
];

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Junior Web Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setIndex(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-6 relative pt-20"
    >
      <div className="text-center space-y-6 max-w-4xl z-10">
        <div className="inline-block px-4 py-1.5 rounded-full border border-[#8c7851]/30 bg-[#8c7851]/10 text-[#8c7851] text-sm font-medium mb-4 animate-fade-in-up">
          👋 Welcome to my portfolio
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-[#020826] tracking-tight leading-tight">
          Hi, I'm <span className="text-[#8c7851]">Fahmi Nabil.</span>
          <br />
          <span className="text-gradient">{text}</span>
          <span className="animate-pulse text-[#f25042]">|</span>
        </h1>

        <p className="text-[#716040] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Specializing in building exceptional digital experiences. Currently
          focused on mastering the
          <span className="text-[#8c7851] font-semibold">
            {" "}
            React ecosystem
          </span>{" "}
          to build accessible, human-centered products.
        </p>

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
            className="px-8 py-3.5 border-2 border-[#8c7851] text-[#8c7851] hover:bg-[#8c7851] hover:text-[#fffffe] font-medium rounded-full transition-all"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* INFINITE TECH STACK MARQUEE */}
      <div className="w-full max-w-5xl mx-auto mt-12 overflow-hidden border-y border-[#eaddcf] bg-[#eaddcf]/30 py-6">
        <div className="w-full inline-flex flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee">
            {[...techs, ...techs, ...techs].map((tech, idx) => (
              <li key={idx} className="flex items-center gap-2 group">
                <img
                  src={tech.src}
                  alt={tech.title}
                  className="h-10 w-auto object-contain transition-all duration-300 grayscale group-hover:grayscale-0"
                />
                <span className="text-[#716040] font-medium group-hover:text-[#020826] transition-colors">
                  {tech.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
