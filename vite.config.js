import { defineConfig } from 'vite'  
import react from '@vitejs/plugin-react-swc'  
import tailwindcss from '@tailwindcss/vite'  

// https://vite.dev/config/  
export default defineConfig({  
  plugins: [  
    react(),  
    tailwindcss(),  
  ],  
  server: {  
    host: '0.0.0.0',  
    port: 5000,
    // Menambahkan konfigurasi historyApiFallback untuk menangani client-side routing
    // Ini akan mengarahkan semua permintaan ke index.html sehingga React Router dapat menangani routing
    open: true,
  },
  // Konfigurasi build untuk menangani routing di production
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  // Menambahkan konfigurasi preview untuk menangani routing saat menggunakan vite preview
  preview: {
    port: 5000,
  },
  // Menambahkan base URL untuk memastikan asset dimuat dengan benar
  base: '/',
})