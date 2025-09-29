import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { animate } from "@motionone/dom";
import { logout, updateProfile } from "../../features/authSlice";

/**
 * Komponen ProfileModal - Modal popup untuk menampilkan dan mengedit profil pengguna
 * 
 * @param {Object} props - Properties komponen
 * @param {boolean} props.isOpen - Status modal (terbuka/tertutup)
 * @param {Function} props.closeModal - Fungsi untuk menutup modal
 * @returns {JSX.Element} Komponen ProfileModal
 */
const ProfileModal = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  
  const [name, setName] = useState(user.name || "");
  const [isEditing, setIsEditing] = useState(false);
  
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  // Reset form ketika user berubah
  useEffect(() => {
    setName(user.name || "");
  }, [user]);

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

  // Handler untuk logout
  const handleLogout = () => {
    dispatch(logout());
    closeModal();
  };

  // Handler untuk update profile
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ name }));
    setIsEditing(false);
  };

  // Handler untuk hapus akun
  const handleDeleteAccount = () => {
    // Konfirmasi penghapusan akun
    if (window.confirm("Apakah Anda yakin ingin menghapus akun? Tindakan ini tidak dapat dibatalkan.")) {
      // Implementasi penghapusan akun sebenarnya akan mengirim request ke backend
      // Contoh: api.delete('/user/account')
      //   .then(() => {
      //     dispatch(logout());
      //     closeModal();
      //   })
      //   .catch(error => {
      //     console.error('Gagal menghapus akun:', error);
      //   });
      
      // Untuk sementara, kita hanya logout
      dispatch(logout());
      closeModal();
    }
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
            Profil Pengguna
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
          {/* Avatar dan Nama */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 rounded-full bg-eggplant/50 flex items-center justify-center mb-3">
              {user.profilePicture ? (
                <img 
                  src={user.profilePicture} 
                  alt={user.name} 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-12 w-12 text-lavender-web" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                  />
                </svg>
              )}
            </div>
            
            {isEditing ? (
              <form onSubmit={handleUpdateProfile} className="w-full">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecru text-white"
                    placeholder="Nama Anda"
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2 px-4 bg-eggplant hover:bg-secondary-button-hover text-white rounded-lg transition-colors"
                  >
                    Simpan
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      setName(user.name || "");
                    }}
                    className="flex-1 py-2 px-4 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg transition-colors"
                  >
                    Batal
                  </button>
                </div>
              </form>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-lavender-web">{user.name}</h3>
                <p className="text-sm text-gray-400">{user.email}</p>
              </>
            )}
          </div>

          {/* Menu Profil */}
          {!isEditing && (
            <div className="space-y-2">
              <button
                onClick={() => setIsEditing(true)}
                className="w-full flex items-center p-3 rounded-lg hover:bg-eggplant/30 transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-3 text-ecru" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" 
                  />
                </svg>
                <span className="text-lavender-web">Edit Profil</span>
              </button>
              
              <button
                onClick={handleLogout}
                className="w-full flex items-center p-3 rounded-lg hover:bg-eggplant/30 transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-3 text-ecru" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
                  />
                </svg>
                <span className="text-lavender-web">Keluar</span>
              </button>
              
              <button
                onClick={handleDeleteAccount}
                className="w-full flex items-center p-3 rounded-lg hover:bg-red-900/30 transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-3 text-red-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                  />
                </svg>
                <span className="text-red-500">Hapus Akun</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;