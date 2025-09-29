import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";

export function ArtikelCyber() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Swiper spaceBetween={30} slidesPerView={1}>
        
        {/* Halaman 1 */}
        <SwiperSlide>
          <div className="bg-white/80 rounded-2xl shadow-lg p-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Apa itu Cyber Security?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Cyber security adalah upaya melindungi sistem, jaringan, dan data 
              dari serangan digital. Dalam dunia modern, ancaman seperti 
              malware, phishing, dan serangan DDoS bisa merugikan individu 
              maupun organisasi.
            </p>
            <img 
              src="https://iili.io/KEVuXFp.md.webp"
              alt="Cyber Security" 
              className="rounded-xl shadow-md mx-auto"
            />
          </div>
        </SwiperSlide>

        {/* Halaman 2 */}
        <SwiperSlide>
          <div className="bg-white/80 rounded-2xl shadow-lg p-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Cara Sederhana Melindungi Diri
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Untuk menjaga keamanan digital, kamu bisa memulai dari langkah 
              kecil yang sederhana:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Gunakan password yang kuat dan unik.</li>
              <li>Aktifkan autentikasi dua faktor (2FA).</li>
              <li>Hindari klik link mencurigakan di email.</li>
              <li>Selalu update software & aplikasi.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              Dengan kebiasaan ini, resiko terkena serangan bisa jauh berkurang.
            </p>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default ArtikelCyber;
