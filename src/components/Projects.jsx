// c:\Users\Admin\Documents\Project\portofolio\src\components\Projects.jsx
import React, { useState, useEffect, useRef } from "react";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/project3.png";
import project4 from "../assets/img/project4.png";

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
    technologies: ["PHP", "Bootstrap", "MySQL"],
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

const Projects = () => {
  const carouselRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const scrollLeft = () => {
    if (carouselRef.current)
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };
  const scrollRight = () => {
    if (carouselRef.current)
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
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

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#020826]/80 backdrop-blur-md transition-all duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#fffffe] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative flex flex-col md:flex-row overflow-hidden animate-[scale-up_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <style>{`
              @keyframes scale-up {
                0% { transform: scale(0.9); opacity: 0; }
                100% { transform: scale(1); opacity: 1; }
              }
            `}</style>

            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#fffffe]/50 backdrop-blur-md text-[#020826] hover:bg-[#f25042] hover:text-white transition-all duration-300 shadow-sm border border-white/20"
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

            {/* Left Side: Image */}
            <div className="w-full md:w-1/2 bg-[#f9f4ef] relative flex items-center justify-center p-8 md:p-12">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className={`max-h-[40vh] md:max-h-[60vh] w-auto object-contain drop-shadow-2xl ${
                    selectedProject.isMobile
                      ? "rounded-[2rem] border-4 border-[#020826]"
                      : "rounded-lg"
                  }`}
                />
              </div>
              {/* Decorative blob behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8c7851]/10 to-transparent pointer-events-none"></div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col bg-[#fffffe] overflow-y-auto">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#020826] mb-3 leading-tight">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies?.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#8c7851]/10 text-[#8c7851] text-xs font-bold uppercase tracking-wider rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="prose prose-sm text-[#716040] leading-relaxed mb-8">
                  <p>{selectedProject.longDesc}</p>
                </div>

                {/* Gallery Simulation */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-[#020826] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-[#8c7851]"></span>
                    Gallery
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((_, i) => (
                      <div
                        key={i}
                        className="aspect-video rounded-lg overflow-hidden bg-[#eaddcf] border border-[#eaddcf]/50 cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        <img
                          src={selectedProject.img}
                          alt="Gallery"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-[#eaddcf]/30 flex gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-[#020826] text-[#fffffe] font-bold rounded-xl hover:bg-[#8c7851] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                >
                  <span>Visit Project</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
