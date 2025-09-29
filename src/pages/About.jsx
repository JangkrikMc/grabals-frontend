import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { FaUsers, FaLightbulb, FaCode, FaHandshake, FaRocket } from "react-icons/fa";

/**
 * Halaman About - Menampilkan informasi tentang Grabals
 * Menggunakan warna kustom dari CustomColors.css
 * 
 * @returns {JSX.Element} Halaman About
 */
export default function About() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-lavender-web mb-4">
            Tentang Grabals
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Komunitas kolaboratif untuk developer, designer, dan tech enthusiast yang ingin
            berbagi pengetahuan, belajar bersama, dan membangun proyek inovatif.
          </p>
        </div>

        {/* Visi & Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-raisin-black/50 p-6 rounded-xl border border-eggplant/30">
            <h2 className="text-2xl font-semibold text-ecru mb-4">Visi Kami</h2>
            <p className="text-lavender-web">
              Menjadi komunitas teknologi terdepan di Indonesia yang menginspirasi dan memberdayakan
              individu untuk berkolaborasi, berinovasi, dan menciptakan solusi teknologi yang berdampak positif
              bagi masyarakat.
            </p>
          </div>
          <div className="bg-raisin-black/50 p-6 rounded-xl border border-eggplant/30">
            <h2 className="text-2xl font-semibold text-ecru mb-4">Misi Kami</h2>
            <ul className="text-lavender-web space-y-2">
              <li className="flex items-start">
                <span className="text-ecru mr-2">•</span>
                <span>Membangun lingkungan belajar yang inklusif dan suportif</span>
              </li>
              <li className="flex items-start">
                <span className="text-ecru mr-2">•</span>
                <span>Memfasilitasi kolaborasi antar anggota dengan berbagai latar belakang</span>
              </li>
              <li className="flex items-start">
                <span className="text-ecru mr-2">•</span>
                <span>Mendorong inovasi melalui proyek-proyek kolaboratif</span>
              </li>
              <li className="flex items-start">
                <span className="text-ecru mr-2">•</span>
                <span>Berbagi pengetahuan dan pengalaman di bidang teknologi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sejarah */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-lavender-web mb-6 text-center">
            Sejarah Grabals
          </h2>
          <div className="bg-raisin-black/30 p-6 md:p-8 rounded-xl border border-eggplant/30">
            <div className="space-y-4 text-lavender-web">
              <p>
                Grabals didirikan pada tahun 2020 oleh sekelompok developer dan designer yang memiliki
                visi untuk menciptakan komunitas teknologi yang inklusif dan kolaboratif di Indonesia.
                Berawal dari diskusi online dan meetup kecil, komunitas ini terus berkembang menjadi
                wadah bagi para profesional dan enthusiast teknologi untuk berbagi pengetahuan dan
                berkolaborasi dalam proyek-proyek inovatif.
              </p>
              <p>
                Sepanjang perjalanannya, Grabals telah menyelenggarakan berbagai kegiatan seperti
                workshop, hackathon, dan sharing session yang melibatkan ratusan partisipan dari
                berbagai latar belakang. Komunitas ini juga telah menghasilkan berbagai proyek
                kolaboratif yang berdampak positif bagi masyarakat.
              </p>
              <p>
                Hingga saat ini, Grabals terus berkomitmen untuk menjadi ruang yang aman dan
                inspiratif bagi siapa saja yang ingin belajar, berbagi, dan berkolaborasi di
                bidang teknologi.
              </p>
            </div>
          </div>
        </div>

        {/* Nilai-nilai Kami */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-lavender-web mb-8 text-center">
            Nilai-nilai Kami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-raisin-black/40 p-6 rounded-xl border border-eggplant/30 flex flex-col items-center text-center">
              <FaUsers className="text-4xl text-ecru mb-4" />
              <h3 className="text-xl font-semibold text-lavender-web mb-2">Inklusivitas</h3>
              <p className="text-gray-400">
                Kami menerima semua orang tanpa memandang latar belakang, pengalaman, atau tingkat keahlian.
              </p>
            </div>
            <div className="bg-raisin-black/40 p-6 rounded-xl border border-eggplant/30 flex flex-col items-center text-center">
              <FaLightbulb className="text-4xl text-ecru mb-4" />
              <h3 className="text-xl font-semibold text-lavender-web mb-2">Inovasi</h3>
              <p className="text-gray-400">
                Kami mendorong pemikiran kreatif dan solusi inovatif untuk mengatasi berbagai tantangan.
              </p>
            </div>
            <div className="bg-raisin-black/40 p-6 rounded-xl border border-eggplant/30 flex flex-col items-center text-center">
              <FaHandshake className="text-4xl text-rose-quartz mb-4" />
              <h3 className="text-xl font-semibold text-lavender-web mb-2">Kolaborasi</h3>
              <p className="text-gray-400">
                Kami percaya bahwa hasil terbaik dicapai melalui kerja sama dan saling mendukung.
              </p>
            </div>
            <div className="bg-raisin-black/40 p-6 rounded-xl border border-eggplant/30 flex flex-col items-center text-center">
              <FaCode className="text-4xl text-eggplant mb-4" />
              <h3 className="text-xl font-semibold text-lavender-web mb-2">Kualitas</h3>
              <p className="text-gray-400">
                Kami berkomitmen untuk menghasilkan karya berkualitas tinggi dalam setiap proyek.
              </p>
            </div>
            <div className="bg-raisin-black/40 p-6 rounded-xl border border-eggplant/30 flex flex-col items-center text-center">
              <FaRocket className="text-4xl text-rose-quartz mb-4" />
              <h3 className="text-xl font-semibold text-lavender-web mb-2">Pertumbuhan</h3>
              <p className="text-gray-400">
                Kami mendorong pembelajaran berkelanjutan dan pengembangan diri setiap anggota.
              </p>
            </div>
          </div>
        </div>

        {/* Tim Kami */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-lavender-web mb-8 text-center">
            Tim Kami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Budi Santoso",
                role: "Founder & Community Lead",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                name: "Dewi Lestari",
                role: "Tech Lead",
                image: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                name: "Andi Pratama",
                role: "Design Lead",
                image: "https://randomuser.me/api/portraits/men/55.jpg"
              },
              {
                name: "Siti Rahayu",
                role: "Content Manager",
                image: "https://randomuser.me/api/portraits/women/68.jpg"
              },
              {
                name: "Rudi Hermawan",
                role: "Event Coordinator",
                image: "https://randomuser.me/api/portraits/men/78.jpg"
              },
              {
                name: "Nina Wijaya",
                role: "Community Manager",
                image: "https://randomuser.me/api/portraits/women/65.jpg"
              },
              {
                name: "Dimas Prayoga",
                role: "Project Manager",
                image: "https://randomuser.me/api/portraits/men/36.jpg"
              },
              {
                name: "Lina Susanti",
                role: "Education Lead",
                image: "https://randomuser.me/api/portraits/women/33.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="bg-raisin-black/30 rounded-xl overflow-hidden border border-eggplant/30 hover:border-ecru/50 transition-all duration-300 hover:scale-[1.02]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-lavender-web">{member.name}</h3>
                  <p className="text-ecru">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bergabung dengan Kami */}
        <div className="bg-gradient-to-r from-eggplant/30 to-raisin-black/70 rounded-xl p-8 text-center border border-eggplant/50">
          <h2 className="text-2xl md:text-3xl font-bold text-lavender-web mb-4">
            Bergabung dengan Grabals
          </h2>
          <p className="text-lavender-web mb-6 max-w-2xl mx-auto">
            Jadilah bagian dari komunitas yang terus berkembang dan berkolaborasi untuk menciptakan
            solusi teknologi yang inovatif dan berdampak.
          </p>
          <Link 
            to="/" 
            className="inline-block px-6 py-3 bg-ecru hover:bg-eggplant text-raisin-black hover:text-lavender-web rounded-lg font-medium shadow-md transition duration-300"
          >
            Bergabung Sekarang
          </Link>
        </div>
      </div>
    </Layout>
  );
}