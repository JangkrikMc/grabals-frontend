import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoGrabals from "../../assets/logo-grabals.svg";
import menuDots from "../../assets/menu-dots.svg";

/**
 * Komponen Header - Header interaktif dengan efek transparansi saat scroll
 * 
 * @returns {JSX.Element} Komponen Header
 */
const Header = ({ toggleSidebar }) => {
  const [scrolled, setScrolled] = useState(false);

  // Effect untuk mendeteksi scroll dan mengubah tampilan header
  useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 50px, set scrolled menjadi true
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Tambahkan event listener untuk scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-neutral-900 shadow-lg" 
          : "bg-neutral-900/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo dan Nama */}
          <div className="flex items-center space-x-2">
            <img 
              src={logoGrabals} 
              alt="Grabals Logo" 
              className="h-10 w-10"
            />
            <span className={`text-xl font-bold ${
              scrolled ? "text-emerald-500" : "text-white"
            } transition-colors duration-300`}>
              Grabals
            </span>
          </div>

          {/* Menu Navigasi Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Beranda
            </Link>
            <Link 
              to="/artikel" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Artikel
            </Link>
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Tentang Kami
            </Link>
          </nav>

          {/* Tombol Menu (3 titik) */}
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-neutral-800 transition-colors"
            aria-label="Buka Menu"
          >
            <img 
              src={menuDots} 
              alt="Menu" 
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;