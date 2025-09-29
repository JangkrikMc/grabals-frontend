import React from "react";
import { FaLightbulb, FaUsers, FaRocket } from "react-icons/fa";

const CommunityBenefits = ({ refs }) => {
  const { Elemen7, Elemen8, Elemen9, Elemen10 } = refs;

  return (
    <div ref={Elemen7} id="community" className="w-full py-20 px-8 text-center backdrop-blur-sm">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8 glow-bg" style={{ fontFamily: "Inter, sans-serif" }}>
        Kenapa Bergabung?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div ref={Elemen8} className="bg-white/5 border border-white/20 rounded-2xl p-5 flex flex-col items-center shadow-md hover:scale-[1.02] transition">
          <FaLightbulb className="text-3xl text-amber-400 mb-2" />
          <h3 className="text-md font-semibold text-neutral-200 mb-1">Belajar & Eksperimen</h3>
          <p className="text-gray-400 text-xs text-center">Kuasai teknologi baru dengan proyek nyata dan diskusi interaktif.</p>
        </div>

        <div ref={Elemen9} className="bg-white/5 border border-white/20 rounded-2xl p-5 flex flex-col items-center shadow-md hover:scale-[1.02] transition">
          <FaUsers className="text-3xl text-emerald-400 mb-2" />
          <h3 className="text-md font-semibold text-neutral-200 mb-1">Networking</h3>
          <p className="text-gray-400 text-xs text-center">Bangun koneksi dengan developer, designer, dan kreator lain yang suportif.</p>
        </div>

        <div ref={Elemen10} className="bg-white/5 border border-white/20 rounded-2xl p-5 flex flex-col items-center shadow-md hover:scale-[1.02] transition">
          <FaRocket className="text-3xl text-rose-400 mb-2" />
          <h3 className="text-md font-semibold text-neutral-200 mb-1">Proyek Nyata</h3>
          <p className="text-gray-400 text-xs text-center">Terlibat di proyek komunitas yang menantang dan inovatif.</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityBenefits;