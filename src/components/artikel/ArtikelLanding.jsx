import React from "react";
import { Link } from "react-router-dom";
import ArtikelCard from "./ArtikelCard";

/**
 * Komponen ArtikelLanding - Menampilkan maksimal 2 artikel di landing page
 * dengan tombol untuk melihat semua artikel
 * 
 * @param {Object} props - Properties komponen
 * @param {Array} props.artikelList - Daftar artikel yang akan ditampilkan
 * @returns {JSX.Element} Komponen ArtikelLanding
 */
const ArtikelLanding = ({ artikelList = [] }) => {
  // Batasi hanya menampilkan maksimal 2 artikel di landing page
  const displayedArtikels = artikelList.slice(0, 2);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-slate-200">
          Artikel Terbaru
        </h2>
        <Link 
          to="/artikel" 
          className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <span>Lihat Semua Artikel</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      {displayedArtikels.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedArtikels.map((artikel) => (
            <ArtikelCard
              key={artikel.id}
              id={artikel.id}
              judul={artikel.judul}
              ringkasan={artikel.ringkasan}
              gambar={artikel.gambar}
              tanggal={artikel.tanggal}
              penulis={artikel.penulis}
              isLanding={true}
            />
          ))}
        </div>
      ) : (
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 text-center">
          <p className="text-slate-300">Belum ada artikel yang tersedia.</p>
        </div>
      )}
    </div>
  );
};

export default ArtikelLanding;