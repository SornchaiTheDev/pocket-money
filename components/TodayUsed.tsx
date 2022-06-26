import { Line } from "react-chartjs-2";
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
const labels = [0, 1, 2, 3, 4, 5, 6];
const data: ChartData = {
  labels,
  datasets: [
    {
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
};
function TodayUsed() {
  return (
    <div className="absolute -bottom-10 left-0 w-full flex justify-center">
      <div className="bg-white p-4 rounded-lg w-11/12 shadow-md relative flex justify-between items-center">
        <div>
          <h2 className="text-gray-400">สัปดาห์ใช้ไป</h2>
          <div className="inline-flex items-end gap-2 mt-2">
            <h1 className="text-4xl">1,250</h1>
            <h1 className="text-md">บาท</h1>
          </div>
        </div>
        <div className="w-1/3">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default TodayUsed;
