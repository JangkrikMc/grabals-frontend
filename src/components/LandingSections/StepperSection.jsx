import React from "react";
import Stepper, { Step } from "../../assets/ReactBitsCompo/Stepper";
import MemberChart from "./MemberChart";
import Carousel from "../../assets/ReactBitsCompo/Carousel";
import memberPhoto from "../../assets/foto-members/websecurity.webp";
import { FaMicrophone, FaTools, FaGlobe } from "react-icons/fa";

const StepperSection = ({ onJoinClick }) => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <Stepper initialStep={1} backButtonText="Kembali" nextButtonText="Lanjut">
        {/* Step 1 */}
        <Step>
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] items-center gap-6 sm:gap-8 py-4">
            <div>
              <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-lavender-web"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Welcome To Grabals Community
              </h2>
              <p className="text-gray-400 text-base mt-4" style={{ fontFamily: "Inter, sans-serif" }}>
                Ikuti langkah disini untuk lebih mengenal kami!
              </p>
            </div>
            <div className="flex justify-center">
              <img
                className="rounded-2xl shadow-lg w-full max-w-xs"
                src={memberPhoto}
                alt="Welcome"
              />
            </div>
          </div>
        </Step>

        {/* Step 2 – Tentang Komunitas */}
        <Step>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-4">
            <div style={{ fontFamily: "Inter, sans-serif" }}>
              <h2 className="text-xl sm:text-2xl font-semibold text-lavender-web">Apa itu Grabals?</h2>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Grabals Community adalah ruang kolaborasi untuk para kreator, developer, dan innovator
                yang ingin berbagi ide, belajar bersama, dan membangun proyek masa depan.
              </p>
            </div>
            <div>
              <img
                className="w-full h-60 object-cover rounded-xl shadow-md"
                src={memberPhoto}
                alt="Community"
              />
            </div>
          </div>
        </Step>

        {/* Step 3 – Manfaat */}
        <Step>
          <div className="py-4">
            <div className="mb-6 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-center items-center shadow-lg transition hover:scale-[1.02] duration-300">
              <h2 className="text-xl text-lavender-web font-semibold mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                Pertumbuhan Member
              </h2>
              <MemberChart/>
            </div>

            <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Sejak 2020, Grabals Community tumbuh dari komunitas kecil menjadi lebih dari 300 member di 2025, penuh kolaborasi, inovasi, dan pembelajaran bersama.
            </p>
          </div>
        </Step>

        {/* Step 4 – Aktivitas */}
        <Step>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-4" style={{ fontFamily: "Inter, sans-serif" }}>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-lavender-web">Apa yang Kami Lakukan?</h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: <FaMicrophone className="text-xl text-ecru" />, label: "Meetup bulanan & sharing session" },
                  { icon: <FaTools className="text-xl text-rose-quartz" />, label: "Workshop & hackathon mini" },
                  { icon: <FaGlobe className="text-xl text-eggplant" />, label: "Diskusi online & forum ide" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl shadow-sm hover:scale-[1.02] transition">
                    {item.icon}
                    <span className="text-gray-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                className="w-full h-56 object-cover"
                src="https://media.istockphoto.com/id/1391693595/vector/man-and-woman-politician-debating.jpg?s=612x612&w=0&k=20&c=CNdHvLoHa5JzWZ_H5MNkNxGLtETfvaMjGOaHqi8UUok="
                alt="Activity"
              />
            </div>
          </div>
        </Step>

        {/* Step 5 */}
        <Step>
          <div className="flex flex-col items-center justify-center py-4">
            <div className="h-[400px] w-full max-w-3xl mx-auto mb-6">
              <Carousel
                baseWidth={300}
                autoplay={true}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
            <h3 className="text-xl font-semibold text-center text-lavender-web mt-4" style={{ fontFamily: "Inter, sans-serif" }}>
              Jangan Ragu Diskusi Bersama Kami
            </h3>
          </div>
        </Step>

        {/* Step 6 */}
        <Step>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-4">
            <div style={{ fontFamily: "Inter, sans-serif" }}>
              <h2 className="text-2xl font-semibold text-lavender-web">Tunjukkan Proyekmu!</h2>
              <p className="text-gray-400 mt-3">Bagikan portofolio atau proyek yang sedang kamu kerjakan.</p>
              <input
                type="url"
                placeholder="Link GitHub / Portfolio"
                className="w-full px-4 py-2 rounded-lg text-slate-500 mt-4"
              />
            </div>
            <div className="bg-raisin-black rounded-xl h-56 flex items-center justify-center shadow-md">
              <span className="text-gray-500">📂 Preview Project</span>
            </div>
          </div>
        </Step>

        {/* Step 7 – Final */}
        <Step>
          <div className="flex flex-col items-center text-center py-10">
            <h2 className="text-3xl md:text-4xl font-bold text-lavender-web tracking-tight">
              Selamat 
            </h2>
            <p className="text-gray-400 mt-4 max-w-md">
              Kamu sudah siap bergabung dengan <span className="text-ecru font-medium">Grabals Community</span>.
            </p>
            <button
              onClick={onJoinClick}
              style={{ fontFamily: "Inter, sans-serif" }}
              className="mt-8 px-8 py-3 text-lg font-medium bg-eggplant hover:bg-secondary-button-hover 
                      text-white rounded-2xl shadow-lg transition-transform transform 
                      hover:-translate-y-1 hover:shadow-xl"
            >
              Gabung Sekarang
            </button>
          </div>
        </Step>
      </Stepper>
    </div>
  );
};

export default StepperSection;