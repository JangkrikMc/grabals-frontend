import React, { useState, useEffect } from "react";
import { authAPI } from "../services/api";

/**
 * Contoh penggunaan API Autentikasi
 * 
 * Komponen ini menunjukkan cara menggunakan API untuk:
 * 1. Login dengan email dan password
 * 2. Register user baru
 * 3. Logout
 * 4. Verifikasi token
 */
const AuthAPIExample = () => {
  // State untuk form login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // State untuk form register
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerBirthdate, setRegisterBirthdate] = useState("");
  const [registerError, setRegisterError] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  // State untuk user yang sudah login
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Cek apakah user sudah login saat komponen dimount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        // Verifikasi token
        const userData = await authAPI.verifyToken();
        setCurrentUser(userData);
      } catch (error) {
        // Token tidak valid, hapus dari localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Handler untuk login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError(null);
    setIsLoggingIn(true);

    try {
      // Panggil API untuk login
      const response = await authAPI.login(loginEmail, loginPassword);
      
      // Simpan token dan data user ke localStorage
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      
      // Update state
      setCurrentUser(response.user);
      
      // Reset form
      setLoginEmail("");
      setLoginPassword("");
    } catch (error) {
      setLoginError(error.message || "Login gagal. Silakan coba lagi.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Handler untuk register
  const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterError(null);
    setIsRegistering(true);

    try {
      // Panggil API untuk register
      const userData = {
        name: registerName,
        email: registerEmail,
        password: registerPassword,
        birthdate: registerBirthdate
      };
      
      await authAPI.register(userData);
      
      // Reset form
      setRegisterName("");
      setRegisterEmail("");
      setRegisterPassword("");
      setRegisterBirthdate("");
      
      // Tampilkan pesan sukses
      alert("Registrasi berhasil! Silakan login.");
    } catch (error) {
      setRegisterError(error.message || "Registrasi gagal. Silakan coba lagi.");
    } finally {
      setIsRegistering(false);
    }
  };

  // Handler untuk logout
  const handleLogout = async () => {
    try {
      // Panggil API untuk logout
      await authAPI.logout();
      
      // Hapus token dan data user dari localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      
      // Update state
      setCurrentUser(null);
    } catch (error) {
      console.error("Logout error:", error);
      
      // Hapus token dan data user dari localStorage meskipun terjadi error
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setCurrentUser(null);
    }
  };

  // Handler untuk login dengan Google
  const handleGoogleLogin = () => {
    authAPI.loginWithGoogle();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Contoh Penggunaan API Autentikasi</h1>

      {currentUser ? (
        // User sudah login
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Selamat datang, {currentUser.name}!</h2>
          <p className="text-gray-300 mb-4">
            Email: {currentUser.email}
          </p>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
      ) : (
        // User belum login
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Login */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            
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
              <span>Login dengan Google</span>
            </button>

            <div className="flex items-center gap-4 my-4">
              <div className="flex-1 h-px bg-neutral-700"></div>
              <span className="text-neutral-500 text-sm">atau</span>
              <div className="flex-1 h-px bg-neutral-700"></div>
            </div>
            
            {/* Form Login dengan Email */}
            <form onSubmit={handleLogin} className="space-y-4">
              {loginError && (
                <div className="bg-red-500/20 border border-red-500 rounded-lg p-3 text-sm text-red-300">
                  {loginError}
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
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
                  className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
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
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-neutral-600 rounded bg-neutral-700"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                    Ingat saya
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="text-emerald-500 hover:text-emerald-400">
                    Lupa password?
                  </a>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoggingIn ? "Memproses..." : "Login"}
              </button>
            </form>
          </div>

          {/* Form Register */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Register</h2>
            
            <form onSubmit={handleRegister} className="space-y-4">
              {registerError && (
                <div className="bg-red-500/20 border border-red-500 rounded-lg p-3 text-sm text-red-300">
                  {registerError}
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
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
                  className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
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
                  className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
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
                  className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                  required
                />
              </div>
              
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-neutral-600 rounded bg-neutral-700"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                  Saya setuju dengan <a href="#" className="text-emerald-500 hover:text-emerald-400">Syarat & Ketentuan</a>
                </label>
              </div>
              
              <button
                type="submit"
                disabled={isRegistering}
                className="w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isRegistering ? "Memproses..." : "Register"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthAPIExample;