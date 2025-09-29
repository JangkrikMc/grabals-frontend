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
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANEhUSEA8QDQ8NDhAQEA8PDw8QEBAQFhYWFhYRFRUYHSggGxolHhUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFQ8PFSsfICAtKysrKystLS0rLS0tLS0rKysrLS0tLS0rLS0tLS0tLSstLSstKy0rLS0tLS0rLS0rK//AABEIALcBEwMBEQACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAACAQAEBQMGB//EADoQAAIBAgMFBAgEBQUAAAAAAAABAgMRBBIhBTFBUWETcYGRIjJCYqGxwdFScuHwFTOCkvFDc5Kywv/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAuEQEBAAIBAwEGBQQDAAAAAAAAAQIRAwQSIVEFEzEyQWEicYGx0TORwfAUI+H/2gAMAwEAAhEDEQA/APxMGqiPSoDVCXIoHpQUQjkUS5FEelBUhCVIqA9LYRyKJWlA9MsA0thHpgbGmWDY0lgLTBjSWDZaZYBpGh7TpGPZaSwFobAnSMadIxlYg02DYC0wadICRAqwaUAlA1QlRQUoKISpFQlSEkI4olyKg2qQkI5FSErRWEciiVplgPS2AaZYD0ywbPTLBsaZYNlpLAWmWAaQZaSwJ0lhlpGBaRj2iwSisSwk2DYabEGmoxlUGmowTUsBaQaWCUVgOKCyQjiiXCQlSKhKkINnISEvSpCOQhLkYkI5CDatMFs9MDZ9rZpYOT1eie6+jZnlySeHXxdHnlO6+I5s8S4trSVpNbmtLnVOOWPEy6u4ZWfHy9qVZT3b+T3meWFxdfFz4cnwejRG22mWGWkAaYG06Sw9loWCdJYabBsMrEGmxGNNggiwbDTYg01GhpEaagEg0qJUIFRRKhISoqQlyEkI4SEqQkC4pJ6IS5FsCpCsLapFQtqkWwbVp2cNs5UoqU1ebV0vw8l3nLny7uo9vpOixwx7+SeXnWoSnpndNPilr5jwyk+g6nhz5NyZ9s+z5etFZpW3ZpW7rnqY71NvhOWTvy161Y0+RWix8XcblCb3S8Gc/JhrzHqdL1Fy/Bl8XvYw27tJYZaRjLSWDabBsMrEY0WJYNpsFoabEaGmwWUmwWCLBGmxBoojKoNAgUJAqKgUSJOEhLhCVCQVchISopKpCEuQkgqpFJXISEqRUhKkdbYeGTfaSV1D1V72mvxS730MObPU1Hp+z+nmWXffo3dpYuNJXqSs3wW99EjLj48s7rGPR6nquLp8O7kv6fV8vjtpzraQTpwtuV80u9/TcenxcGOE3fNfG9d7V5eovbhvHH/fjWjTWtnfpodLydtiEU+j6gHQjh7xTXDSXTqKyWaaYZXGywXGxwXxdPosL3YywbBsaSwFpGhlYjGiwWMrBaGixGCbEY0WANNg2KRRsNNEaKjGmoNIgmEClQlQrCVCQlQhLhISoQlwkJUVCqoaJaSKhLkKwlSFYS5Hbq46ng6ME2lUlDPltdrNdp247+4wx4suXO+jvz63j6Pp5LfxX6Pk8XtGdR3u1ffK/pPvf2PTw4pjNPkuo63k5st2/wAtXtZc3Z9Waajl776s7WV73fmMtvWljZxfCXSSuB7dfA7WpX9K9K/TNABLG5jaS0nCSlCel4tNXXDy+Ryc+OruPb6Dl7sO2/RqNGG3dobD2WhsPabBY02JYE2CUmxGNFggmwGNFiMpnYDGmoxoosaKg0iNMVAqEhKhIlcJCVCQLhIlUKwlQkJpCEqEiVwkJcOKEuFOqqazyV1Fq0X7UuEe7TUeOPddI5uacOHff0+7h4mvKrJzm3KUndt8TuxxmM1HzvLy58uVzzu7XkUzYAYAYAYAbmzMUqUnmv2c9J24cpW4tfK5GeMymm/T814s5lHYlGzty0PPvi6fS42ZTcBoBoGik0WG02DYpNiWGiiNNgsaKL..."
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