import React from "react";
import { Link } from "react-router-dom";

/**
 * Komponen ArtikelHeader - Header untuk halaman artikel
 * Menggunakan warna kustom dari CustomColors.css
 * 
 * @param {Object} props - Properties komponen
 * @param {Function} props.onSearch - Fungsi yang dipanggil saat pencarian dilakukan
 * @returns {JSX.Element} Komponen ArtikelHeader
 */
const ArtikelHeader = ({ onSearch }) => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <header className="bg-gradient-to-r from-raisin-black to-eggplant/70 shadow-lg border-b border-eggplant/30">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo dan Judul */}
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 bg-eggplant rounded-lg mr-3">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-lavender-web" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-lavender-web">Grabals Blog</h1>
          </div>

          {/* Form Pencarian */}
          <div className="w-full md:w-auto">
            <form onSubmit={handleSearchSubmit} className="flex">
              <input
                type="text"
                name="search"
                placeholder="Cari artikel..."
                className="w-full md:w-64 px-4 py-2 rounded-l-lg border-0 focus:ring-2 focus:ring-ecru bg-raisin-black text-lavender-web placeholder-gray-400 border border-eggplant/50 border-r-0"
              />
              <button
                type="submit"
                className="bg-ecru hover:bg-eggplant text-raisin-black hover:text-lavender-web px-4 py-2 rounded-r-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Tombol Kembali */}
          <Link
            to="/"
            className="flex items-center text-lavender-web bg-eggplant/30 hover:bg-eggplant/50 px-4 py-2 rounded-lg transition-colors border border-eggplant/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </header>
  );
};

export default ArtikelHeader;