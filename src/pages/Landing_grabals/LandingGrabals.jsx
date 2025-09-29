import React, { useEffect, useRef, useState } from "react";
import GridMotion from "../../assets/ReactBitsCompo/GridMotion";
import '../../assets/globalcss/Background.css';
import { 
  FaReact, FaDocker, FaNodeJs, FaJsSquare, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaPython, FaPhp, FaJava, FaDatabase, 
  FaUser,
  FaStarHalf,
  FaStar,
  FaHeart,
  FaSmile,
  FaFire,
  FaHeartBroken,
  FaSadCry,
  FaFireAlt,
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaChalkboardTeacher,
  FaAward,
  FaComments
} from "react-icons/fa";

// Import modular components
import CommunityBenefits from "../../components/LandingSections/CommunityBenefits";
import MemberLogos from "../../components/LandingSections/MemberLogos";
import FooterSection from "../../components/LandingSections/FooterSection";
import ArtikelCyber from "../../components/LandingSections/ArtikelCyber";
import { SiTypescript, SiMongodb, SiMysql, SiNextdotjs, SiTailwindcss, SiReact } from "react-icons/si";
import Carousel from "../../assets/ReactBitsCompo/Carousel";
import Stepper, { Step } from "../../assets/ReactBitsCompo/Stepper";
import CountUp from "../../assets/ReactBitsCompo/CountUp";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaMicrophone, FaTools, FaGlobe } from "react-icons/fa";
import ElasticSlider from "../../assets/ReactBitsCompo/ElasticSlider";
import { animate, createAnimatable, utils } from "animejs";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Navigation } from "swiper/modules";
import "swiper/css/effect-flip";
import "swiper/swiper.css"
import { useDispatch, useSelector } from "react-redux";

import { SetFormModal } from "./LandingGrabalsState";
import LogoLoop from "/src/assets/ReactBitsCompo/LogoLoop";
import ShinyText from "/src/assets/ReactBitsCompo/ShinyText";
import LaserFlow from "/src/assets/ReactBitsCompo/LaserFlow";
import ScrollReveal from "/src/assets/ReactBitsCompo/ScrollDown";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const stackItems = [
  <FaReact key="react" size={48} color="#61DBFB" />,
  <FaDocker key="docker" size={48} color="#0db7ed" />,
  <FaNodeJs key="nodejs" size={48} color="#68a063" />,
  <FaJsSquare key="js" size={48} color="#f7df1e" />,
  <FaHtml5 key="html" size={48} color="#e34f26" />,
  <FaCss3Alt key="css" size={48} color="#264de4" />,
  <SiTypescript key="ts" size={48} color="#007acc" />,
  <FaPython key="python" size={48} color="#306998" />,
  <FaGitAlt key="git" size={48} color="#f1502f" />,
  <FaPhp key="php" size={48} color="#777bb4" />,
  <FaJava key="java" size={48} color="#f89820" />,
  <SiMongodb key="mongodb" size={48} color="#4db33d" />,
  <SiMysql key="mysql" size={48} color="#4479a1" />,
  <SiNextdotjs key="nextjs" size={48} color="#000000" />,
  <SiTailwindcss key="tailwind" size={48} color="#06b6d4" />,
  <FaDatabase key="database" size={48} color="#f29111" />
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

  // Auto-deteksi foto member dengan WebP untuk performa lebih baik
  const [memberPhotos, setMemberPhotos] = useState([]);
  const [photosLoading, setPhotosLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  
  // Robust member photos loading with guaranteed fallback
  useEffect(() => {
    const loadMemberPhotos = async () => {
      try {
        // Import member photos using Promise.all for better error handling
        const photoImports = [
          import('/src/assets/foto-members/WhatsApp_Image_2025-09-24_at_19.20.57.webp?url'),
          import('/src/assets/foto-members/WhatsApp_Image_2025-09-24_at_19.20.58.webp?url'),
          import('/src/assets/foto-members/WhatsApp_Image_2025-09-24_at_19.20.59.webp?url'),
          import('/src/assets/foto-members/WhatsApp_Image_2025-09-24_at_19.21.02.webp?url')
        ];
        
        const photoUrls = await Promise.all(photoImports);
        
        const photoList = photoUrls.map((module, index) => ({
          src: module.default,
          alt: `Member ${index + 1}`,
          href: "#",
          fileName: `member-${index + 1}`
        }));
        
        console.log('Loaded member photos successfully:', photoList);
        setMemberPhotos(photoList);
        setPhotosLoading(false);
        
      } catch (error) {
        console.error('Error loading member photos, using placeholder fallback:', error);
        // Reliable fallback with placeholder data that guarantees UI works
        const placeholderPhotos = [
          { src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMjQiIGZpbGw9IiMzNzQxNTEiLz4KPHN2ZyB4PSIxMiIgeT0iMTIiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzlDQTNBRiI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTUuNzUgNmEzLjc1IDMuNzUgMCAxMS03LjUgMCAzLjc1IDMuNzUgMCAwMTcuNSAwek00LjUwMSAyMC4xMThhNy41IDcuNSAwIDAxMTQuOTk4IDBNMTUuNzUgNmEzLjc1IDMuNzUgMCAxMS03LjUgMCAzLjc1IDMuNzUgMCAwMTcuNSAweiIgLz4KICA8L3N2Zz4KPC9zdmc+Cjwvc3ZnPgo=', alt: 'Member 1', href: '#', fileName: 'member-1' },
          { src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMjQiIGZpbGw9IiMzNzQxNTEiLz4KPHN2ZyB4PSIxMiIgeT0iMTIiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzlDQTNBRiI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTUuNzUgNmEzLjc1IDMuNzUgMCAxMS03LjUgMCAzLjc1IDMuNzUgMCAwMTcuNSAwek00LjUwMSAyMC4xMThhNy41IDcuNSAwIDAxMTQuOTk4IDBNMTUuNzUgNmEzLjc1IDMuNzUgMCAxMS03LjUgMCAzLjc1IDMuNzUgMCAwMTcuNSAweiIgLz4KICA8L3N2Zz4KPC9zdmc+Cjwvc3ZnPgo=', alt: 'Member 2', href: '#', fileName: 'member-2' },
          { src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMjQiIGZpbGw9IiMzNzQxNTEiLz4KPHN2ZyB4PSIxMiIgeT0iMTIiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzlDQTNBRiI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTUuNzUgNmEzLjc1IDMuNzUgMCAxMS03LjUgMCAzLjc1IDMuNzUgMCAwMTcuNSAwek00LjUwMSAyMC4xMThhNy41IDcuNSAwIDAxMTQuOTk4IDBNMTUuNzUgNmEzLjc1IDMuNzUgMCAxMS03LjUgMCAzLjc1IDMuNzUgMCAwMTcuNSAweiIgLz4KICA8L3N2Zz4KPC9zdmc+Cjwvc3ZnPgo=', alt: 'Member 3', href: '#', fileName: 'member-3' },
          { src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMjQiIGZpbGw9IiMzNzQxNTEiLz4KPHN2ZyB4PSIxMiIgeT0iMTIiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzlDQTNBRiI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTUuNzUgNmEzLjc1IDMuNzUgMCAxMS03LjUgMCAzLjc1IDMuNzUgMCAwMTcuNSAwek00LjUwMSAyMC4xMThhNy41IDcuNSAwIDAxMTQuOTk4IDBNMTUuNzUgNmEzLjc1IDMuNzUgMCAxMS03LjUgMCAzLjc1IDMuNzUgMCAwMTcuNSAweiIgLz4KICA8L3N2Zz4KPC9zdmc+Cjwvc3ZnPgo=', alt: 'Member 4', href: '#', fileName: 'member-4' }
        ];
        
        console.log('Using placeholder member photos due to import failure');
        setMemberPhotos(placeholderPhotos);
        setPhotosLoading(false);
      }
    };
    
    loadMemberPhotos();
  }, []);

  // Fungsi untuk handle loading state foto
  useEffect(() => {
    let loadedCount = 0;
    const totalPhotos = memberPhotos.length;
    
    const handleImageLoad = () => {
      loadedCount++;
      setImagesLoaded(loadedCount);
      if (loadedCount === totalPhotos) {
        setPhotosLoading(false);
      }
    };

    // Preload semua foto member
    memberPhotos.forEach((photo) => {
      const img = new Image();
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Tetap count meskipun error
      img.src = photo.src;
    });
  }, [memberPhotos]);

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
        className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-4 px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16 lg:py-24"
      >
        <div className="flex flex-col items-start justify-center space-y-4 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-200 py-2 rounded-lg">
            Selamat Datang di Grabals
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-lg pr-2 sm:pr-4 md:pr-10">
            Komunitas pengembang, designer, dan tech enthusiast yang saling
            berbagi, belajar, dan membangun proyek bersama.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <button className="px-4 sm:px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium sm:font-semibold text-sm sm:text-base shadow-md transition duration-300"
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
            className="px-4 sm:px-6 py-2 border border-white text-white rounded-lg font-medium sm:font-semibold text-sm sm:text-base hover:bg-white hover:text-cyan-700 transition duration-300">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide className="swiper-slide flex-shrink-0 w-full h-full relative">
      <LoginOrSignUpModal/>
    </SwiperSlide>
  </div>
</Swiper>
  
  <div id="hero-2" ref={Elemen2} className="mt-40 w-full mt-5">
    
    <div id="stepper-pengenalan" ref={Pengenalan} className="h-full">
      <Stepper initialStep={1} backButtonText="Kembali" nextButtonText="Lanjut">
        {/* Step 1 */}
        <Step>
          <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] items-center gap-4 sm:gap-6">
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-200"
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
                className="rounded-2xl shadow-lg w-full max-w-xs"
                src="/assets/foto/WhatsApp_Image_2025-09-22_at_16.00.43-removebg-preview.webp"
                alt="Welcome"
              />
            </div>
          </div>
        </Step>

        {/* Step 2 – Tentang Komunitas */}
        <Step>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div style={{ fontFamily: "Inter, sans-serif" }}>
              <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100">Apa itu Grabals?</h2>
              <p className="text-gray-400 mt-3 leading-relaxed">
                Grabals Community adalah ruang kolaborasi untuk para kreator, developer, dan innovator
                yang ingin berbagi ide, belajar bersama, dan membangun proyek masa depan.
              </p>
            </div>
            <div>
              <img
                className="w-full h-60 object-cover rounded-xl shadow-md"
                src="/assets/foto/WhatsApp_Image_2025-09-22_at_16.00.43-removebg-preview.webp"
                alt="Community"
              />
            </div>
          </div>
        </Step>

        {/* Step 3 – Manfaat */}
        <Step>
          <div className="mb-5 bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-6 flex flex-col justify-center items-center shadow-lg transition hover:scale-[1.02] duration-300">
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
    
     <div className="text-2xl mx-auto ml-5 slate-200"  style={{ fontFamily: "Inter, sans-serif" }}>
     Temukan Motivasi Mu dan Berkolaborasi dengan kami
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-2 sm:px-4 p-4">


  
  
  {/* Box 1 */}
  <div ref={Elemen3} className="  p-4 flex flex-col justify-center items-center shadow-lg transition hover:scale-[1.02] duration-300">
    <h1 className="mb-3 text-xl">
      <FaUser />
    </h1>
    <h1 className="text-xl font-bold mb-3">
      <CountUp
        from={0}
        to={302}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text"
      />
    </h1>
    <span className="ml-4 text-neutral-200 text-sm">
      Orang Dalam Komunitas
    </span>
  </div>

  {/* Box 2 */}
  <div ref={Elemen4} className=" p-4  shadow-md grid grid-rows-4 gap-4">
    <ElasticSlider
      leftIcon={<FaStarHalf />}
      rightIcon={<FaStar />}
      startingValue={1}
      defaultValue={1}
      maxValue={5}
      isStepped
      stepSize={1}
    />
    <ElasticSlider
      leftIcon={<FaHeartBroken className="text-red-400" />}
      rightIcon={<FaHeart className="text-red-600" />}
      startingValue={2}
      defaultValue={2}
      maxValue={5}
      isStepped
      stepSize={1}
    />
    <ElasticSlider
      leftIcon={<FaSadCry className="text-yellow-400" />}
      rightIcon={<FaSmile className="text-yellow-600" />}
      startingValue={3}
      defaultValue={3}
      maxValue={10}
      isStepped
      stepSize={2}
    />  
    <ElasticSlider
      leftIcon={<FaFireAlt className="text-orange-400" />}
      rightIcon={<FaFire className="text-orange-600" />}
      startingValue={1}
      defaultValue={1}
      maxValue={5}
      isStepped
      stepSize={1}
    />
  </div>

  {/* Box 3 (baru) */}
  <div ref={Elemen5} className="  p-4 flex flex-col justify-center items-center  shadow-lg transition hover:scale-[1.02] duration-300">
  
    <h1 className="mb-3 text-xl">
      <FaUsers />
    </h1>
    <h1 className="text-xl font-bold mb-3">
      <CountUp
        from={0}
        to={120}
        separator=","
        direction="up"
        duration={1.2}
        className="count-up-text"
      />
    </h1>
    <span className="ml-4 text-neutral-200 text-sm">
      Proyek Terselesaikan
    </span>
  </div>

    

  {/* Box 4 (baru) */}
  <div ref={Elemen6} className=" p-4 flex flex-col justify-center items-center  shadow-lg transition hover:scale-[1.02] duration-300">
    <h1 className="mb-3 text-xl">
      <FaGlobe />
    </h1>
    <h1 className="text-xl font-bold mb-3">
      <CountUp
        from={0}
        to={15}
        separator=","
        direction="up"
        duration={1.5}
        className="count-up-text"
      />
    </h1>
    <span className="ml-4 text-neutral-200 text-sm">
      Negara Terdampak
    </span>
  </div>
</div>

  </div>

  <h2 className="text-2xl font-semibold text-slate-200 mx-auto text-center" style={{ fontFamily: "Inter, sans-serif" }}> Artikel Blog</h2>
  <ArtikelCyber/>

  {/* Kenapa Bergabung - Using Modular Component */}
  <CommunityBenefits refs={{ Elemen7, Elemen8, Elemen9, Elemen10 }} />

 <div className="py-8 px-4 text-center max-w-4xl mx-auto">
   <ScrollReveal
     baseOpacity={10}
     enableBlur={true}
     baseRotation={10}
     blurStrength={10}
   >
     <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic font-light" style={{ fontFamily: "Inter, sans-serif" }}>
       Kapan seseorang benar-benar maju? Saat dia berjuang sendirian? Tidak! Saat dia punya komunitas yang saling dukung. Dan itulah Grabals Community — tempatmu bertumbuh, berbagi, dan melangkah bersama.
     </p>
   </ScrollReveal>
 </div>

 {/* Member Photos - Using Modular Component */}
 <MemberLogos 
   refs={{ Elemen11 }} 
   imageLogos={memberPhotos}
   photosLoading={photosLoading}
   imagesLoaded={imagesLoaded}
 />


{/* Footer - Using Modular Component */}
<FooterSection refs={{ Elemen12 }} />


</section>

  );
}

const MemberChart = () => {
  const data = {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Jumlah Member", // label tetap bisa ada, tapi legend disembunyikan
        data: [50, 120, 180, 230, 270, 302],
        borderColor: "rgba(200,200,200,0.9)", // silver line
        borderWidth: 2,
        backgroundColor: "rgba(0,0,0,0)", // transparan
        tension: 0.4,
        fill: false,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: "rgba(200,200,200,1)", // silver titik
        pointBorderColor: "rgba(200,200,200,0.9)",
        pointHoverBackgroundColor: "rgba(220,220,220,1)", // sedikit lebih terang saat hover
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }, // legend dimatikan
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(50,50,50,0.9)", // tooltip gelap biar kontras
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      x: {
        ticks: { color: "rgba(200,200,200,0.9)" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      y: {
        ticks: { color: "rgba(200,200,200,0.9)" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };

  return (
    <div className="p-6 rounded-2xl shadow-lg" style={{ backgroundColor: "transparent"}}>
      <Line data={data} options={options}  />
    </div>
  );
};


const LoginOrSignUpModal = () => {
  const Modal = useRef(null);
  const Dispatch = useDispatch();
  const ActionModal = useSelector((state) => state.landing_page.form_modal)
  useEffect(() => {
      animate(
        Modal.current,
        {
          opacity: [0, 1],
        },
        {
          duration: 0.6,
          easing: "easeOutExpo",
        }
      );
  }, [ActionModal])
  return(
    <>
      <div ref={Modal} className="w-full max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-4 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-24 bg-slate-950 rounded-3xl min-h-[400px] sm:min-h-[458px]">
       {ActionModal == "login" ? (
         <div className="px-2 sm:px-4 lg:ml-8 space-y-4">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-200 py-2 rounded-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Login
            </h1>
            <form className="space-y-8 max-w-lg w-full">
              <div>
                <label className="block text-gray-300 mb-1" htmlFor="nama">
                  Nama
                </label>
                <input
                  id="nama"
                  type="text"
                  placeholder="Masukkan nama"
                  className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1" htmlFor="whatsapp">
                  Nomor WhatsApp
                </label>
                <input
                  id="whatsapp"
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold shadow-md transition duration-300"
              >
                Login
              </button>

              <p className="text-center text-gray-400 mt-4">
                Belum terdaftar?{" "}
                <button className="text-emerald-400 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  Dispatch(SetFormModal("daftar"))
                }}>
                  Daftar
                </button>
              </p>
            </form>
          </div>
       ) : (
        <div className="px-2 sm:px-4 lg:ml-8 space-y-4">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-200 py-2 rounded-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Daftar
          </h1>
          <form className="space-y-8 max-w-lg w-full">
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="nama">
                Nama
              </label>
              <input
                id="nama"
                type="text"
                placeholder="Masukkan nama"
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1" htmlFor="whatsapp">
                Nomor WhatsApp
              </label>
              <input
                id="whatsapp"
                type="tel"
                placeholder="08xxxxxxxxxx"
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold shadow-md transition duration-300"
            >
              Daftar
            </button>
            <p className="text-center text-gray-400 mt-4">
              Sudah punya akun?{" "}
              <button
                className="text-emerald-400 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  Dispatch(SetFormModal("login"));
                }}
              >
                Login
              </button>
            </p>
          </form>
        </div>
       )}

      </div>
    </>
  )
}

