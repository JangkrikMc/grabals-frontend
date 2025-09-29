/**
 * api.js - Modul untuk menangani semua permintaan API ke backend
 * 
 * File ini berisi fungsi-fungsi untuk berkomunikasi dengan backend API.
 * Gunakan file ini sebagai template untuk integrasi dengan backend.
 */

// Base URL API - ganti dengan URL backend yang sebenarnya
const API_BASE_URL = 'https://api.grabals.com/api';

// Fungsi helper untuk melakukan fetch dengan opsi default
const fetchWithOptions = async (url, options = {}) => {
  // Default options
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      // Tambahkan header Authorization jika user sudah login
      ...(localStorage.getItem('token') && {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    },
  };

  // Gabungkan default options dengan options yang diberikan
  const fetchOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(`${API_BASE_URL}${url}`, fetchOptions);
    
    // Cek jika response tidak OK (status code bukan 2xx)
    if (!response.ok) {
      // Coba parse error message dari response
      let errorData;
      try {
        errorData = await response.json();
      } catch (e) {
        errorData = { message: 'Terjadi kesalahan pada server' };
      }
      
      // Tangani error berdasarkan status code
      switch (response.status) {
        case 401:
          // Unauthorized - token tidak valid atau expired
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          // Redirect ke halaman login jika diperlukan
          window.location.href = '/';
          break;
        case 403:
          // Forbidden - tidak memiliki izin
          console.error('Anda tidak memiliki izin untuk mengakses resource ini');
          break;
        case 404:
          // Not Found
          console.error('Resource tidak ditemukan');
          break;
        case 500:
          // Server Error
          console.error('Terjadi kesalahan pada server');
          break;
        default:
          console.error(`Error: ${response.status} - ${errorData.message || 'Terjadi kesalahan'}`);
      }
      
      // Throw error dengan data dari response
      throw new Error(errorData.message || 'Terjadi kesalahan');
    }
    
    // Jika response kosong atau tidak ada content
    if (response.status === 204) {
      return null;
    }
    
    // Parse response sebagai JSON
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// API untuk autentikasi
export const authAPI = {
  // Login dengan email dan password
  login: async (email, password) => {
    return fetchWithOptions('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },
  
  // Login dengan Google
  loginWithGoogle: () => {
    window.location.href = `${API_BASE_URL}/auth/google`;
  },
  
  // Register user baru
  register: async (userData) => {
    return fetchWithOptions('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },
  
  // Logout
  logout: async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return fetchWithOptions('/auth/logout', {
      method: 'POST',
    });
  },
  
  // Verifikasi token
  verifyToken: async () => {
    return fetchWithOptions('/auth/verify');
  },
  
  // Reset password
  requestPasswordReset: async (email) => {
    return fetchWithOptions('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },
  
  // Konfirmasi reset password
  confirmPasswordReset: async (token, password) => {
    return fetchWithOptions('/auth/reset-password/confirm', {
      method: 'POST',
      body: JSON.stringify({ token, password }),
    });
  },
};

// API untuk artikel
export const artikelAPI = {
  // Mendapatkan semua artikel
  getAll: async (params = {}) => {
    // Buat query string dari params
    const queryString = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
    
    return fetchWithOptions(`/artikel${queryString ? `?${queryString}` : ''}`);
  },
  
  // Mendapatkan artikel berdasarkan ID
  getById: async (id) => {
    return fetchWithOptions(`/artikel/${id}`);
  },
  
  // Mencari artikel berdasarkan kata kunci
  search: async (keyword) => {
    return fetchWithOptions(`/artikel/search?q=${encodeURIComponent(keyword)}`);
  },
  
  // Mendapatkan artikel berdasarkan kategori
  getByCategory: async (category) => {
    return fetchWithOptions(`/artikel/category/${encodeURIComponent(category)}`);
  },
  
  // Mendapatkan artikel berdasarkan tag
  getByTag: async (tag) => {
    return fetchWithOptions(`/artikel/tag/${encodeURIComponent(tag)}`);
  },
  
  // Membuat artikel baru (memerlukan autentikasi)
  create: async (artikelData) => {
    return fetchWithOptions('/artikel', {
      method: 'POST',
      body: JSON.stringify(artikelData),
    });
  },
  
  // Mengupdate artikel (memerlukan autentikasi)
  update: async (id, artikelData) => {
    return fetchWithOptions(`/artikel/${id}`, {
      method: 'PUT',
      body: JSON.stringify(artikelData),
    });
  },
  
  // Menghapus artikel (memerlukan autentikasi)
  delete: async (id) => {
    return fetchWithOptions(`/artikel/${id}`, {
      method: 'DELETE',
    });
  },
};

// API untuk user
export const userAPI = {
  // Mendapatkan profil user
  getProfile: async () => {
    return fetchWithOptions('/user/profile');
  },
  
  // Mengupdate profil user
  updateProfile: async (userData) => {
    return fetchWithOptions('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  },
  
  // Mengubah password
  changePassword: async (oldPassword, newPassword) => {
    return fetchWithOptions('/user/change-password', {
      method: 'POST',
      body: JSON.stringify({ oldPassword, newPassword }),
    });
  },
};

// Export semua API sebagai default
export default {
  auth: authAPI,
  artikel: artikelAPI,
  user: userAPI,
};