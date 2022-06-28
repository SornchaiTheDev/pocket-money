import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const data: ChartData = {
  labels: ["ชอปปิ้ง", "อาหาร", "การเดินทาง", "ความบันเทิง", "อื่นๆ"],
  datasets: [
    {
      label: "ประเภทการใช้เงิน",
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options: ChartOptions = {
  plugins: {
    tooltip: {
      enabled: false,
    },
  },
};

function Byday() {
  return (
    <>
      <div className="flex justify-between items-center h-full ">
        <motion.div animate={{ opacity: [0, 1] }}>
          <div className="flex flex-col">
            <h2 className="text-gray-400">วันนี้นี้ใช้ไป</h2>
            <div className="inline-flex items-end gap-2 mt-2">
              <h1 className="text-4xl">1,250</h1>
              <h1 className="text-md">บาท</h1>
            </div>
          </div>
        </motion.div>
        <div className="w-3/12">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </>
  );
}

export default Byday;
