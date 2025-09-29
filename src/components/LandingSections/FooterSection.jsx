import React from "react";
import LaserFlow from "../../assets/ReactBitsCompo/LaserFlow";

const FooterSection = ({ refs }) => {
  const { Elemen12 } = refs;

  return (
    <footer ref={Elemen12} className="relative text-gray-300 px-8 py-12 mt-8 border-t border-gray-700 bg-black/20 overflow-hidden">
      {/* Konten Footer */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-4">
          <h3 className="text-white font-bold text-xl" style={{ fontFamily: "Inter, sans-serif" }}>Grabals</h3>
          <p className="text-gray-400 text-lg">
            Komunitas kolaboratif untuk developer, designer, dan tech enthusiast. Belajar dan bangun proyek bersama.
          </p>
        </div>
        
        <div className="flex flex-col space-y-2">
          <h4 className="text-white font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>Quick Links</h4>
          <a href="#hero" className="hover:text-emerald-500 transition">Home</a>
          <a href="#about" className="hover:text-emerald-500 transition">About</a>
          <a href="#community" className="hover:text-emerald-500 transition">Community</a>
          <a href="#contact" className="hover:text-emerald-500 transition">Contact</a>
        </div>

        <div className="flex flex-col space-y-2">
          <h4 className="text-white font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>Social Media</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-emerald-500 transition">Twitter</a>
            <a href="#" className="hover:text-emerald-500 transition">Instagram</a>
            <a href="#" className="hover:text-emerald-500 transition">LinkedIn</a>
            <a href="#" className="hover:text-emerald-500 transition">GitHub</a>
          </div>
        </div>
      </div>

      {/* Background LaserFlow */}
      <div className="absolute inset-0 z-1000 pointer-events-none h-full">
        <LaserFlow />
      </div>

      <div className="relative z-10 text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} Grabals. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;