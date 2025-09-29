import React from "react";

const HeroSection = ({ onExploreClick, onJoinClick }) => {
  return (
    <div
      id="hero"
      className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-4 px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16 lg:py-24"
    >
      <div className="flex flex-col items-start justify-center space-y-4 w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-200 py-2 rounded-lg">
          Selamat Datang di Grabals
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-lg pr-2 sm:pr-4 md:pr-10">
          Komunitas pengembang, designer, dan tech enthusiast yang saling
          berbagi, belajar, dan membangun proyek bersama.
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          <button 
            className="px-4 sm:px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium sm:font-semibold text-sm sm:text-base shadow-md transition duration-300"
            onClick={onJoinClick}
          >
            Bergabung Sekarang
          </button>
          <button 
            onClick={onExploreClick}
            className="px-4 sm:px-6 py-2 border border-white text-white rounded-lg font-medium sm:font-semibold text-sm sm:text-base hover:bg-white hover:text-cyan-700 transition duration-300"
          >
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;