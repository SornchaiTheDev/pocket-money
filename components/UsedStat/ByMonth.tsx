import { Line } from "react-chartjs-2";
import { m, motion } from "framer-motion";
import {
  Chart,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  ChartOptions,
  ChartData,
  Filler,
} from "chart.js";

Chart.register(LinearScale, CategoryScale, PointElement, LineElement, Filler);

const labels = ["มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน"];
const data: ChartData = {
  labels,
  datasets: [
    {
      label: "ใช้เงินไป",
      data: labels.map(() => Math.random() * 250),
      fill: "start",
      borderColor: "#f43f5e",
      backgroundColor: "#fecdd3",
    },
  ],
};

const options: ChartOptions = {
  responsive: true,
  elements: {
    line: {
      tension: 0.4,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: (ctx) => {
          return `ใช้เงินไป : ${ctx.parsed.y.toFixed(2)} บาท`;
        },
      },
    },
  },
};
function ByMonth() {
  return (
    <div className="flex justify-between items-center h-full">
      <motion.div animate={{ opacity: [0, 1] }}>
        <h2 className="text-gray-400">เดือนนี้ใช้ไป</h2>
        <div className="inline-flex items-end gap-2 mt-2">
          <h1 className="text-4xl">10,250</h1>
          <h1 className="text-md">บาท</h1>
        </div>
      </motion.div>
      <div className="w-1/3">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default ByMonth;
