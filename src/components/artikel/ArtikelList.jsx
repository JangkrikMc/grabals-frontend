import React, { useState } from "react";
import ArtikelCard from "./ArtikelCard";

/**
 * Komponen ArtikelList - Menampilkan daftar artikel lengkap dengan fitur filter dan pagination
 * 
 * @param {Object} props - Properties komponen
 * @param {Array} props.artikelList - Daftar artikel yang akan ditampilkan
 * @param {string} props.searchTerm - Kata kunci pencarian
 * @returns {JSX.Element} Komponen ArtikelList
 */
const ArtikelList = ({ artikelList = [], searchTerm = "" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter artikel berdasarkan kata kunci pencarian
  const filteredArtikels = searchTerm 
    ? artikelList.filter(artikel => 
        artikel.judul.toLowerCase().includes(searchTerm.toLowerCase()) || 
        artikel.ringkasan.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artikel.penulis.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : artikelList;

  // Hitung total halaman
  const totalPages = Math.ceil(filteredArtikels.length / itemsPerPage);
  
  // Ambil artikel untuk halaman saat ini
  const currentArtikels = filteredArtikels.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handler untuk navigasi halaman
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll ke atas halaman
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Informasi hasil pencarian jika ada */}
      {searchTerm && (
        <div className="mb-6">
          <p className="text-slate-300">
            {filteredArtikels.length} hasil pencarian untuk "{searchTerm}"
          </p>
        </div>
      )}

      {/* Daftar Artikel */}
      {currentArtikels.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentArtikels.map((artikel) => (
            <ArtikelCard
              key={artikel.id}
              id={artikel.id}
              judul={artikel.judul}
              ringkasan={artikel.ringkasan}
              gambar={artikel.gambar}
              tanggal={artikel.tanggal}
              penulis={artikel.penulis}
            />
          ))}
        </div>
      ) : (
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 text-center">
          <p className="text-slate-300">
            {searchTerm 
              ? `Tidak ada artikel yang sesuai dengan pencarian "${searchTerm}".` 
              : "Belum ada artikel yang tersedia."}
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10">
          <nav className="flex items-center space-x-2">
            {/* Tombol Previous */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md ${
                currentPage === 1
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                  : "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Nomor Halaman */}
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === index + 1
                    ? "bg-emerald-600 text-white border border-emerald-500"
                    : "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            {/* Tombol Next */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                  : "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default ArtikelList;