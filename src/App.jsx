// c:\Users\Admin\Documents\Project\portofolio\src\App.jsx
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsScrolled(scrolled > 50);
      setShowBackToTop(scrolled > 500);

      const sections = [
        "home",
        "services",
        "experience",
        "projects",
        "contact",
      ];
      const scrollPosition = scrolled + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }

      // Parallax Effect for Blobs
      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translateY(${scrolled * 0.2}px)`;
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
      if (blob3Ref.current) {
        blob3Ref.current.style.transform = `translateY(${scrolled * 0.1}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Menggunakan class semantic dari tailwind.config.js (bg-background, text-primary, dll)
    <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-surface overflow-x-hidden relative">
      {/* Global Styles dipindahkan ke index.css, sisa style spesifik di sini */}
      <style>{`
        html { scroll-behavior: smooth; }
        
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* Glassmorphism menggunakan variable warna CSS atau hardcoded rgba untuk transparansi */
        .glass-nav {
          background: rgba(255, 255, 254, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
        }

        .glass-card {
          background: #fffffe; 
          border: 1px solid rgba(140, 120, 81, 0.1); 
          box-shadow: 0 4px 20px rgba(2, 8, 38, 0.05);
        }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        
        .text-gradient {
          background: linear-gradient(to right, #8c7851, #f25042);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* BACKGROUND BLOBS - Menggunakan warna dari config */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div ref={blob1Ref} className="absolute top-0 left-1/4">
          <div className="w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob"></div>
        </div>
        <div ref={blob2Ref} className="absolute top-0 right-1/4">
          <div className="w-96 h-96 bg-error/15 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob animation-delay-2000"></div>
        </div>
        <div ref={blob3Ref} className="absolute -bottom-32 left-1/3">
          <div className="w-96 h-96 bg-line rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <Navbar activeSection={activeSection} isScrolled={isScrolled} />
      <Hero />
      <Services />
      <Experience />
      <Projects />
      <Contact />

      {/* Back To Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 p-3 bg-accent text-surface rounded-full shadow-lg shadow-accent/40 hover:bg-primary transition-all duration-300 ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default App;
