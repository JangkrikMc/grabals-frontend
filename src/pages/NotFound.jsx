import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

/**
 * Komponen NotFound - Halaman 404 dengan animasi keren
 * 
 * @returns {JSX.Element} Komponen NotFound
 */
const NotFound = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animasi untuk angka 404
  const numberVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  // Animasi untuk floating elements
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Animasi untuk partikel
  const particleVariants = {
    animate: (i) => ({
      y: [0, -100, 0],
      x: [0, Math.random() * 100 - 50, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay: i * 0.3,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="min-h-screen bg-raisin-black relative overflow-hidden flex items-center justify-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-eggplant/20 via-raisin-black to-eggplant/30" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={particleVariants}
            animate="animate"
            className="absolute w-2 h-2 bg-ecru rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-20 h-20 border-4 border-rose-quartz/30 rounded-lg"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-20 right-10 w-32 h-32 border-4 border-ecru/20 rounded-full"
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/2 right-20 w-16 h-16 bg-lavender-web/10 rounded-lg rotate-45"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) rotate(45deg)`,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* 404 Number with animation */}
        <div className="flex justify-center items-center mb-8">
          {["4", "0", "4"].map((num, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={numberVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <motion.h1
                className="text-[12rem] md:text-[16rem] font-bold text-transparent bg-clip-text bg-gradient-to-br from-ecru via-rose-quartz to-lavender-web"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                {num}
              </motion.h1>
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 text-[12rem] md:text-[16rem] font-bold text-ecru blur-2xl opacity-30"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {num}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Error message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lavender-web mb-4">
            Oops! Halaman Tidak Ditemukan
          </h2>
          <p className="text-lg text-rose-quartz/80 max-w-2xl mx-auto">
            Sepertinya halaman yang Anda cari telah berpindah dimensi atau tidak pernah ada. 
            Jangan khawatir, kami akan membantu Anda kembali ke jalur yang benar!
          </p>
        </motion.div>

        {/* Animated search icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mb-12"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            <Search className="w-16 h-16 text-ecru/60" />
          </motion.div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Back button */}
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(198, 173, 126, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-8 py-4 bg-eggplant hover:bg-eggplant/80 text-lavender-web rounded-lg font-semibold transition-all duration-300 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Kembali
          </motion.button>

          {/* Home button */}
          <motion.button
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(198, 173, 126, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-8 py-4 bg-ecru hover:bg-ecru/90 text-raisin-black rounded-lg font-semibold transition-all duration-300 shadow-lg"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Ke Halaman Utama
          </motion.button>
        </motion.div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-12 text-rose-quartz/60 text-sm"
        >
          <p>💡 Tahukah Anda? Error 404 pertama kali muncul di CERN pada tahun 1992</p>
        </motion.div>
      </div>

      {/* Animated corner decorations */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-ecru/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-rose-quartz/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      />
    </div>
  );
};

export default NotFound;
