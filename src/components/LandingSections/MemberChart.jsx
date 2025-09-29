import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MemberChart = () => {
  // Warna dari palet kustom
  const ecruColor = "#C6AD7E"; // coklat muda
  const eggplantColor = "#66455A"; // ungu kecoklatan
  const roseQuartzColor = "#B4A2B5"; // ungu muda

  const data = {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Jumlah Member",
        data: [50, 120, 180, 230, 270, 302],
        borderColor: ecruColor,
        borderWidth: 2,
        backgroundColor: "rgba(0,0,0,0)",
        tension: 0.4,
        fill: false,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: ecruColor,
        pointBorderColor: eggplantColor,
        pointHoverBackgroundColor: roseQuartzColor,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(40, 33, 48, 0.9)", // raisin-black dengan opacity
        titleColor: "#D5D0DF", // lavender-web
        bodyColor: "#D5D0DF", // lavender-web
      },
    },
    scales: {
      x: {
        ticks: { color: roseQuartzColor },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      y: {
        ticks: { color: roseQuartzColor },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };

  return (
    <div className="p-6 rounded-2xl shadow-lg" style={{ backgroundColor: "transparent"}}>
      <Line data={data} options={options} />
    </div>
  );
};

export default MemberChart;