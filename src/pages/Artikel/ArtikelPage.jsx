import React, { useState, useEffect } from "react";
import ArtikelHeader from "../../components/artikel/ArtikelHeader";
import ArtikelList from "../../components/artikel/ArtikelList";

/**
 * Halaman ArtikelPage - Menampilkan daftar lengkap artikel dengan fitur pencarian
 * 
 * @returns {JSX.Element} Halaman ArtikelPage
 */
const ArtikelPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [artikelList, setArtikelList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fungsi untuk menangani pencarian
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Efek untuk memuat data artikel
  useEffect(() => {
    // Simulasi pengambilan data dari API
    // Nantinya ini akan diganti dengan panggilan API ke backend
    const fetchArtikel = async () => {
      setIsLoading(true);
      try {
        // Data dummy untuk sementara
        // Nantinya akan diganti dengan fetch data dari API
        const dummyData = [
          {
            id: "1",
            judul: "Apa itu Cyber Security?",
            ringkasan: "Cyber security adalah upaya melindungi sistem, jaringan, dan data dari serangan digital. Dalam dunia modern, ancaman seperti malware, phishing, dan serangan DDoS bisa merugikan individu maupun organisasi.",
            gambar: "https://iili.io/KEVuXFp.md.webp",
            tanggal: "28 Sep 2025",
            penulis: "Admin Grabals"
          },
          {
            id: "2",
            judul: "Cara Sederhana Melindungi Diri di Dunia Digital",
            ringkasan: "Untuk menjaga keamanan digital, kamu bisa memulai dari langkah kecil yang sederhana seperti menggunakan password yang kuat, mengaktifkan autentikasi dua faktor, dan selalu update software & aplikasi.",
            gambar: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
            tanggal: "25 Sep 2025",
            penulis: "Tim Keamanan"
          },
          {
            id: "3",
            judul: "Pentingnya Backup Data Secara Berkala",
            ringkasan: "Backup data adalah salah satu langkah penting dalam menjaga keamanan informasi digital Anda. Artikel ini membahas berbagai metode backup dan jadwal yang direkomendasikan untuk berbagai jenis data.",
            gambar: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            tanggal: "20 Sep 2025",
            penulis: "Data Specialist"
          },
          {
            id: "4",
            judul: "Mengenal Teknologi Blockchain dan Aplikasinya",
            ringkasan: "Blockchain bukan hanya tentang cryptocurrency. Teknologi ini memiliki potensi aplikasi yang luas di berbagai industri, dari supply chain hingga kesehatan. Pelajari dasar-dasar blockchain dan bagaimana teknologi ini mengubah dunia.",
            gambar: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
            tanggal: "15 Sep 2025",
            penulis: "Blockchain Expert"
          },
          {
            id: "5",
            judul: "Tips Mengoptimalkan Performa Website",
            ringkasan: "Kecepatan loading website sangat mempengaruhi pengalaman pengguna dan SEO. Artikel ini memberikan tips praktis untuk meningkatkan performa website Anda, dari optimasi gambar hingga implementasi caching.",
            gambar: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80",
            tanggal: "10 Sep 2025",
            penulis: "Web Developer"
          },
          {
            id: "6",
            judul: "Pengenalan Machine Learning untuk Pemula",
            ringkasan: "Machine Learning semakin populer di era big data. Artikel ini menjelaskan konsep dasar machine learning, jenis-jenisnya, dan bagaimana memulai perjalanan belajar di bidang yang menarik ini.",
            gambar: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            tanggal: "5 Sep 2025",
            penulis: "AI Researcher"
          },
          {
            id: "7",
            judul: "Keamanan IoT: Tantangan dan Solusi",
            ringkasan: "Internet of Things (IoT) membawa banyak kemudahan, tetapi juga risiko keamanan. Artikel ini membahas tantangan keamanan dalam ekosistem IoT dan langkah-langkah untuk mengatasinya.",
            gambar: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            tanggal: "1 Sep 2025",
            penulis: "IoT Specialist"
          },
          {
            id: "8",
            judul: "Panduan Lengkap DevOps untuk Tim Pengembangan",
            ringkasan: "DevOps menjembatani gap antara pengembangan dan operasi IT. Artikel ini memberikan panduan komprehensif tentang prinsip, praktik, dan tools DevOps yang dapat meningkatkan efisiensi tim pengembangan software.",
            gambar: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            tanggal: "28 Aug 2025",
            penulis: "DevOps Engineer"
          }
        ];
        
        setArtikelList(dummyData);
      } catch (error) {
        console.error("Error fetching artikel:", error);
        setArtikelList([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtikel();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-white">
      {/* Header dengan fitur pencarian */}
      <ArtikelHeader onSearch={handleSearch} />
      
      {/* Konten Utama */}
      <main>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
          </div>
        ) : (
          <ArtikelList artikelList={artikelList} searchTerm={searchTerm} />
        )}
      </main>
    </div>
  );
};

export default ArtikelPage;