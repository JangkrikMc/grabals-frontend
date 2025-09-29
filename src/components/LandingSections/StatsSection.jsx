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
    <div className="grid grid-cols-2 grid-rows-2 gap-6 ml-2 p-4">
      {/* Box 1 - Community Members */}
      <div ref={Elemen3} className="p-4 flex flex-col justify-center items-center shadow-lg transition hover:scale-[1.02] duration-300">
        <h1 className="mb-3 text-xl">
          <FaUser />
        </h1>
        <h1 className="text-xl font-bold mb-3">
          <CountUp
            from={0}
            to={302}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />
        </h1>
        <span className="ml-4 text-neutral-200 text-sm">
          Orang Dalam Komunitas
        </span>
      </div>

      {/* Box 2 - Rating Sliders */}
      <div ref={Elemen4} className="p-4 shadow-md grid grid-rows-4 gap-4">
        <ElasticSlider
          leftIcon={<FaStarHalf />}
          rightIcon={<FaStar />}
          startingValue={1}
          defaultValue={1}
          maxValue={5}
          isStepped
          stepSize={1}
        />
        <ElasticSlider
          leftIcon={<FaHeartBroken className="text-red-400" />}
          rightIcon={<FaHeart className="text-red-600" />}
          startingValue={2}
          defaultValue={2}
          maxValue={5}
          isStepped
          stepSize={1}
        />
        <ElasticSlider
          leftIcon={<FaSadCry className="text-yellow-400" />}
          rightIcon={<FaSmile className="text-yellow-600" />}
          startingValue={3}
          defaultValue={3}
          maxValue={10}
          isStepped
          stepSize={2}
        />  
        <ElasticSlider
          leftIcon={<FaFireAlt className="text-orange-400" />}
          rightIcon={<FaFire className="text-orange-600" />}
          startingValue={1}
          defaultValue={1}
          maxValue={5}
          isStepped
          stepSize={1}
        />
      </div>

      {/* Box 3 - Completed Projects */}
      <div ref={Elemen5} className="p-4 flex flex-col justify-center items-center shadow-lg transition hover:scale-[1.02] duration-300">
        <h1 className="mb-3 text-xl">
          <FaUsers />
        </h1>
        <h1 className="text-xl font-bold mb-3">
          <CountUp
            from={0}
            to={120}
            separator=","
            direction="up"
            duration={1.2}
            className="count-up-text"
          />
        </h1>
        <span className="ml-4 text-neutral-200 text-sm">
          Proyek Terselesaikan
        </span>
      </div>

      {/* Box 4 - Countries Impacted */}
      <div ref={Elemen6} className="p-4 flex flex-col justify-center items-center shadow-lg transition hover:scale-[1.02] duration-300">
        <h1 className="mb-3 text-xl">
          <FaGlobe />
        </h1>
        <h1 className="text-xl font-bold mb-3">
          <CountUp
            from={0}
            to={15}
            separator=","
            direction="up"
            duration={1.5}
            className="count-up-text"
          />
        </h1>
        <span className="ml-4 text-neutral-200 text-sm">
          Negara Terdampak
        </span>
      </div>
    </div>
  );
};

export default StatsSection;