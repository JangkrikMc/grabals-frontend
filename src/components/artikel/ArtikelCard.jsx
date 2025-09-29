import React from "react";
import { Link } from "react-router-dom";

/**
 * Komponen ArtikelCard - Menampilkan kartu artikel dengan tampilan yang profesional
 * Menggunakan warna kustom dari CustomColors.css
 * 
 * @param {Object} props - Properties komponen
 * @param {string} props.id - ID unik artikel
 * @param {string} props.judul - Judul artikel
 * @param {string} props.ringkasan - Ringkasan singkat artikel
 * @param {string} props.gambar - URL gambar artikel
 * @param {string} props.tanggal - Tanggal publikasi artikel
 * @param {string} props.penulis - Nama penulis artikel
 * @param {boolean} props.isLanding - Flag untuk menentukan apakah card ditampilkan di landing page
 * @returns {JSX.Element} Komponen ArtikelCard
 */
const ArtikelCard = ({ id, judul, ringkasan, gambar, tanggal, penulis, isLanding = false }) => {
  return (
    <div className="bg-gray-900/80 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-800">
      <div className="relative">
        {/* Gambar Artikel dengan Overlay Gradient */}
        <img 
          src={gambar} 
          alt={judul} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        
        {/* Badge Tanggal */}
        <div className="absolute top-3 right-3 bg-ecru text-raisin-black text-xs font-medium px-2.5 py-1 rounded-full">
          {tanggal}
        </div>
      </div>
      
      <div className="p-5">
        {/* Judul Artikel */}
        <h3 className="text-xl font-bold text-lavender-web mb-2 line-clamp-2">
          {judul}
        </h3>
        
        {/* Ringkasan Artikel */}
        <p className="text-gray-300 mb-4 line-clamp-3">
          {ringkasan}
        </p>
        
        <div className="flex justify-between items-center">
          {/* Info Penulis */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-eggplant/50 flex items-center justify-center text-lavender-web font-medium">
              {penulis.charAt(0).toUpperCase()}
            </div>
            <span className="ml-2 text-sm text-gray-300">{penulis}</span>
          </div>
          
          {/* Tombol Baca Selengkapnya */}
          <Link 
            to={`/artikel/${id}`} 
            className="text-sm font-medium text-ecru hover:text-rose-quartz flex items-center"
          >
            Baca
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtikelCard;