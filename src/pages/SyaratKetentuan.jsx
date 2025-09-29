import React from "react";
import Layout from "../components/layout/Layout";

/**
 * Halaman SyaratKetentuan - Menampilkan syarat dan ketentuan penggunaan platform
 * 
 * @returns {JSX.Element} Halaman SyaratKetentuan
 */
const SyaratKetentuan = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-emerald-500">Syarat dan Ketentuan</h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300">
              Selamat datang di Grabals. Dengan mengakses atau menggunakan layanan kami, Anda menyetujui syarat dan ketentuan berikut.
              Harap baca dengan seksama sebelum menggunakan platform kami.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Ketentuan Umum</h2>
            <p className="text-gray-300">
              Dengan mengakses atau menggunakan platform Grabals, Anda menyetujui untuk terikat oleh syarat dan ketentuan ini.
              Jika Anda tidak setuju dengan bagian manapun dari syarat dan ketentuan ini, Anda tidak diperkenankan untuk menggunakan layanan kami.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Penggunaan Layanan</h2>
            <p className="text-gray-300">
              Anda setuju untuk menggunakan layanan kami hanya untuk tujuan yang sah dan sesuai dengan syarat dan ketentuan ini.
              Anda tidak diperkenankan untuk:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Menggunakan layanan untuk tujuan ilegal atau tidak sah</li>
              <li>Melanggar hak kekayaan intelektual atau hak lain dari pihak ketiga</li>
              <li>Mengunggah atau membagikan konten yang melanggar hukum, berbahaya, mengancam, atau tidak pantas</li>
              <li>Mencoba untuk mendapatkan akses tidak sah ke sistem atau jaringan kami</li>
              <li>Menggunakan layanan dengan cara yang dapat merusak, menonaktifkan, atau membebani infrastruktur kami</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Akun Pengguna</h2>
            <p className="text-gray-300">
              Untuk menggunakan beberapa fitur layanan kami, Anda mungkin perlu membuat akun. Anda bertanggung jawab untuk:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Menjaga kerahasiaan kata sandi Anda</li>
              <li>Membatasi akses ke akun Anda</li>
              <li>Semua aktivitas yang terjadi di bawah akun Anda</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Anda harus segera memberi tahu kami tentang penggunaan tidak sah akun Anda atau pelanggaran keamanan lainnya.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Konten Pengguna</h2>
            <p className="text-gray-300">
              Anda mempertahankan semua hak atas konten yang Anda kirimkan, posting, atau tampilkan di atau melalui layanan kami.
              Dengan mengirimkan konten, Anda memberikan kami lisensi non-eksklusif, bebas royalti, dapat dialihkan, dapat disublisensikan,
              di seluruh dunia untuk menggunakan, mereproduksi, memodifikasi, menyesuaikan, mempublikasikan, menerjemahkan, membuat karya turunan dari,
              mendistribusikan, dan menampilkan konten tersebut di platform kami dan di media lain.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Privasi</h2>
            <p className="text-gray-300">
              Penggunaan Anda atas layanan kami juga diatur oleh Kebijakan Privasi kami, yang tersedia di platform kami.
              Dengan menggunakan layanan kami, Anda menyetujui pengumpulan dan penggunaan informasi Anda sebagaimana dijelaskan dalam Kebijakan Privasi.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">6. Perubahan pada Syarat dan Ketentuan</h2>
            <p className="text-gray-300">
              Kami berhak untuk memodifikasi atau mengganti syarat dan ketentuan ini kapan saja. Perubahan akan efektif segera setelah diposting di platform.
              Penggunaan berkelanjutan Anda atas layanan setelah perubahan tersebut merupakan persetujuan Anda terhadap syarat dan ketentuan yang direvisi.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">7. Penghentian</h2>
            <p className="text-gray-300">
              Kami berhak untuk menghentikan atau menangguhkan akses Anda ke layanan kami, tanpa pemberitahuan sebelumnya, untuk perilaku yang kami anggap
              melanggar syarat dan ketentuan ini atau merugikan bagi kami atau pengguna lain dari layanan kami.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">8. Batasan Tanggung Jawab</h2>
            <p className="text-gray-300">
              Dalam keadaan apapun, Grabals, pejabat, direktur, karyawan, atau agennya tidak akan bertanggung jawab atas kerusakan tidak langsung,
              insidental, khusus, konsekuensial, atau punitif, termasuk kehilangan keuntungan, data, penggunaan, niat baik, atau kerugian tidak berwujud lainnya,
              yang diakibatkan dari penggunaan atau ketidakmampuan untuk menggunakan layanan kami.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">9. Hukum yang Berlaku</h2>
            <p className="text-gray-300">
              Syarat dan ketentuan ini akan diatur dan ditafsirkan sesuai dengan hukum Indonesia, tanpa memperhatikan ketentuan konflik hukumnya.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">10. Kontak</h2>
            <p className="text-gray-300">
              Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami di:
            </p>
            <p className="text-emerald-500 font-medium">info@grabals.com</p>

            <div className="mt-12 p-6 bg-neutral-800 rounded-lg">
              <p className="text-gray-300 text-center">
                Terakhir diperbarui: 28 September 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SyaratKetentuan;