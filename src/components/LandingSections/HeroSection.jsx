import React from "react";

const HeroSection = ({ onExploreClick, onJoinClick }) => {
  return (
    <div
      id="hero"
      className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 lg:py-28"
    >
      <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-lavender-web py-2 rounded-lg">
          Selamat Datang di Grabals
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl">
          Komunitas pengembang, designer, dan tech enthusiast yang saling
          berbagi, belajar, dan membangun proyek bersama.
        </p>
        <div className="flex flex-wrap gap-4 mt-4 justify-center">
          <button 
            className="btn-primary px-5 sm:px-7 py-3 rounded-lg font-medium sm:font-semibold text-sm sm:text-base shadow-md transition duration-300"
            onClick={onJoinClick}
          >
            Bergabung Sekarang
          </button>
          <button 
            onClick={onExploreClick}
            className="btn-secondary px-5 sm:px-7 py-3 border border-white rounded-lg font-medium sm:font-semibold text-sm sm:text-base hover:bg-white hover:text-eggplant transition duration-300"
          >
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;