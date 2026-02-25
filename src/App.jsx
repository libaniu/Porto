import React, { useState, useEffect, useRef } from "react";
import html from "./assets/img/html.png";
import css from "./assets/img/css.png";
import javascript from "./assets/img/javascript.png";
import reactLogo from "./assets/img/react.png";
import tailwind from "./assets/img/tailwind.png";
import nextjs from "./assets/img/nextjs.png";
import project1 from "./assets/img/project1.png";
import project2 from "./assets/img/project2.png";
import project3 from "./assets/img/project3.png";
import project4 from "./assets/img/project4.png";

// --- DATA ---
const techs = [
  { id: 1, src: html, title: "HTML" },
  { id: 2, src: css, title: "CSS" },
  { id: 3, src: javascript, title: "JavaScript" },
  { id: 4, src: tailwind, title: "Tailwind CSS" },
  { id: 5, src: reactLogo, title: "React" },
  { id: 6, src: nextjs, title: "Next.js" },
];

const services = [
  {
    id: 1,
    title: "Web Development",
    desc: "Membangun website responsif dan performa tinggi menggunakan teknologi modern.",
    icon: "💻",
  },
  {
    id: 2,
    title: "UI Implementation",
    desc: "Mengubah desain menjadi kode yang rapi, pixel-perfect, dan interaktif.",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Web Optimization",
    desc: "Meningkatkan kecepatan dan SEO website untuk pengalaman pengguna terbaik.",
    icon: "🚀",
  },
];

const projects = [
  {
    id: 1,
    img: project1,
    title: "Ruang Nadi Coffee",
    desc: "Landing page modern dan estetik untuk kedai kopi. Menampilkan katalog menu digital dan melakukan pemesanan.",
    longDesc:
      "Ruang Nadi Coffee adalah platform digital yang dirancang untuk meningkatkan kehadiran online kedai kopi. Website ini menampilkan katalog menu interaktif, informasi lokasi, dan integrasi pemesanan sederhana. Desainnya responsif dan dioptimalkan untuk kecepatan muat yang cepat.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://ruang-nadi-web.vercel.app/",
    isMobile: false,
  },
  {
    id: 2,
    img: project2,
    title: "Myllet Finance",
    desc: "Aplikasi manajemen keuangan pribadi untuk mencatat pemasukan dan pengeluaran.",
    longDesc:
      "Myllet Finance membantu pengguna melacak kesehatan finansial mereka. Fitur utamanya meliputi pencatatan transaksi harian, visualisasi grafik pengeluaran, dan penetapan anggaran bulanan. Aplikasi ini didesain mobile-first untuk kemudahan akses di mana saja.",
    technologies: ["Next.js", "TypeScript", "Chart.js", "Supabase"],
    link: "https://wallet-bice-beta.vercel.app/",
    isMobile: true,
  },
  {
    id: 3,
    img: project3,
    title: "Booking Futsal AWK",
    desc: "Sistem reservasi lapangan futsal berbasis web untuk kemudahan pengecekan jadwal.",
    longDesc:
      "Sistem ini mempermudah penyewaan lapangan futsal dengan fitur cek jadwal real-time, booking online, dan manajemen member. Admin dapat mengelola jadwal dan pembayaran melalui dashboard khusus.",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
    link: "#",
    isMobile: false,
  },
  {
    id: 4,
    img: project4,
    title: "Smart Attendance",
    desc: "Sistem absensi berbasis web menggunakan teknologi face recognition.",
    longDesc:
      "Sistem absensi cerdas yang memanfaatkan API pengenalan wajah untuk verifikasi kehadiran karyawan. Dilengkapi dengan fitur geolocation untuk memastikan karyawan absen di lokasi yang ditentukan, serta laporan kehadiran otomatis.",
    technologies: ["Python", "Flask", "OpenCV", "React"],
    link: "https://next-face-attendance.vercel.app/",
    isMobile: false,
  },
];

const App = () => {
  const navRef = useRef(null);
  const carouselRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  const [contactForm, setContactForm] = useState({ name: "", message: "" });
  const [text, setText] = useState("");
  const fullText = "Junior Web Developer";
  const [index, setIndex] = useState(0);

  // Infinite Scroll Logic
  const extendedProjects = [...projects, ...projects, ...projects].map(
    (project, index) => ({
      ...project,
      uniqueId: `${project.id}-${index}`,
    }),
  );

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const singleSetWidth = scrollWidth / 3;
      carouselRef.current.scrollLeft = singleSetWidth;
    }
  }, []);

  const handleInfiniteScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth } = carouselRef.current;
      const singleSetWidth = scrollWidth / 3;

      if (scrollLeft <= 50) {
        carouselRef.current.scrollLeft = singleSetWidth + scrollLeft;
      } else if (scrollLeft >= 2 * singleSetWidth - 50) {
        carouselRef.current.scrollLeft = scrollLeft - singleSetWidth;
      }
    }
  };

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

  const scrollLeft = () => {
    if (carouselRef.current)
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };
  const scrollRight = () => {
    if (carouselRef.current)
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const subject = `Contact from Portfolio: ${contactForm.name}`;
    const body = `Name: ${contactForm.name}%0D%0A%0D%0AMessage:%0D%0A${contactForm.message}`;
    window.location.href = `mailto:fahminabill40@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    // Background Color diubah ke #f9f4ef (Cream/Off-white) dan text ke #020826 (Dark Blue/Black)
    <div className="min-h-screen bg-[#f9f4ef] text-[#020826] font-['Poppins',sans-serif] selection:bg-[#8c7851] selection:text-[#fffffe] overflow-x-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        html { scroll-behavior: smooth; }
        
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* Glassmorphism untuk Light Mode */
        .glass-nav {
          background: rgba(255, 255, 254, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
        }

        .glass-card {
          background: #fffffe; /* Main White */
          border: 1px solid rgba(140, 120, 81, 0.1); /* Highlight color border halus */
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
        
        /* Gradient Text menggunakan warna Highlight (#8c7851) dan Tertiary (#f25042) */
        .text-gradient {
          background: linear-gradient(to right, #8c7851, #f25042);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* BACKGROUND BLOBS (Disesuaikan dengan warna baru) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Blob 1: Highlight Color #8c7851 */}
        <div ref={blob1Ref} className="absolute top-0 left-1/4">
          <div className="w-96 h-96 bg-[#8c7851]/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob"></div>
        </div>
        {/* Blob 2: Tertiary Color #f25042 */}
        <div ref={blob2Ref} className="absolute top-0 right-1/4">
          <div className="w-96 h-96 bg-[#f25042]/15 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob animation-delay-2000"></div>
        </div>
        {/* Blob 3: Secondary Color #eaddcf */}
        <div ref={blob3Ref} className="absolute -bottom-32 left-1/3">
          <div className="w-96 h-96 bg-[#eaddcf] rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav
        ref={navRef}
        className={`fixed z-50 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 ${
          isScrolled
            ? "top-4 w-[90%] md:w-[70%] lg:w-[60%] rounded-full glass-nav py-3"
            : "top-0 w-full py-6 bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-[#020826]">
            Fahmi Nabil<span className="text-[#8c7851]">.</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-l font-medium text-[#716040]">
            {["Home", "Services", "Experience", "Projects", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`hover:text-[#8c7851] transition-colors ${activeSection === item.toLowerCase() ? "text-[#8c7851] font-semibold" : ""}`}
                  >
                    {item}
                  </a>
                </li>
              ),
            )}
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
            {["Home", "Services", "Experience", "Projects", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 ${activeSection === item.toLowerCase() ? "text-[#8c7851] font-semibold" : "text-[#716040]"}`}
                  >
                    {item}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}
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
            {/* Button Primary: Highlight Color */}
            <a
              href="#projects"
              className="px-8 py-3.5 bg-[#8c7851] hover:bg-[#7a6845] text-[#fffffe] font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-[#8c7851]/30"
            >
              View Work
            </a>
            {/* Button Secondary: Outline with Highlight Color */}
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
                  {/* Hapus 'invert' karena background sekarang terang, logo Next.js hitam akan terlihat jelas */}
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

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 mt-16 max-w-5xl mx-auto px-6">
        <div className="text-center mb-18">
          <h2 className="text-3xl md:text-4xl font-bold text-[#020826] mb-4">
            What I <span className="text-gradient">Do</span>
          </h2>
          <p className="text-[#716040]">
            Solusi digital yang saya tawarkan untuk Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-card p-8 rounded-2xl hover:border-[#8c7851]/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-12 h-12 bg-[#8c7851]/10 rounded-lg flex items-center justify-center text-2xl mb-6 text-[#8c7851] group-hover:bg-[#8c7851] group-hover:text-[#fffffe] transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#020826] mb-3">
                {service.title}
              </h3>
              <p className="text-[#716040] text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience  */}
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
              business workflows and data integrity. Collaborating with
              technical teams to optimize internal systems and improve daily
              administrative efficiency
            </p>
            <ul className="space-y-2 text-[#716040] text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#8c7851] mt-1">▹</span>
                <span>
                  Assisted in maintaining web-based internal tools and
                  databases, reducing manual data entry errors by 15%.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8c7851] mt-1">▹</span>
                <span>
                  Provided technical support for operational software,
                  troubleshooting issues to maintain seamless day-to-day
                  business activities.
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

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="py-24 mt-8 relative bg-linear-to-b from-[#eaddcf]/20 to-[#f9f4ef]"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12 ml-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#020826] mb-2">
                Featured <span className="text-gradient">Projects</span>
              </h2>
            </div>

            {/* Buttons */}
            <div className="hidden md:flex gap-3">
              <button
                onClick={scrollLeft}
                className="p-3 rounded-full border border-[#020826]/10 hover:border-[#8c7851] text-[#716040] hover:text-[#fffffe] hover:bg-[#8c7851] transition-all"
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={scrollRight}
                className="p-3 rounded-full border border-[#020826]/10 hover:border-[#8c7851] text-[#716040] hover:text-[#fffffe] hover:bg-[#8c7851] transition-all"
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Cards Container */}
          <div
            ref={carouselRef}
            onScroll={handleInfiniteScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 hide-scrollbar px-2"
          >
            {extendedProjects.map((project) => (
              <div
                key={project.uniqueId}
                onClick={() => setSelectedProject(project)}
                className="snap-center shrink-0 w-[85%] md:w-[45%] lg:w-87.5 glass-card rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[#8c7851]/10 transition-all duration-300 group cursor-pointer"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-video overflow-hidden bg-[#eaddcf]">
                  <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-[#fffffe]/90 backdrop-blur text-xs font-bold text-[#8c7851] rounded-full border border-[#8c7851]/20">
                    {project.isMobile ? "Mobile App" : "Web App"}
                  </div>

                  {project.isMobile ? (
                    <div className="w-full h-full flex items-center justify-center p-4 bg-linear-to-br from-[#eaddcf] to-[#d4c5b0]">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="h-full w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                      />
                    </div>
                  ) : (
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#020826]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-6 py-2 bg-[#fffffe] text-[#020826] font-bold rounded-full hover:scale-105 transition-transform">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#020826] mb-2 group-hover:text-[#8c7851] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#716040] text-sm leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#fffffe] w-full max-w-lg max-h-[70vh] md:max-h-[85vh] overflow-y-auto rounded-2xl p-5 relative shadow-2xl animate-scale-up hide-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#f9f4ef] hover:bg-[#eaddcf] text-[#020826] transition-colors z-10"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative w-full h-40 md:h-56 mb-4 rounded-xl overflow-hidden bg-[#eaddcf]">
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold text-[#020826] mb-2">
              {selectedProject.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.technologies?.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#8c7851]/10 text-[#8c7851] text-sm font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-3 text-[#716040] leading-relaxed mb-6 text-sm">
              <p>{selectedProject.longDesc}</p>
            </div>

            {/* Gallery Simulation */}
            <div className="mb-6">
              <h4 className="text-base font-bold text-[#020826] mb-2">
                Gallery
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-video rounded-lg overflow-hidden bg-[#eaddcf]"
                  >
                    <img
                      src={selectedProject.img}
                      alt="Gallery"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-[#eaddcf]/30">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center px-4 py-2.5 bg-[#8c7851] text-[#fffffe] font-bold rounded-xl hover:bg-[#7a6845] transition-colors text-sm"
              >
                Live Demo
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="flex-1 px-4 py-2.5 border border-[#eaddcf] text-[#716040] font-bold rounded-xl hover:bg-[#f9f4ef] transition-colors text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER - Menggunakan Background Headline (#020826) agar kontras */}
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
            &copy; {new Date().getFullYear()} Fahmi Nabil Khairi. Built with
            React & Tailwind.
          </p>
        </div>
      </footer>

      {/* Back To Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 p-3 bg-[#8c7851] text-[#fffffe] rounded-full shadow-lg shadow-[#8c7851]/40 hover:bg-[#020826] transition-all duration-300 ${showBackToTop ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}
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
