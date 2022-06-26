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
import Card from "@components/Card";

const labels = [
  "จันทร์",
  "อังคาร",
  "พุธ",
  "พฤหัสบดี",
  "ศุกร์",
  "เสาร์",
  "อาทิตย์",
];

const data = {
  labels,
  datasets: [
    {
      label: "ปริมาณเงินที่ใช้ในแต่ละวัน",
      data: labels.map(() => Math.random() * 100),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function StatisticChart() {
  return (
    <Card className="p-4 col-span-2 md:col-span-1">
      <Line data={data} options={options} className="my-4" />
    </Card>
  );
}

export default StatisticChart;
