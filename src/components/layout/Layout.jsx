import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import LoginModal from "../auth/LoginModal";
import FooterSection from "../LandingSections/FooterSection";

/**
 * Komponen Layout - Wrapper untuk semua halaman dengan header dan sidebar
 * 
 * @param {Object} props - Properties komponen
 * @param {React.ReactNode} props.children - Konten halaman
 * @param {boolean} props.isLoginModalOpen - Status modal login (terbuka/tertutup) - opsional
 * @param {Function} props.setIsLoginModalOpen - Fungsi untuk mengubah status modal login - opsional
 * @returns {JSX.Element} Komponen Layout
 */
const Layout = ({ children, isLoginModalOpen: externalLoginModalOpen, setIsLoginModalOpen: externalSetLoginModalOpen }) => {
  // Gunakan state internal jika tidak ada state eksternal yang diberikan
  const [internalIsSidebarOpen, setInternalIsSidebarOpen] = useState(false);
  const [internalIsLoginModalOpen, setInternalIsLoginModalOpen] = useState(false);

  // Gunakan state eksternal jika diberikan, jika tidak gunakan state internal
  const isSidebarOpen = internalIsSidebarOpen;
  const setIsSidebarOpen = setInternalIsSidebarOpen;
  
  const isLoginModalOpen = externalLoginModalOpen !== undefined ? externalLoginModalOpen : internalIsLoginModalOpen;
  const setIsLoginModalOpen = externalSetLoginModalOpen || setInternalIsLoginModalOpen;

  // Fungsi untuk toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Fungsi untuk menutup sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Fungsi untuk membuka modal login
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  // Fungsi untuk menutup modal login
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  // Dummy refs untuk footer
  const footerRefs = {
    Elemen12: React.createRef()
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-white">
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        closeSidebar={closeSidebar} 
        openLoginModal={openLoginModal}
      />

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        closeModal={closeLoginModal} 
      />

      {/* Main Content */}
      <main className="pt-16 min-h-[calc(100vh-300px)]">
        {children}
      </main>

      {/* Footer */}
      <FooterSection refs={footerRefs} />
    </div>
  );
};

export default Layout;