import React, { useState, useEffect } from "react";
import { artikelAPI } from "../services/api";

/**
 * Contoh penggunaan API Artikel
 * 
 * Komponen ini menunjukkan cara menggunakan API untuk:
 * 1. Mengambil daftar artikel
 * 2. Mencari artikel
 * 3. Menangani loading state
 * 4. Menangani error
 */
const ArtikelAPIExample = () => {
  const [artikelList, setArtikelList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Mengambil semua artikel saat komponen dimount
  useEffect(() => {
    const fetchArtikel = async () => {
      setIsLoading(true);
      try {
        // Panggil API untuk mendapatkan semua artikel
        const data = await artikelAPI.getAll();
        setArtikelList(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching artikel:", error);
        setError("Gagal memuat artikel. Silakan coba lagi nanti.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtikel();
  }, []);

  // Fungsi untuk mencari artikel
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    try {
      // Panggil API untuk mencari artikel
      const data = await artikelAPI.search(searchTerm);
      setArtikelList(data);
      setError(null);
    } catch (error) {
      console.error("Error searching artikel:", error);
      setError("Gagal mencari artikel. Silakan coba lagi nanti.");
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi untuk mendapatkan artikel berdasarkan kategori
  const getArtikelByCategory = async (category) => {
    setIsLoading(true);
    try {
      // Panggil API untuk mendapatkan artikel berdasarkan kategori
      const data = await artikelAPI.getByCategory(category);
      setArtikelList(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching artikel by category:", error);
      setError("Gagal memuat artikel. Silakan coba lagi nanti.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Contoh Penggunaan API Artikel</h1>

      {/* Form Pencarian */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari artikel..."
            className="flex-1 px-4 py-2 rounded-l-lg border-0 focus:ring-2 focus:ring-emerald-500 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 border-r-0"
          />
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-r-lg transition-colors"
          >
            Cari
          </button>
        </div>
      </form>

      {/* Filter Kategori */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Filter berdasarkan kategori:</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => getArtikelByCategory("Keamanan")}
            className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-full text-sm transition-colors"
          >
            Keamanan
          </button>
          <button
            onClick={() => getArtikelByCategory("Teknologi")}
            className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-full text-sm transition-colors"
          >
            Teknologi
          </button>
          <button
            onClick={() => getArtikelByCategory("Programming")}
            className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-full text-sm transition-colors"
          >
            Programming
          </button>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-500/20 border border-red-500 rounded-lg p-6 text-center mb-8">
          <p className="text-red-300">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Coba Lagi
          </button>
        </div>
      )}

      {/* Artikel List */}
      {!isLoading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artikelList.length > 0 ? (
            artikelList.map((artikel) => (
              <div
                key={artikel.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-emerald-900/20 transition-shadow"
              >
                <img
                  src={artikel.gambar}
                  alt={artikel.judul}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{artikel.judul}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {artikel.tanggal} • {artikel.penulis}
                  </p>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {artikel.ringkasan}
                  </p>
                  <a
                    href={`/artikel/${artikel.id}`}
                    className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400">Tidak ada artikel yang ditemukan.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ArtikelAPIExample;