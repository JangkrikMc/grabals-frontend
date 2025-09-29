import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { animate } from "@motionone/dom";

/**
 * Komponen Sidebar - Sidebar navigasi dengan animasi
 * Menggunakan warna kustom dari CustomColors.css
 * 
 * @param {Object} props - Properties komponen
 * @param {boolean} props.isOpen - Status sidebar (terbuka/tertutup)
 * @param {Function} props.closeSidebar - Fungsi untuk menutup sidebar
 * @param {Function} props.openLoginModal - Fungsi untuk membuka modal login
 * @returns {JSX.Element} Komponen Sidebar
 */
const Sidebar = ({ isOpen, closeSidebar, openLoginModal }) => {
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  // Effect untuk menangani klik di luar sidebar
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    // Tambahkan event listener untuk klik di luar sidebar
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup event listener saat komponen unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, closeSidebar]);

  // Effect untuk animasi sidebar
  useEffect(() => {
    if (isOpen && sidebarRef.current && overlayRef.current) {
      // Animasi membuka sidebar
      sidebarRef.current.style.transform = "translateX(100%)";
      animate(
        sidebarRef.current,
        { transform: ["translateX(100%)", "translateX(0%)"] },
        { duration: 0.3, easing: "ease-out" }
      );
      
      // Animasi overlay
      overlayRef.current.style.opacity = "0";
      animate(
        overlayRef.current,
        { opacity: [0, 1] },
        { duration: 0.3 }
      );
    } else if (!isOpen && sidebarRef.current && overlayRef.current) {
      // Animasi menutup sidebar
      animate(
        sidebarRef.current,
        { transform: ["translateX(0%)", "translateX(100%)"] },
        { duration: 0.3, easing: "ease-in" }
      );
      
      // Animasi overlay
      animate(
        overlayRef.current,
        { opacity: [1, 0] },
        { duration: 0.3 }
      );
    }
  }, [isOpen]);

  // Jika sidebar tertutup, jangan render apapun
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay dengan efek blur */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <div 
        ref={sidebarRef}
        className="absolute top-0 right-0 w-72 h-full bg-raisin-black shadow-xl flex flex-col"
        style={{ transform: "translateX(100%)" }}
      >
        {/* Header Sidebar */}
        <div className="flex justify-between items-center p-4 border-b border-eggplant/30">
          <h2 className="text-xl font-bold text-ecru">Menu</h2>
          <button 
            onClick={closeSidebar}
            className="p-2 rounded-full hover:bg-eggplant/30 transition-colors"
            aria-label="Tutup Menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-lavender-web" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>

        {/* Menu Navigasi */}
        <nav className="p-4 flex-grow">
          <ul className="space-y-4">
            <li>
              <Link 
                to="/"
                onClick={closeSidebar}
                className="block py-2 px-4 text-lavender-web hover:bg-eggplant/30 rounded-lg transition-colors"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link 
                to="/artikel"
                onClick={closeSidebar}
                className="block py-2 px-4 text-lavender-web hover:bg-eggplant/30 rounded-lg transition-colors"
              >
                Artikel
              </Link>
            </li>
            <li>
              <Link 
                to="/about"
                onClick={closeSidebar}
                className="block py-2 px-4 text-lavender-web hover:bg-eggplant/30 rounded-lg transition-colors"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link 
                to="/syarat-ketentuan"
                onClick={closeSidebar}
                className="block py-2 px-4 text-lavender-web hover:bg-eggplant/30 rounded-lg transition-colors"
              >
                Syarat & Ketentuan
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer Sidebar dengan tombol login */}
        <div className="mt-auto border-t border-eggplant/30 p-4">
          <button
            onClick={() => {
              closeSidebar();
              openLoginModal();
            }}
            className="w-full py-3 px-4 bg-eggplant hover:bg-secondary-button-hover text-lavender-web rounded-lg transition-colors font-medium"
          >
            Masuk / Daftar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;