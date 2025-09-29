import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { animate } from "@motionone/dom";

/**
 * Komponen LoginModal - Modal popup untuk login dan register
 * 
 * @param {Object} props - Properties komponen
 * @param {boolean} props.isOpen - Status modal (terbuka/tertutup)
 * @param {Function} props.closeModal - Fungsi untuk menutup modal
 * @returns {JSX.Element} Komponen LoginModal
 */
const LoginModal = ({ isOpen, closeModal }) => {
  const [isLogin, setIsLogin] = useState(true);
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  // State untuk form login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // State untuk form register
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerBirthdate, setRegisterBirthdate] = useState("");

  // Effect untuk menangani klik di luar modal
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    // Tambahkan event listener untuk klik di luar modal
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup event listener saat komponen unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, closeModal]);

  // Effect untuk animasi modal
  useEffect(() => {
    if (isOpen && modalRef.current && overlayRef.current) {
      // Animasi membuka modal
      modalRef.current.style.opacity = "0";
      modalRef.current.style.transform = "scale(0.9)";
      animate(
        modalRef.current, 
        { opacity: [0, 1], scale: [0.9, 1] }, 
        { duration: 0.3, easing: "ease-out" }
      );
      
      // Animasi overlay
      overlayRef.current.style.opacity = "0";
      animate(
        overlayRef.current,
        { opacity: [0, 1] },
        { duration: 0.3 }
      );
    } else if (!isOpen && modalRef.current && overlayRef.current) {
      // Animasi menutup modal
      animate(
        modalRef.current, 
        { opacity: [1, 0], scale: [1, 0.9] }, 
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

  // Handler untuk login
  const handleLogin = (e) => {
    e.preventDefault();
    // Contoh integrasi dengan backend
    // Login dengan email dan password
    // Implementasi login sebenarnya akan mengirim request ke backend
    // Contoh: 
    // api.post('/auth/login', { email: loginEmail, password: loginPassword })
    //   .then(response => {
    //     // Simpan token ke localStorage
    //     localStorage.setItem('token', response.data.token);
    //     closeModal();
    //   })
    //   .catch(error => {
    //     console.error('Login gagal:', error);
    //   });
  };

  // Handler untuk register
  const handleRegister = (e) => {
    e.preventDefault();
    // Contoh integrasi dengan backend
    // Register dengan data berikut:
    const registerData = {
      name: registerName, 
      email: registerEmail, 
      password: registerPassword,
      birthdate: registerBirthdate
    };
    
    console.log('Register data:', registerData);
    
    // Implementasi register sebenarnya akan mengirim request ke backend
    // Contoh:
    // api.post('/auth/register', { 
    //   name: registerName, 
    //   email: registerEmail, 
    //   password: registerPassword,
    //   birthdate: registerBirthdate
    // })
    //   .then(response => {
    //     // Redirect ke login
    //     setIsLogin(true);
    //   })
    //   .catch(error => {
    //     console.error('Register gagal:', error);
    //   });
  };

  // Handler untuk login dengan Google
  const handleGoogleLogin = () => {
    // Implementasi login dengan Google
    // Login dengan Google
    // Contoh integrasi dengan backend:
    // window.location.href = 'https://api.grabals.com/auth/google';
  };

  // Jika modal tertutup, jangan render apapun
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center">
      {/* Overlay dengan efek blur */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={closeModal}
      />

      {/* Modal */}
      <div 
        ref={modalRef}
        className="relative bg-raisin-black rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden"
        style={{ opacity: 0, transform: "scale(0.9)" }}
      >
        {/* Header Modal */}
        <div className="flex justify-between items-center p-5 border-b border-neutral-800">
          <h2 className="text-xl font-bold text-ecru">
            {isLogin ? "Masuk ke Akun" : "Daftar Akun Baru"}
          </h2>
          <button 
            onClick={closeModal}
            className="p-2 rounded-full hover:bg-neutral-800 transition-colors"
            aria-label="Tutup"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-white" 
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

        {/* Body Modal */}
        <div className="p-5">
          {/* Tab Selector */}
          <div className="flex mb-6 bg-neutral-800 rounded-lg p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-md transition-colors ${
                isLogin ? "bg-eggplant text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Masuk
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-md transition-colors ${
                !isLogin ? "bg-eggplant text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Daftar
            </button>
          </div>

          {/* Login dengan Google */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-white text-gray-800 rounded-lg mb-4 hover:bg-gray-100 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.1711 8.36788H17.4998V8.33329H9.99984V11.6666H14.7094C14.0223 13.607 12.1761 15 9.99984 15C7.23859 15 4.99984 12.7612 4.99984 9.99996C4.99984 7.23871 7.23859 4.99996 9.99984 4.99996C11.2744 4.99996 12.4344 5.48079 13.3169 6.26621L15.6744 3.90871C14.1886 2.52204 12.1969 1.66663 9.99984 1.66663C5.39775 1.66663 1.6665 5.39788 1.6665 9.99996C1.6665 14.602 5.39775 18.3333 9.99984 18.3333C14.6019 18.3333 18.3332 14.602 18.3332 9.99996C18.3332 9.44121 18.2757 8.89579 18.1711 8.36788Z" fill="#FFC107"/>
              <path d="M2.62744 6.12121L5.36536 8.12913C6.10619 6.29496 7.90036 4.99996 9.99994 4.99996C11.2745 4.99996 12.4345 5.48079 13.317 6.26621L15.6745 3.90871C14.1887 2.52204 12.197 1.66663 9.99994 1.66663C6.74077 1.66663 3.91869 3.47371 2.62744 6.12121Z" fill="#FF3D00"/>
              <path d="M10 18.3333C12.1517 18.3333 14.1042 17.5096 15.5758 16.17L13.0047 13.9875C12.1352 14.6452 11.0858 15 10 15C7.83255 15 5.99213 13.6179 5.2988 11.6892L2.58047 13.7829C3.85255 16.4817 6.7092 18.3333 10 18.3333Z" fill="#4CAF50"/>
              <path d="M18.1711 8.36793H17.5V8.33334H10V11.6667H14.7096C14.3809 12.5902 13.7889 13.3972 13.0042 13.9879L13.0054 13.9871L15.5765 16.1696C15.4054 16.3271 18.3333 14.1667 18.3333 10C18.3333 9.44126 18.2758 8.89584 18.1711 8.36793Z" fill="#1976D2"/>
            </svg>
            <span>Lanjutkan dengan Google</span>
          </button>

          <div className="flex items-center gap-4 my-4">
            <div className="flex-1 h-px bg-neutral-800"></div>
            <span className="text-neutral-500 text-sm">atau</span>
            <div className="flex-1 h-px bg-neutral-800"></div>
          </div>

          {/* Form Login */}
          {isLogin ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecru text-white"
                  placeholder="nama@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecru text-white"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-ecru focus:ring-ecru border-neutral-700 rounded bg-neutral-800"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                    Ingat saya
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="text-ecru hover:text-primary-button-hover">
                    Lupa password?
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-eggplant hover:bg-secondary-button-hover text-white rounded-lg transition-colors"
              >
                Masuk
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecru text-white"
                  placeholder="Nama lengkap"
                  required
                />
              </div>
              <div>
                <label htmlFor="register-email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="register-email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecru text-white"
                  placeholder="nama@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="register-password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="register-password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecru text-white"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div>
                <label htmlFor="birthdate" className="block text-sm font-medium text-gray-300 mb-1">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  id="birthdate"
                  value={registerBirthdate}
                  onChange={(e) => setRegisterBirthdate(e.target.value)}
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecru text-white"
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-ecru focus:ring-ecru border-neutral-700 rounded bg-neutral-800"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                  Saya setuju dengan{" "}
                  <Link 
                    to="/syarat-ketentuan" 
                    onClick={closeModal}
                    className="text-ecru hover:text-primary-button-hover"
                  >
                    Syarat & Ketentuan
                  </Link>
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-eggplant hover:bg-secondary-button-hover text-white rounded-lg transition-colors"
              >
                Daftar
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
