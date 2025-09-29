import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoGrabals from "../../assets/icons/new/magic-wand.svg";

/**
 * Komponen Header - Header interaktif dengan efek transparansi saat scroll
 * Menggunakan SVG menu baru dan warna kustom dari CustomColors.css
 * 
 * @param {Object} props - Properties komponen
 * @param {Function} props.toggleSidebar - Fungsi untuk membuka/menutup sidebar
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
          ? "bg-raisin-black shadow-lg" 
          : "bg-raisin-black/70 backdrop-blur-sm"
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
              style={{ filter: "invert(1)" }}
            />
            <span className={`text-xl font-bold ${
              scrolled ? "text-ecru" : "text-white"
            } transition-colors duration-300`}>
              Grabals
            </span>
          </div>

          {/* Menu Navigasi Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-lavender-web hover:text-white transition-colors"
            >
              Beranda
            </Link>
            <Link 
              to="/artikel" 
              className="text-lavender-web hover:text-white transition-colors"
            >
              Artikel
            </Link>
            <Link 
              to="/about" 
              className="text-lavender-web hover:text-white transition-colors"
            >
              Tentang Kami
            </Link>
          </nav>

          {/* Tombol Menu */}
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-eggplant/50 transition-colors"
            aria-label="Buka Menu"
          >
            <svg 
              fill="#D5D0DF" 
              width="24" 
              height="24" 
              viewBox="0 0 70 70" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M56.821,6.614c2.189,0,4.071,1.969,4.071,4.178c0,2.208-1.666,3.791-3.855,3.791H12.963c-2.188,0-3.963-1.792-3.963-4
                  c0-2.209,1.774-4,3.963-4h43.62 M57.037,2.583H12.963c-4.391,0-7.963,3.589-7.963,8s3.572,8,7.963,8h44.074
                  c4.391,0,7.963-3.589,7.963-8S61.428,2.583,57.037,2.583L57.037,2.583z"/>
                <path d="M52.896,54.677c2.143,0,3.997,1.906,3.997,4.115c0,2.208-1.631,3.791-3.773,3.791H12.882c-2.144,0-3.882-1.792-3.882-4
                  c0-2.209,1.738-4,3.882-4h39.701 M53.119,50.583H12.882c-4.346,0-7.882,3.589-7.882,8s3.536,8,7.882,8h40.237
                  c4.346,0,7.881-3.589,7.881-8S57.465,50.583,53.119,50.583L53.119,50.583z"/>
                <path d="M36.823,30.583c2.19,0,4.07,2,4.07,4.209c0,2.208-1.666,3.791-3.855,3.791H12.963c-2.188,0-3.963-1.792-3.963-4
                  c0-2.209,1.774-4,3.963-4h23.62 M37.037,26.583H12.963c-4.391,0-7.963,3.589-7.963,8s3.572,8,7.963,8h24.074
                  c4.391,0,7.963-3.589,7.963-8S41.428,26.583,37.037,26.583L37.037,26.583z"/>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;