import React from "react";
import { FaLightbulb, FaUsers, FaRocket, FaLaptopCode, FaHandshake, FaBriefcase, FaGraduationCap } from "react-icons/fa";

const CommunityBenefits = ({ refs }) => {
  const { Elemen7, Elemen8, Elemen9, Elemen10, Elemen13, Elemen14, Elemen15 } = refs;

  return (
    <div ref={Elemen7} id="community" className="w-full py-16 md:py-24 px-6 md:px-8 text-center backdrop-blur-sm">
      <h2 className="text-2xl md:text-3xl font-semibold text-lavender-web mb-8 md:mb-12 glow-bg" style={{ fontFamily: "Inter, sans-serif" }}>
        Kenapa Bergabung?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        <div ref={Elemen8} className="bg-white/5 border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col items-center shadow-md hover:scale-[1.02] transition h-full">
          <FaLightbulb className="text-3xl md:text-4xl text-ecru mb-4" />
          <h3 className="text-lg md:text-xl font-semibold text-lavender-web mb-3">Belajar & Eksperimen</h3>
          <p className="text-gray-400 text-sm md:text-base text-center">
            Kuasai teknologi baru dengan proyek nyata dan diskusi interaktif bersama komunitas yang suportif.
          </p>
        </div>

        <div ref={Elemen9} className="bg-white/5 border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col items-center shadow-md hover:scale-[1.02] transition h-full">
          <FaUsers className="text-3xl md:text-4xl text-eggplant mb-4" />
          <h3 className="text-lg md:text-xl font-semibold text-lavender-web mb-3">Networking</h3>
          <p className="text-gray-400 text-sm md:text-base text-center">
            Bangun koneksi dengan developer, designer, dan kreator lain yang suportif dan berbagi visi yang sama.
          </p>
        </div>

        <div ref={Elemen10} className="bg-white/5 border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col items-center shadow-md hover:scale-[1.02] transition h-full">
          <FaRocket className="text-3xl md:text-4xl text-rose-quartz mb-4" />
          <h3 className="text-lg md:text-xl font-semibold text-lavender-web mb-3">Proyek Nyata</h3>
          <p className="text-gray-400 text-sm md:text-base text-center">
            Terlibat di proyek komunitas yang menantang dan inovatif untuk mengembangkan portofolio Anda.
          </p>
        </div>

        <div ref={Elemen13} className="bg-white/5 border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col items-center shadow-md hover:scale-[1.02] transition h-full">
          <FaGraduationCap className="text-3xl md:text-4xl text-ecru mb-4" />
          <h3 className="text-lg md:text-xl font-semibold text-lavender-web mb-3">Workshop & Mentoring</h3>
          <p className="text-gray-400 text-sm md:text-base text-center">
            Dapatkan akses ke workshop eksklusif dan mentoring dari profesional berpengalaman di industri.
          </p>
        </div>

        <div ref={Elemen14} className="bg-white/5 border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col items-center shadow-md hover:scale-[1.02] transition h-full">
          <FaBriefcase className="text-3xl md:text-4xl text-eggplant mb-4" />
          <h3 className="text-lg md:text-xl font-semibold text-lavender-web mb-3">Peluang Karir</h3>
          <p className="text-gray-400 text-sm md:text-base text-center">
            Akses peluang kerja, magang, dan proyek freelance melalui jaringan komunitas yang luas.
          </p>
        </div>

        <div ref={Elemen15} className="bg-white/5 border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col items-center shadow-md hover:scale-[1.02] transition h-full">
          <FaHandshake className="text-3xl md:text-4xl text-rose-quartz mb-4" />
          <h3 className="text-lg md:text-xl font-semibold text-lavender-web mb-3">Kolaborasi</h3>
          <p className="text-gray-400 text-sm md:text-base text-center">
            Temukan partner untuk proyek baru dan bangun tim untuk mengembangkan ide-ide inovatif bersama.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityBenefits;