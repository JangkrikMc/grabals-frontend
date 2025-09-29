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
  const data = {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Jumlah Member",
        data: [50, 120, 180, 230, 270, 302],
        borderColor: "rgba(200,200,200,0.9)",
        borderWidth: 2,
        backgroundColor: "rgba(0,0,0,0)",
        tension: 0.4,
        fill: false,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: "rgba(200,200,200,1)",
        pointBorderColor: "rgba(200,200,200,0.9)",
        pointHoverBackgroundColor: "rgba(220,220,220,1)",
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
        backgroundColor: "rgba(50,50,50,0.9)",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      x: {
        ticks: { color: "rgba(200,200,200,0.9)" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      y: {
        ticks: { color: "rgba(200,200,200,0.9)" },
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