import React, { useEffect, useRef, useState } from "react";
import '../../assets/globalcss/Background.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Navigation } from "swiper/modules";
import "swiper/css/effect-flip";
import "swiper/swiper.css";
import { animate } from "animejs";

// Import components
import HeroSection from "../../components/LandingSections/HeroSection";
import StepperSection from "../../components/LandingSections/StepperSection";
import AuthModal from "../../components/LandingSections/AuthModal";
import MemberChart from "../../components/LandingSections/MemberChart";
import StatsSection from "../../components/LandingSections/StatsSection";
import CommunityBenefits from "../../components/LandingSections/CommunityBenefits";
import FooterSection from "../../components/LandingSections/FooterSection";
import ArtikelCyber from "../../components/LandingSections/ArtikelCyber";
import TechStack from "../../components/LandingSections/TechStack";
import ScrollReveal from "/src/assets/ReactBitsCompo/ScrollDown";
import ShinyText from "/src/assets/ReactBitsCompo/ShinyText";
import LogoLoop from "/src/assets/ReactBitsCompo/LogoLoop";
import LaserFlow from "/src/assets/ReactBitsCompo/LaserFlow";

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
  
  // TRUE automatic discovery of ALL WebP photos in src/assets/foto-members directory
  useEffect(() => {
    const discoverAllPhotosAutomatically = async () => {
      try {
        // Gunakan import.meta.glob untuk benar-benar auto-detect SEMUA foto WebP
        const photoModules = import.meta.glob('/src/assets/foto-members/*.webp', { 
          eager: true,
          query: '?url',
          import: 'default'
        });
        
        const photoList = [];
        let memberIndex = 1;
        
        // Process ALL discovered photos automatically
        for (const [path, photoUrl] of Object.entries(photoModules)) {
          const fileName = path.split('/').pop().replace('.webp', '');
          
          // Skip the main logo/community photo if present
          if (!fileName.includes('WhatsApp_Image_2025-09-22')) {
            photoList.push({
              src: photoUrl,
              alt: `Member ${memberIndex}`,
              href: "#",
              fileName: fileName
            });
            memberIndex++;
          }
        }
        
        // Sort by filename for consistent order
        photoList.sort((a, b) => a.fileName.localeCompare(b.fileName));
        
        setMemberPhotos(photoList);
        
      } catch (error) {
        
        setMemberPhotos([]);
      }
    };
    
    discoverAllPhotosAutomatically();
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

  // Event handlers
  const handleExploreClick = () => {
    Pengenalan.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleJoinClick = () => {
    swiperRef.current?.slideNext();
  };

  const handleScrollToTop = () => {
    if (root.current) {
      const y = root.current.getBoundingClientRect().top + window.scrollY - 100; 
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

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
            <div ref={Elemen1}>
              <HeroSection 
                onExploreClick={handleExploreClick}
                onJoinClick={handleJoinClick}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex-shrink-0 w-full h-full relative">
            <AuthModal />
          </SwiperSlide>
        </div>
      </Swiper>

      <div id="hero-2" ref={Elemen2} className="mt-40 w-full mt-5">
        <div id="stepper-pengenalan" ref={Pengenalan} className="h-full">
          <StepperSection onJoinClick={handleScrollToTop} />
        </div>
        <hr className="border-t border-neutral-700 my-12 mt-20 w-80 mx-auto" />
        
        <div className="text-2xl mx-auto ml-5 slate-200" style={{ fontFamily: "Inter, sans-serif" }}>
          Temukan Motivasi Mu dan Berkolaborasi dengan kami
        </div>
        
        <StatsSection refs={{Elemen3, Elemen4, Elemen5, Elemen6}} />
      </div>

      <h2 className="text-2xl font-semibold text-slate-200 mx-auto text-center" style={{ fontFamily: "Inter, sans-serif" }}> 
        Artikel Blog
      </h2>
      <ArtikelCyber />

      {/* Kenapa Bergabung */}
      <CommunityBenefits refs={{Elemen7, Elemen8, Elemen9, Elemen10}} />

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

      <div ref={Elemen11} className="mt-12 sm:mt-20 items-center shadow-lg grid grid-cols-1 sm:grid-cols-[40%_60%] gap-4 sm:gap-0">
        <div className="h-20 flex items-center justify-center">
          <ShinyText
            text="Member"
            speed={10}
            className="text-neutral-600 text-lg font-bold"
          />
        </div>

        <div className="mt-8" style={{ height: '80px', position: 'relative', overflow: 'hidden'}}>
          {photosLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-500"></div>
                <span className="text-sm">Memuat foto member... ({imagesLoaded}/{memberPhotos.length})</span>
              </div>
            </div>
          ) : (
            <LogoLoop
              logos={memberPhotos}
              speed={150}
              direction="left"
              logoHeight={48}
              gap={50}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#151414ff"
              ariaLabel="Member photos"
            />
          )}
        </div>
      </div>

      {/* Footer */}
      <FooterSection refs={{Elemen12}} />
    </section>
  );
}