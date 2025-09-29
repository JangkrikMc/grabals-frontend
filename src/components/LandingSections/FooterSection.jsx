import LaserFlow from "../../assets/ReactBitsCompo/LaserFlow";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

/**
 * Komponen FooterSection - Footer website dengan desain yang lebih menarik
 * 
 * @param {Object} props - Properties komponen
 * @param {Object} props.refs - Referensi untuk animasi
 * @returns {JSX.Element} Komponen FooterSection
 */
const FooterSection = ({ refs }) => {
  const { Elemen12 } = refs;

  return (
    <footer ref={Elemen12} className="relative text-gray-300 px-8 py-12 mt-8 border-t border-gray-700 bg-raisin-black overflow-hidden">
      {/* Konten Footer */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo dan Brand */}
        <div className="flex items-center justify-center space-x-3 mb-6">
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M7.57932 35.4207C5.32303 32.1826 4 28.2458 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C19.7542 44 15.8174 42.677 12.5793 40.4207M7.57932 35.4207C8.93657 37.3685 10.6315 39.0634 12.5793 40.4207M7.57932 35.4207L16 27M12.5793 40.4207L21 32M16 27L20 23L25 28L21 32M16 27L21 32" 
              stroke="#C6AD7E" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M17 14H21M19 12V16" 
              stroke="#B4A2B5" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M28 17H34M31 14V20" 
              stroke="#66455A" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M32 29H36M34 27V31" 
              stroke="#D5D0DF" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="text-ecru font-bold text-xl" style={{ fontFamily: "Inter, sans-serif" }}>Grabals</h3>
        </div>

        {/* Deskripsi */}
        <p className="text-lavender-web text-lg mb-8 max-w-2xl mx-auto">
          Komunitas kolaboratif untuk developer, designer, dan tech enthusiast. Belajar dan bangun proyek bersama.
        </p>

        {/* Social Media */}
        <div className="mb-8">
          <h4 className="text-ecru font-semibold text-lg mb-4" style={{ fontFamily: "Inter, sans-serif" }}>Ikuti Kami</h4>
          <div className="flex justify-center gap-4">
            <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-eggplant/30 hover:bg-eggplant transition-colors">
              <FaTwitter className="text-lavender-web text-lg" />
            </a>
            <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-eggplant/30 hover:bg-eggplant transition-colors">
              <FaInstagram className="text-lavender-web text-lg" />
            </a>
            <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-eggplant/30 hover:bg-eggplant transition-colors">
              <FaLinkedin className="text-lavender-web text-lg" />
            </a>
            <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-eggplant/30 hover:bg-eggplant transition-colors">
              <FaGithub className="text-lavender-web text-lg" />
            </a>
            <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-eggplant/30 hover:bg-eggplant transition-colors">
              <FaDiscord className="text-lavender-web text-lg" />
            </a>
          </div>
        </div>

        {/* Kontak Info */}
        <div className="mb-8">
          <p className="text-rose-quartz font-medium mb-2">Hubungi Kami:</p>
          <p className="text-lavender-web mb-1">info@grabals.com</p>
          <p className="text-lavender-web">+62 812 3456 7890</p>
        </div>
      </div>

      {/* Background LaserFlow */}
      <div className="absolute inset-0 z-1000 pointer-events-none h-full opacity-30">
        <LaserFlow />
      </div>

      {/* Copyright */}
      <div className="relative z-10 text-center text-rose-quartz text-sm pt-8 border-t border-eggplant/30">
        © {new Date().getFullYear()} Grabals. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;