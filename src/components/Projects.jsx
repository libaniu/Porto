import React, { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    img: "/projects/ruang-nadi/cover.png",
    title: "Ruang Nadi Coffee",
    desc: "Web dinamis operasional kedai kopi, Menghadirkan display menu digital yang modern dan fitur pemesanan langsung.",
    longDesc:
      "Ruang Nadi Coffee adalah platform digital yang dirancang untuk menampilkan katalog menu interaktif, informasi lokasi, dan integrasi pemesanan sederhana. Desainnya responsif dan dioptimalkan untuk kecepatan muat yang cepat.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "Midtrans Payment Gateway",
    ],
    link: "https://ruang-nadi-web.vercel.app/",
    isMobile: false,
    gallery: [
      "/projects/ruang-nadi/1.png",
      "/projects/ruang-nadi/2.png",
      "/projects/ruang-nadi/3.png",
      "/projects/ruang-nadi/4.png",
      "/projects/ruang-nadi/5.png",
      "/projects/ruang-nadi/6.png",
    ],
  },
  {
    id: 2,
    img: "/projects/myllet/cover.png",
    title: "Myllet Finance",
    desc: "Aplikasi manajemen keuangan pribadi untuk mencatat pemasukan dan pengeluaran.",
    longDesc:
      "Myllet Finance membantu pengguna melacak kesehatan finansial mereka. Fiturnya meliputi pencatatan transaksi harian, visualisasi grafik pengeluaran, penetapan anggaran bulanan, serta integrasi Gemini AI untuk memberikan saran cerdas berdasarkan data keuangan pengguna. Aplikasi ini didesain mobile-first untuk kemudahan akses di mana saja.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Chart.js",
      "Supabase",
      "Gemini AI",
    ],
    link: "https://wallet-bice-beta.vercel.app/",
    isMobile: true,
    gallery: [
      "/projects/myllet/1.png",
      "/projects/myllet/2.png",
      "/projects/myllet/3.png",
      "/projects/myllet/4.png",
    ],
  },
  {
    id: 3,
    img: "/projects/booking/cover.png",
    title: "Booking Futsal AWK",
    desc: "Sistem reservasi lapangan futsal berbasis web untuk kemudahan pengecekan jadwal.",
    longDesc:
      "Sistem ini mempermudah penyewaan lapangan futsal dengan fitur cek jadwal real-time, booking online, dan manajemen member. Admin dapat mengelola jadwal dan pembayaran melalui dashboard khusus.",
    technologies: ["PHP", "Bootstrap", "MySQL", "Midtrans Payment Gateway"],
    link: "https://libaniu.rf.gd/index.php",
    isMobile: false,
    gallery: [
      "/projects/booking/1.png",
      "/projects/booking/2.png",
      "/projects/booking/3.png",
      "/projects/booking/4.png",
      "/projects/booking/5.png",
      "/projects/booking/6.png",
    ],
  },
];

const Projects = () => {
  const carouselRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

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
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector(".snap-center");
      if (card) {
        // Scroll by the width of one card + its gap (approx)
        const scrollAmount = card.offsetWidth + 24; // 24px is gap-6
        carouselRef.current.scrollBy({
          left: direction * scrollAmount,
          behavior: "smooth",
        });
      }
    }
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
              onClick={() => scrollCarousel(-1)}
              className="p-3 rounded-full border border-[#020826]/10 hover:border-[#8c7851] text-[#716040] hover:text-[#fffffe] hover:bg-[#8c7851] transition-all"
              aria-label="Scroll projects left"
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
              onClick={() => scrollCarousel(1)}
              className="p-3 rounded-full border border-[#020826]/10 hover:border-[#8c7851] text-[#716040] hover:text-[#fffffe] hover:bg-[#8c7851] transition-all"
              aria-label="Scroll projects right"
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
            <button
              key={project.uniqueId}
              onClick={() => {
                setSelectedProject(project);
                setActiveImage(project.img);
              }}
              aria-label={`View details for ${project.title}`}
              className="snap-center shrink-0 w-[85%] md:w-[45%] lg:w-87.5 glass-card rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[#8c7851]/10 transition-all duration-300 group cursor-pointer text-left"
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
                      loading="lazy"
                      className="h-full w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    />
                  </div>
                ) : (
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
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
            </button>
          ))}
        </div>
      </div>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 bg-[#020826]/80 backdrop-blur-md transition-all duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#fffffe] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative flex flex-col md:flex-row overflow-hidden animate-[scale-up_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
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
                  src={activeImage || selectedProject.img}
                  alt={selectedProject.title}
                  className={`max-h-[40vh] md:max-h-[60vh] w-auto object-contain drop-shadow-2xl ${
                    selectedProject.isMobile
                      ? "rounded-4xl border-4 border-[#020826]"
                      : "rounded-lg"
                  }`}
                />
              </div>
              {/* Decorative blob behind image */}
              <div className="absolute inset-0 bg-linear-to-br from-[#8c7851]/10 to-transparent pointer-events-none"></div>
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
                    <span className="w-8 h-0.5 bg-[#8c7851]"></span>
                    Gallery
                  </h4>
                  <div className="flex overflow-x-auto gap-3 pb-2 hide-scrollbar snap-x snap-mandatory">
                    {(
                      selectedProject.gallery || [
                        selectedProject.img,
                        selectedProject.img,
                        selectedProject.img,
                      ]
                    ).map((galleryImg, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`View image ${i + 1} of ${selectedProject.gallery.length}`}
                        onClick={() => setActiveImage(galleryImg)}
                        className={`shrink-0 w-24 sm:w-32 snap-start ${
                          selectedProject.isMobile
                            ? "aspect-9/16"
                            : "aspect-video"
                        } rounded-lg overflow-hidden bg-[#eaddcf] border ${
                          activeImage === galleryImg
                            ? "border-[#8c7851] ring-2 ring-[#8c7851]/50"
                            : "border-[#eaddcf]/50"
                        } cursor-pointer hover:opacity-80 transition-all flex items-center justify-center`}
                      >
                        <img
                          src={galleryImg}
                          alt={`Gallery ${i + 1}`}
                          className={`w-full h-full ${
                            selectedProject.isMobile
                              ? "object-contain py-2"
                              : "object-cover"
                          }`}
                          loading="lazy"
                        />
                      </button>
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
