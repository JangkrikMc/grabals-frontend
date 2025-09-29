import React, { useEffect, useRef, useState } from "react";
import GridMotion from "../../assets/ReactBitsCompo/GridMotion";
import '../../assets/globalcss/Background.css';
import { animate } from "animejs";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Navigation } from "swiper/modules";
import "swiper/css/effect-flip";
import "swiper/swiper.css"
import { useDispatch, useSelector } from "react-redux";
import { FaMicrophone, FaTools, FaGlobe } from "react-icons/fa";

// Modular Components
import StatsSection from "../../components/LandingSections/StatsSection";
import CommunityBenefits from "../../components/LandingSections/CommunityBenefits";
import MemberLogos from "../../components/LandingSections/MemberLogos";
import FooterSection from "../../components/LandingSections/FooterSection";
import MemberChart from "../../components/LandingSections/MemberChart";
import AuthModal from "../../components/LandingSections/AuthModal";
import ArtikelCyber from "../../components/LandingSections/ArtikelCyber";
import { stackItems } from "../../components/LandingSections/TechStack";

// Original components and functions
import Stepper, { Step } from "../../assets/ReactBitsCompo/Stepper";
import { SetFormModal } from "./LandingGrabalsState";
import ScrollReveal from "/src/assets/ReactBitsCompo/ScrollDown";
import Carousel from "../../assets/ReactBitsCompo/Carousel";


// Image logos for the LogoLoop component
const imageLogos = [
  "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/react.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/nodejs.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/python.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/javascript.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/typescript.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/docker.svg",
];


// --- PASANG LISTENER GLOBAL SEKALI ---

  const handleBgScroll = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0; // 0 → atas, 1 → bawah

  const baseDark = 1;
  const maxTeal = 60;

  // brightness naik sampai tengah lalu turun lagi
  const wave = Math.sin(scrollProgress * Math.PI); 
  // sin(0) = 0 → gelap, sin(0.5π) = 1 → terang, sin(π) = 0 → gelap lagi

  const greenTeal = `rgb(
    ${baseDark},
    ${baseDark + Math.floor(wave * maxTeal)},
    ${baseDark + Math.floor(wave * maxTeal)}
  )`;

  // left color juga ikut wave biar nyambung
  const leftBlue = baseDark + Math.floor(wave * 40);
  const leftColor = `rgb(${baseDark}, ${baseDark + 20}, ${leftBlue})`;

  const bg = `linear-gradient(135deg, ${leftColor} 0%, ${greenTeal} 100%)`;
  document.documentElement.style.setProperty("--dynamic-bg", bg);
};


  window.addEventListener("scroll", handleBgScroll);
  window.addEventListener("load", handleBgScroll);

 
export default function LandingGrabals() {

  const root = useRef(null);
  const swiperRef = useRef(null);
  const Pengenalan = useRef(null);

  const Elemen1 = useRef(null);
  const Elemen2 = useRef(null);
  const Elemen3 = useRef(null);
  const Elemen4 = useRef(null);
  const Elemen5 = useRef(null);
  const Elemen6 = useRef(null);
  const Elemen7 = useRef(null);
  const Elemen8 = useRef(null);
  const Elemen9 = useRef(null);
  const Elemen10 = useRef(null);
  const Elemen11 = useRef(null);
  const Elemen12 = useRef(null);
    const semuaelemen = [Elemen1, Elemen2, Elemen3, Elemen4, Elemen5, Elemen6, Elemen7, Elemen11, Elemen12];

   useEffect(() => {
  // kasih default style semua elemen sebelum animasi
  semuaelemen.forEach((el) => {
    if (el.current) {
      el.current.style.opacity = 0;
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(
            entry.target,
            { opacity: [0, 1]},
            { duration: 0.6, easing: "easeOutExpo" }
          );
          observer.unobserve(entry.target); // animasi sekali saja
        }
      });
    },
    { threshold: 0.2 } // muncul saat 20% elemen kelihatan
  );

  semuaelemen.forEach((el) => {
    if (el.current) {
      observer.observe(el.current);
    }
  });

  return () => observer.disconnect();
}, []);

useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === Elemen8.current) {
              animate(
                entry.target,
                { opacity: [0, 1], x: [100, 0] }, // geser dari kanan
                { duration: 0.7, easing: "easeOutExpo" }
              );
            }
            if (entry.target === Elemen9.current) {
              animate(
                entry.target,
                { opacity: [0, 1], x: [-100, 0] }, // geser dari kiri
                { duration: 0.7, easing: "easeOutExpo" }
              );
            }
            if (entry.target === Elemen10.current) {
              animate(
                entry.target,
                { opacity: [0, 1], x: [100, 0] }, // geser dari kanan lagi
                { duration: 0.7, easing: "easeOutExpo" }
              );
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    [Elemen8, Elemen9, Elemen10].forEach((el) => {
      if (el.current) {
        // default state
        el.current.style.opacity = 0;
        el.current.style.transform =
          el === Elemen9 ? "translateX(-100px)" : "translateX(100px)";

        observer.observe(el.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const imageLogos = [
    { src: "src/assets/foto/WhatsApp_Image_2025-09-24_at_19.20.57.jpeg", alt: "Company 1", href: "https://company1.com" },
    { src: "src/assets/foto/WhatsApp Image 2025-09-24 at 19.20.58.jpeg", alt: "Company 2", href: "https://company2.com" },
    { src: "src/assets/foto/WhatsApp Image 2025-09-24 at 19.20.59.jpeg", alt: "Company 3", href: "https://company3.com" },
    { src: "src/assets/foto/WhatsApp Image 2025-09-24 at 19.21.02.jpeg", alt: "Company 3", href: "https://company2.com" },
  ];

  return (
   <section
      ref={root}
      className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-white glow-bg"
      style={{ background: "var(--dynamic-bg)" }}
>
       <Swiper
  effect="flip"
  className="mySwiper relative overflow-hidden w-full h-full"
  grabCursor={false}
  speed={800}
  flipEffect={{ slideShadows: false }}
  modules={[EffectFlip, Navigation]}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
>
  <div className="swiper-wrapper flex transition-transform duration-700 ease-in-out">
    <SwiperSlide className="swiper-slide flex-shrink-0 w-full relative bg-slate-950 rounded-3xl">
      <div
      ref={Elemen1}
        id="hero"
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 px-4 md:px-12 py-16 md:py-24 w-[360px]"
      >
        <div className="flex flex-col items-start justify-center space-y-4 w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-200 py-2 rounded-lg">
            Selamat Datang di Grabals
          </h1>
          <p className="text-base mr-10 md:text-lg text-gray-400 leading-relaxed max-w-lg">
            Komunitas pengembang, designer, dan tech enthusiast yang saling
            berbagi, belajar, dan membangun proyek bersama.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <button className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold shadow-md transition duration-300"
            onClick={() => {
               swiperRef.current?.slideNext();
            }}
            >
              Bergabung Sekarang
            </button>
            <button 
            onClick={() => {
              Pengenalan.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-2 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-700 transition duration-300">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide className="swiper-slide flex-shrink-0 w-full h-full relative">
      <AuthModal/>
    </SwiperSlide>
  </div>
</Swiper>


  

  <div id="hero-2" ref={Elemen2} className="mt-40 w-full mt-5">
    
    <div id="stepper-pengenalan" ref={Pengenalan} className="h-full">
      <Stepper initialStep={1} backButtonText="Kembali" nextButtonText="Lanjut">
        {/* Step 1 */}
        <Step>
          <div className="grid grid-cols-[70%_30%] items-center gap-4">
            <div>
              <h2
                className="text-xl md:text-3xl font-semibold text-neutral-200"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Welcome To Grabals Community
              </h2>
              <p className="text-gray-400 text-base mt-3" style={{ fontFamily: "Inter, sans-serif" }}>
                Ikuti langkah disini untuk lebih mengenal kami!
              </p>
            </div>
            <div className="flex justify-center">
              <img
                className="rounded-2xl shadow-lg"
                src="src/assets/foto/WhatsApp_Image_2025-09-22_at_16.00.43-removebg-preview.png"
                alt="Welcome"
              />
            </div>
          </div>
        </Step>

        {/* Step 2 – Tentang Komunitas */}
        <Step>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div style={{ fontFamily: "Inter, sans-serif" }}>
              <h2 className="text-2xl font-semibold text-neutrak-100">Apa itu Grabals?</h2>
              <p className="text-gray-400 mt-3 leading-relaxed">
                Grabals Community adalah ruang kolaborasi untuk para kreator, developer, dan innovator
                yang ingin berbagi ide, belajar bersama, dan membangun proyek masa depan.
              </p>
            </div>
            <div>
              <img
                className="w-full h-60 object-cover rounded-xl shadow-md"
                src="src/assets/foto/WhatsApp_Image_2025-09-22_at_16.00.43-removebg-preview.png"
                alt="Community"
              />
            </div>
          </div>
        </Step>

        {/* Step 3 – Manfaat */}
        <Step>
          <div className="grid mb-5 grid-cols-1 md:grid-cols-3 gap-6 bg-white/5 border border-white/10 rounded-3xl p-4 flex flex-col justify-center items-center shadow-lg transition hover:scale-[1.02] duration-300">
            <h2 className="ml-5 text-xl text-neutral-200 font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>
              Pertumbuhan Member
            </h2>
            <MemberChart/>
          </div>

          <span className=" text-gray-300 text-center max-w-3xl leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            Sejak 2020, Grabals Community tumbuh dari komunitas kecil menjadi lebih dari 300 member di 2025, penuh kolaborasi, inovasi, dan pembelajaran bersama.
          </span>
         

        </Step>


        {/* Step 4 – Aktivitas */}
        <Step>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"  style={{ fontFamily: "Inter, sans-serif" }}>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-100">Apa yang Kami Lakukan?</h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: <FaMicrophone className="text-xl" />, label: "Meetup bulanan & sharing session" },
                  { icon: <FaTools className="text-xl" />, label: "Workshop & hackathon mini" },
                  { icon: <FaGlobe className="text-xl" />, label: "Diskusi online & forum ide" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl shadow-sm hover:scale-[1.02] transition">
                    {item.icon}
                    <span className="text-gray-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                className="w-full h-56 object-cover"
                src="https://media.istockphoto.com/id/1391693595/vector/man-and-woman-politician-debating.jpg?s=612x612&w=0&k=20&c=CNdHvLoHa5JzWZ_H5MNkNxGLtETfvaMjGOaHqi8UUok="
                alt="Activity"
              />
            </div>
          </div>
      </Step>


        <Step>
          <div className="h-[400px]">
                <Carousel
                  baseWidth={300}
                  autoplay={true}
                  autoplayDelay={3000}
                  pauseOnHover={true}
                  loop={true}
                  round={false}
                />
          </div>
          <span className="mb-5" style={{ fontFamily: "Inter, sans-serif" }}>
            Jangan Ragu Diskusi Bersama Kami
          </span>
        </Step>

        <Step>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div style={{ fontFamily: "Inter, sans-serif" }}>
              <h2 className="text-2xl font-semibold text-neutral-100">Tunjukkan Proyekmu!</h2>
              <p className="text-gray-400 mt-3">Bagikan portofolio atau proyek yang sedang kamu kerjakan.</p>
              <input
                type="url"
                placeholder="Link GitHub / Portfolio"
                className="w-full px-4 py-2 rounded-lg text-slate-500 mt-4"
              />
            </div>
            <div className="bg-neutral-900 rounded-xl h-56 flex items-center justify-center shadow-md">
              <span className="text-gray-500">📂 Preview Project</span>
            </div>
          </div>
        </Step>

        {/* Step 7 – Final */}
        <Step>
          <div className="flex flex-col items-center text-center py-10">
  <h2 className="text-4xl font-bold text-white tracking-tight">
    Selamat 
  </h2>
  <p className="text-gray-400 mt-4 max-w-md">
    Kamu sudah siap bergabung dengan <span className="text-emerald-400 font-medium">Grabals Community</span>.
  </p>
  <button
  onClick={() => {
     if (root.current) {
    const y = root.current.getBoundingClientRect().top + window.scrollY - 100; 
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  }}
    style={{ fontFamily: "Inter, sans-serif" }}
    className="mt-8 px-8 py-3 text-lg font-medium bg-emerald-500 hover:bg-emerald-600 
               text-white rounded-2xl shadow-lg transition-transform transform 
               hover:-translate-y-1 hover:shadow-xl"
  >
    Gabung Sekarang
  </button>
</div>

        </Step>
      </Stepper>

    </div>
    <hr className="border-t border-neutral-700 my-12 mt-20 w-80 mx-auto" />
    
    <div className="text-2xl mx-auto ml-5 slate-200" style={{ fontFamily: "Inter, sans-serif" }}>
      Temukan Motivasi Mu dan Berkolaborasi dengan kami
    </div>
    <StatsSection refs={{ Elemen3, Elemen4, Elemen5, Elemen6 }} />

  </div>

  <h2 className="text-2xl font-semibold text-slate-200 mx-auto text-center" style={{ fontFamily: "Inter, sans-serif" }}> Artikel Blog</h2>
  <ArtikelCyber/>

  {/* Community Benefits Section */}
  <CommunityBenefits refs={{ Elemen7, Elemen8, Elemen9, Elemen10 }} />

 <div className="p-4">
   <ScrollReveal
  baseOpacity={10}
  enableBlur={true}
  baseRotation={10}
  blurStrength={10}
>
  Kapan seseorang benar-benar maju? Saat dia berjuang sendirian? Tidak! Saat dia punya komunitas yang saling dukung. Dan itulah Grabals Community — tempatmu bertumbuh, berbagi, dan melangkah bersama.
</ScrollReveal>
 </div>

 <MemberLogos refs={{ Elemen11 }} imageLogos={imageLogos} />


{/* Footer Section */}
<FooterSection refs={{ Elemen12 }} />


</section>

  );
}

