// c:\Users\Admin\Documents\Project\portofolio\src\components\Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [contactForm, setContactForm] = useState({ name: "", message: "" });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const subject = `Contact from Portfolio: ${contactForm.name}`;
    const body = `Name: ${contactForm.name}%0D%0A%0D%0AMessage:%0D%0A${contactForm.message}`;
    window.location.href = `mailto:fahminabill40@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer
      id="contact"
      className="bg-[#232946] text-[#fffffe] relative pt-16 pb-8"
    >
      {/* Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-8 sm:h-12"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#f9f4ef]"
          ></path>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-xl md:text-3xl font-bold mb-3 text-[#fffffe]">
          Let's Work <span className="text-[#8c7851]">Together</span>
        </h2>

        <form
          onSubmit={handleContactSubmit}
          className="max-w-md mx-auto mb-4 space-y-3 mt-5"
        >
          <input
            type="text"
            placeholder="Nama Anda"
            required
            className="w-full px-4 py-2 rounded-lg bg-[#fffffe]/10 border border-[#eaddcf]/20 text-[#fffffe] placeholder-[#eaddcf]/50 focus:outline-none focus:border-[#8c7851] transition-colors text-sm"
            value={contactForm.name}
            onChange={(e) =>
              setContactForm({ ...contactForm, name: e.target.value })
            }
          />
          <textarea
            placeholder="Pesan Anda"
            required
            rows="3"
            className="w-full px-4 py-2 rounded-lg bg-[#fffffe]/10 border border-[#eaddcf]/20 text-[#fffffe] placeholder-[#eaddcf]/50 focus:outline-none focus:border-[#8c7851] transition-colors resize-none text-sm"
            value={contactForm.message}
            onChange={(e) =>
              setContactForm({ ...contactForm, message: e.target.value })
            }
          ></textarea>
          <button
            type="submit"
            className="w-full inline-flex justify-center items-center gap-2 px-6 py-2 bg-[#8c7851] text-[#fffffe] font-bold rounded-lg hover:bg-[#fffffe] hover:text-[#020826] transition-all hover:-translate-y-1 text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Kirim Pesan
          </button>
        </form>

        <div className="flex justify-center gap-6 mb-6 border-t border-[#eaddcf]/10 pt-6 text-sm">
          <a
            href="#"
            className="text-[#eaddcf] hover:text-[#8c7851] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-[#eaddcf] hover:text-[#8c7851] transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-[#eaddcf] hover:text-[#8c7851] transition-colors"
          >
            Instagram
          </a>
        </div>

        <p className="text-[#eaddcf]/50 text-xs">
          &copy; {new Date().getFullYear()} Fahmi Nabil Khairi. Built with React
          & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
