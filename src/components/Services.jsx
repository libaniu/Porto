// c:\Users\Admin\Documents\Project\portofolio\src\components\Services.jsx
import React from "react";

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

const Services = () => {
  return (
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
  );
};

export default Services;
