// c:\Users\Admin\Documents\Project\portofolio\src\components\Navbar.jsx
import React, { useState, useEffect, useRef } from "react";

const Navbar = ({ activeSection, isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (!isScrolled) setIsOpen(false);
  }, [isScrolled]);

  return (
    <nav
      ref={navRef}
      className={`fixed z-50 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 ${
        isScrolled
          ? "top-4 w-[90%] md:w-[70%] lg:w-[60%] rounded-full glass-nav py-3"
          : "top-0 w-full py-6 bg-[#f9f4ef]/90 backdrop-blur-md border-b border-[#eaddcf]/40"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-[#020826]">
          Fahmi Nabil<span className="text-[#8c7851]">.</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-l font-medium text-[#716040]">
          {["Home", "Experience", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`hover:text-[#8c7851] transition-colors ${
                  activeSection === item.toLowerCase()
                    ? "text-[#8c7851] font-semibold"
                    : ""
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#020826]"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full mt-2 rounded-2xl bg-[#f9f4ef]/95 backdrop-blur-xl border border-[#eaddcf] shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-6 gap-4 text-center">
          {["Home", "Experience", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`block py-2 ${
                  activeSection === item.toLowerCase()
                    ? "text-[#8c7851] font-semibold"
                    : "text-[#716040]"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
