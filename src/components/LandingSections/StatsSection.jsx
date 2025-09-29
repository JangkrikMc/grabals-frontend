import React from "react";
import { FaUser, FaUsers, FaGlobe } from "react-icons/fa";
import CountUp from "../../assets/ReactBitsCompo/CountUp";
import ElasticSlider from "../../assets/ReactBitsCompo/ElasticSlider";
import { 
  FaStarHalf, FaStar, FaHeart, FaSmile, FaFire, 
  FaHeartBroken, FaSadCry, FaFireAlt 
} from "react-icons/fa";

const StatsSection = ({ refs }) => {
  const { Elemen3, Elemen4, Elemen5, Elemen6 } = refs;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-lavender-web mb-6 md:mb-8 text-center" style={{ fontFamily: "Inter, sans-serif" }}>
        Temukan Motivasi Mu dan Berkolaborasi dengan kami
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Left Column - Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Box 1 - Community Members */}
          <div ref={Elemen3} className="bg-white/5 border border-white/20 rounded-xl p-6 flex flex-col justify-center items-center shadow-lg transition hover:scale-[1.02] duration-300 h-full">
            <div className="mb-3 text-2xl md:text-3xl text-ecru">
              <FaUser />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
              <CountUp
                from={0}
                to={302}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
            </h3>
            <span className="text-neutral-200 text-sm md:text-base text-center">
              Orang Dalam Komunitas
            </span>
          </div>

          {/* Box 3 - Completed Projects */}
          <div ref={Elemen5} className="bg-white/5 border border-white/20 rounded-xl p-6 flex flex-col justify-center items-center shadow-lg transition hover:scale-[1.02] duration-300 h-full">
            <div className="mb-3 text-2xl md:text-3xl text-rose-quartz">
              <FaUsers />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
              <CountUp
                from={0}
                to={120}
                separator=","
                direction="up"
                duration={1.2}
                className="count-up-text"
              />
            </h3>
            <span className="text-neutral-200 text-sm md:text-base text-center">
              Proyek Terselesaikan
            </span>
          </div>

          {/* Box 4 - Countries Impacted */}
          <div ref={Elemen6} className="bg-white/5 border border-white/20 rounded-xl p-6 flex flex-col justify-center items-center shadow-lg transition hover:scale-[1.02] duration-300 h-full">
            <div className="mb-3 text-2xl md:text-3xl text-eggplant">
              <FaGlobe />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
              <CountUp
                from={0}
                to={15}
                separator=","
                direction="up"
                duration={1.5}
                className="count-up-text"
              />
            </h3>
            <span className="text-neutral-200 text-sm md:text-base text-center">
              Negara Terdampak
            </span>
          </div>
          
          {/* Card ke-4 dengan style yang sama seperti Kepuasan Anggota */}
          <div className="bg-white/5 border border-white/20 rounded-xl p-6 flex flex-col justify-center items-center shadow-lg transition hover:scale-[1.02] duration-300 h-full">
            <div className="w-full mb-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-neutral-300">Tingkat Keaktifan</span>
                <span className="text-sm text-ecru">85%</span>
              </div>
              <div className="w-full bg-neutral-700 rounded-full h-2">
                <div className="bg-ecru h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="w-full mb-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-neutral-300">Kolaborasi</span>
                <span className="text-sm text-ecru">92%</span>
              </div>
              <div className="w-full bg-neutral-700 rounded-full h-2">
                <div className="bg-ecru h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            
            <div className="w-full">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-neutral-300">Inovasi</span>
                <span className="text-sm text-ecru">78%</span>
              </div>
              <div className="w-full bg-neutral-700 rounded-full h-2">
                <div className="bg-ecru h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Rating Sliders */}
        <div ref={Elemen4} className="bg-white/5 border border-white/20 rounded-xl p-6 shadow-md flex flex-col justify-center items-center h-full">
          <div className="flex flex-col space-y-6 w-full max-w-md">
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-neutral-300 text-center">Kepuasan Anggota</label>
              <ElasticSlider
                leftIcon={<FaStarHalf className="text-ecru" />}
                rightIcon={<FaStar className="text-ecru" />}
                startingValue={4}
                defaultValue={4}
                maxValue={5}
                isStepped
                stepSize={1}
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-neutral-300 text-center">Tingkat Kolaborasi</label>
              <ElasticSlider
                leftIcon={<FaHeartBroken className="text-eggplant" />}
                rightIcon={<FaHeart className="text-eggplant" />}
                startingValue={4}
                defaultValue={4}
                maxValue={5}
                isStepped
                stepSize={1}
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-neutral-300 text-center">Suasana Komunitas</label>
              <ElasticSlider
                leftIcon={<FaSadCry className="text-rose-quartz" />}
                rightIcon={<FaSmile className="text-rose-quartz" />}
                startingValue={8}
                defaultValue={8}
                maxValue={10}
                isStepped
                stepSize={2}
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-neutral-300 text-center">Intensitas Kegiatan</label>
              <ElasticSlider
                leftIcon={<FaFireAlt className="text-ecru" />}
                rightIcon={<FaFire className="text-ecru" />}
                startingValue={4}
                defaultValue={4}
                maxValue={5}
                isStepped
                stepSize={1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;