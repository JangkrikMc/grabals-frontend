import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

/**
 * Halaman ArtikelDetailPage - Menampilkan detail lengkap dari sebuah artikel
 * 
 * @returns {JSX.Element} Halaman ArtikelDetailPage
 */
const ArtikelDetailPage = () => {
  const { id } = useParams();
  const [artikel, setArtikel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulasi pengambilan data artikel berdasarkan ID
    // Nantinya akan diganti dengan panggilan API ke backend
    const fetchArtikelDetail = async () => {
      setIsLoading(true);
      try {
        // Data dummy untuk sementara
        // Nantinya akan diganti dengan fetch data dari API
        const dummyData = {
          "1": {
            id: "1",
            judul: "Apa itu Cyber Security?",
            ringkasan: "Cyber security adalah upaya melindungi sistem, jaringan, dan data dari serangan digital. Dalam dunia modern, ancaman seperti malware, phishing, dan serangan DDoS bisa merugikan individu maupun organisasi.",
            konten: `
              <h2>Pengertian Cyber Security</h2>
              <p>Cyber security adalah upaya melindungi sistem, jaringan, dan data dari serangan digital. Dalam dunia modern, ancaman seperti malware, phishing, dan serangan DDoS bisa merugikan individu maupun organisasi.</p>
              
              <p>Keamanan siber menjadi semakin penting karena semakin banyaknya perangkat yang terhubung ke internet dan semakin banyaknya data sensitif yang disimpan secara digital. Dari informasi pribadi hingga data perusahaan, semua perlu dilindungi dari akses yang tidak sah.</p>
              
              <h2>Jenis-jenis Ancaman Cyber</h2>
              <p>Beberapa jenis ancaman cyber yang umum ditemui antara lain:</p>
              <ul>
                <li><strong>Malware</strong>: Program berbahaya seperti virus, worm, trojan, dan ransomware yang dapat merusak sistem atau mencuri data.</li>
                <li><strong>Phishing</strong>: Upaya penipuan untuk mendapatkan informasi sensitif seperti password atau data kartu kredit dengan menyamar sebagai entitas terpercaya.</li>
                <li><strong>DDoS (Distributed Denial of Service)</strong>: Serangan yang membanjiri sistem dengan lalu lintas berlebihan sehingga layanan menjadi tidak tersedia.</li>
                <li><strong>Man-in-the-Middle</strong>: Penyerang menyadap komunikasi antara dua pihak untuk mencuri informasi.</li>
                <li><strong>SQL Injection</strong>: Menyisipkan kode berbahaya ke dalam database melalui input yang tidak tervalidasi.</li>
              </ul>
              
              <h2>Pentingnya Cyber Security</h2>
              <p>Keamanan siber bukan hanya masalah teknis, tetapi juga masalah bisnis dan sosial. Pelanggaran data dapat menyebabkan:</p>
              <ul>
                <li>Kerugian finansial yang signifikan</li>
                <li>Kerusakan reputasi</li>
                <li>Masalah hukum dan regulasi</li>
                <li>Hilangnya kepercayaan pelanggan</li>
                <li>Gangguan operasional</li>
              </ul>
              
              <h2>Langkah-langkah Dasar untuk Meningkatkan Keamanan Siber</h2>
              <p>Berikut adalah beberapa langkah dasar yang dapat diambil untuk meningkatkan keamanan siber:</p>
              <ol>
                <li>Gunakan password yang kuat dan unik untuk setiap akun</li>
                <li>Aktifkan autentikasi dua faktor (2FA) jika tersedia</li>
                <li>Perbarui perangkat lunak dan sistem operasi secara teratur</li>
                <li>Berhati-hati dengan email dan tautan yang mencurigakan</li>
                <li>Gunakan perangkat lunak keamanan yang terpercaya</li>
                <li>Enkripsi data sensitif</li>
                <li>Buat backup data secara teratur</li>
                <li>Edukasi diri sendiri dan orang lain tentang praktik keamanan siber</li>
              </ol>
              
              <h2>Kesimpulan</h2>
              <p>Cyber security adalah tanggung jawab bersama. Dengan memahami risiko dan mengambil langkah-langkah pencegahan yang tepat, kita dapat melindungi diri kita sendiri dan organisasi kita dari ancaman siber yang terus berkembang.</p>
            `,
            gambar: "https://iili.io/KEVuXFp.md.webp",
            tanggal: "28 Sep 2025",
            penulis: "Admin Grabals",
            kategori: "Keamanan",
            tags: ["cyber security", "keamanan digital", "malware", "phishing"]
          },
          "2": {
            id: "2",
            judul: "Cara Sederhana Melindungi Diri di Dunia Digital",
            ringkasan: "Untuk menjaga keamanan digital, kamu bisa memulai dari langkah kecil yang sederhana seperti menggunakan password yang kuat, mengaktifkan autentikasi dua faktor, dan selalu update software & aplikasi.",
            konten: `
              <h2>Pentingnya Keamanan Digital</h2>
              <p>Di era digital seperti sekarang, hampir semua aspek kehidupan kita terhubung dengan internet. Dari perbankan online, media sosial, hingga email kerja, semua memerlukan perlindungan yang memadai. Keamanan digital bukan hanya untuk perusahaan besar atau ahli teknologi, tetapi untuk semua orang yang menggunakan perangkat digital.</p>
              
              <h2>Langkah-langkah Sederhana untuk Melindungi Diri</h2>
              
              <h3>1. Gunakan Password yang Kuat dan Unik</h3>
              <p>Password adalah garis pertahanan pertama Anda. Buatlah password yang:</p>
              <ul>
                <li>Minimal 12 karakter</li>
                <li>Kombinasi huruf besar, huruf kecil, angka, dan simbol</li>
                <li>Tidak mengandung informasi pribadi yang mudah ditebak</li>
                <li>Berbeda untuk setiap akun</li>
              </ul>
              <p>Pertimbangkan untuk menggunakan password manager untuk membantu mengelola password yang kompleks.</p>
              
              <h3>2. Aktifkan Autentikasi Dua Faktor (2FA)</h3>
              <p>2FA menambahkan lapisan keamanan ekstra dengan meminta verifikasi kedua selain password. Ini bisa berupa:</p>
              <ul>
                <li>Kode yang dikirim melalui SMS atau email</li>
                <li>Aplikasi authenticator seperti Google Authenticator</li>
                <li>Kunci keamanan fisik</li>
                <li>Biometrik (sidik jari, wajah)</li>
              </ul>
              
              <h3>3. Perbarui Software dan Aplikasi Secara Rutin</h3>
              <p>Update software sering kali berisi perbaikan keamanan untuk mengatasi kerentanan yang ditemukan. Aktifkan update otomatis jika memungkinkan untuk:</p>
              <ul>
                <li>Sistem operasi (Windows, macOS, iOS, Android)</li>
                <li>Browser web</li>
                <li>Aplikasi dan software</li>
                <li>Antivirus dan firewall</li>
              </ul>
              
              <h3>4. Berhati-hati dengan Email dan Pesan</h3>
              <p>Phishing adalah metode umum yang digunakan penyerang untuk mendapatkan informasi sensitif. Waspadai:</p>
              <ul>
                <li>Email dari pengirim yang tidak dikenal</li>
                <li>Pesan dengan kesalahan ejaan atau tata bahasa</li>
                <li>Tautan yang mencurigakan</li>
                <li>Permintaan informasi pribadi atau keuangan</li>
                <li>Lampiran yang tidak diminta</li>
              </ul>
              
              <h3>5. Amankan Jaringan Wi-Fi</h3>
              <p>Jaringan Wi-Fi yang tidak aman bisa menjadi pintu masuk bagi penyerang:</p>
              <ul>
                <li>Gunakan enkripsi WPA3 jika tersedia, atau minimal WPA2</li>
                <li>Ubah password default router</li>
                <li>Sembunyikan SSID (nama jaringan)</li>
                <li>Gunakan VPN saat mengakses Wi-Fi publik</li>
              </ul>
              
              <h2>Kesimpulan</h2>
              <p>Keamanan digital mungkin terdengar rumit, tetapi langkah-langkah sederhana di atas dapat secara signifikan mengurangi risiko Anda menjadi korban serangan siber. Ingat, keamanan adalah proses berkelanjutan, bukan produk sekali pakai. Tetap waspada dan perbarui pengetahuan Anda tentang praktik keamanan terbaik secara teratur.</p>
            `,
            gambar: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
            tanggal: "25 Sep 2025",
            penulis: "Tim Keamanan",
            kategori: "Keamanan",
            tags: ["keamanan digital", "password", "2FA", "phishing", "wifi"]
          }
        };

        // Cek apakah artikel dengan ID tersebut ada
        if (dummyData[id]) {
          setArtikel(dummyData[id]);
        } else {
          setError("Artikel tidak ditemukan");
        }
      } catch (error) {
        console.error("Error fetching artikel detail:", error);
        setError("Terjadi kesalahan saat memuat artikel");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtikelDetail();
  }, [id]);

  // Fungsi untuk render konten HTML dengan aman
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-white">
      {/* Header Artikel */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-emerald-600 rounded-lg mr-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-white" 
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
              <h1 className="text-2xl font-bold text-white">Grabals Blog</h1>
            </div>
            
            {/* Tombol Kembali */}
            <Link
              to="/artikel"
              className="flex items-center text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors border border-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Daftar Artikel
            </Link>
          </div>
        </div>
      </header>
      
      {/* Konten Utama */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-500/20 border border-red-500 rounded-lg p-6 text-center">
            <p className="text-red-300">{error}</p>
            <Link to="/artikel" className="mt-4 inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors">
              Kembali ke Daftar Artikel
            </Link>
          </div>
        ) : artikel ? (
          <article>
            {/* Header Artikel */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{artikel.judul}</h1>
              
              <div className="flex flex-wrap items-center text-sm text-gray-400 mb-6 gap-4">
                {/* Tanggal */}
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{artikel.tanggal}</span>
                </div>
                
                {/* Penulis */}
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{artikel.penulis}</span>
                </div>
                
                {/* Kategori */}
                {artikel.kategori && (
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <span>{artikel.kategori}</span>
                  </div>
                )}
              </div>
              
              {/* Gambar Utama */}
              <div className="relative rounded-xl overflow-hidden mb-8">
                <img 
                  src={artikel.gambar} 
                  alt={artikel.judul} 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </header>
            
            {/* Konten Artikel */}
            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={createMarkup(artikel.konten)}
            ></div>
            
            {/* Tags */}
            {artikel.tags && artikel.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-lg font-semibold mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {artikel.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        ) : null}
      </main>
    </div>
  );
};

export default ArtikelDetailPage;